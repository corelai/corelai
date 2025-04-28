namespace Corelai.Prime.Bff

open System
open System.Text.Json
open System.Text.Json.Serialization
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Http
open Microsoft.AspNetCore.Routing
open Microsoft.Extensions.DependencyInjection
open Microsoft.Extensions.Hosting
open Microsoft.VisualBasic.CompilerServices
open Railway
open Timeline
open ApiResponder

module Program =
    let exitCode = 0


    let toStringCore (value: string option) : string =
        match value with
        | Some v -> v
        | None -> raise (IncompleteInitialization())

    let toString value = value |> Option.ofObj |> toStringCore

    let fromRoute mapper name (ctx: HttpContext) =
        let myRouteValue =
            ctx.GetRouteValue(name)
            |> Option.ofObj
            |> Option.map _.ToString()
            |> Option.defaultValue ""
            |> fun v ->
                match v with
                | null -> ""
                | va -> va

        myRouteValue |> mapper

    let fromRouteGuid name (ctx: HttpContext) = fromRoute Guid.Parse name ctx

    let fromRouteId ctx = fromRouteGuid "id" ctx


    let configureCors (builder: WebApplicationBuilder) =
        builder.Services.AddCors(fun options ->
            options.AddDefaultPolicy(fun policy ->
                policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod()
                |> ignore))
        |> ignore


    [<EntryPoint>]
    let main args =

        let builder = WebApplication.CreateBuilder(args)


        builder.Services.ConfigureHttpJsonOptions(fun options ->
            options.SerializerOptions.WriteIndented <- false
            options.SerializerOptions.PropertyNamingPolicy <- JsonNamingPolicy.CamelCase
            options.SerializerOptions.DefaultIgnoreCondition <- JsonIgnoreCondition.WhenWritingNull
            JsonFSharpOptions.Default().AddToJsonSerializerOptions(options.SerializerOptions))
        |> ignore

        if builder.Environment.IsDevelopment() then
            configureCors builder


        let connectionString =
            builder.Configuration["Storage:PrimeBffDbConnectionString"] |> toString

        let app = builder.Build()

        app.MapGet("/timelines", fun ctx -> ror { return! getTimelines connectionString } |> applyToResponse ctx)
        |> ignore

        app.MapGet(
            "/timeline/{id:Guid}",
            fun ctx ->
                ror { return! ctx |> fromRouteId |> getTimelineById connectionString }
                |> applyToResponse ctx
        )
        |> ignore


        if builder.Environment.IsDevelopment() then
            app.UseCors() |> ignore


        app.Run()

        exitCode
