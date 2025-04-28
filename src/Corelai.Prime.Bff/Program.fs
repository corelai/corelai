namespace Corelai.Prime.Bff

open System.Text.Json
open System.Text.Json.Serialization
open FSharp.Control.Tasks
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Http
open Microsoft.Extensions.DependencyInjection
open Microsoft.Extensions.Hosting
open Microsoft.VisualBasic.CompilerServices
open Timeline
open Railway

open ApiResponder

module Program =
    let exitCode = 0

    let toStringCore (value: string option) : string =
        match value with
        | Some v -> v
        | None -> raise (IncompleteInitialization())

    let toString value = value |> Option.ofObj |> toStringCore
    //
    // let sampleApiCall: ApiResult<int, string> =
    //     ror {
    //         let! a = task { return Ok(Some 2) }
    //         let! b = task { return Ok(Some(a + 3)) }
    //         return b * 10
    //     }
    //
    //
    // let errorsEndpoint =
    //     subRoute
    //               "/errors"
    //               [ GET [ route "/my-error" (toHttp (task { return Error "Bonzio error" }))
    //                       route "/my-not-found" (toHttp (task { return Ok None }))
    //                       subRoute "/v2" [ route "/my-not-found" (toHttp (task { return Ok None })) ] ] ]
    // let routing =
    //     router
    //         notFound
    //         [ route "/" (text "index")
    //           route "/test" (text "ok")
    //           routef "/parsing/%s/%i" (fun (s, i) -> text $"Received %s{s} & %i{i}")
    //           errorsEndpoint
    //           subRoute
    //               "/oks"
    //               [ route "/test" (text "ok")
    //                 route "/rail" (toHttp sampleApiCall) ]
    //           route
    //               "/timelines/0000"
    //               (ror {
    //                   let! a = task { return Ok(Some ilionEvent) }
    //                   return a
    //                }
    //                |> toHttp)
    //
    //           ]

    //let notFound = setStatusCode 404 >=> text "Not found"


    let errorApi =
        ror {
            let! res = task { return Error "my error" }
            return res
        }
        |> toHttp

    let testApi (ctx: HttpContext) =
        let bongo =
            ror {
                let! res = task { return Ok(Some(toString ctx.Request.Path.Value)) }
                return res
            }

        toHttp bongo ctx

    let testApi2 (ctx: HttpContext) =
        ror {
            let! res = task { return Ok(Some(toString ctx.Request.Path.Value)) }
            return res
        }
        |> toHttp

    let getTimelineEvents connectionString (ctx: HttpContext) =
        ror {
            let! timelineEvents =
                task {
                    let! res = Timeline.getAllTimelines connectionString

                    return
                        Ok(
                            Some(
                                res
                            )
                        )
                }

            return timelineEvents
        }
        |> applyToHttp ctx


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


        let connectionString = builder.Configuration["Storage:CorelaiPrimeBffDbConnectionString"] |> toString

        let app = builder.Build()

        app.MapGet("/", RorBuilder().Return("oki doki") |> toHttp) |> ignore

        app.MapGet("/test", testApi) |> ignore

        app.MapGet("/my-errors", errorApi) |> ignore

        app.MapGet("/timelines", getTimelineEvents connectionString) |> ignore

        //app.MapFallback(notFoundApi) |> ignore

        if builder.Environment.IsDevelopment() then
            app.UseCors() |> ignore


        app.Run()

        exitCode
