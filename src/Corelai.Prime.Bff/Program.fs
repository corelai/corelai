namespace Corelai.Prime.Bff

open System.Text.Json
open System.Text.Json.Serialization
open Microsoft.AspNetCore.Builder
open Microsoft.Extensions.DependencyInjection
open Microsoft.Extensions.Hosting
open Railway
open Giraffe
open Timeline
open ApiResponder

module Program =
    let exitCode = 0
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
            let! res = task { return Error "my error"}
            return res
        }
        |> toHttp

    let notFound =
        (ror {
            let! res = task { return Ok(None) }
            return res
         }
         |> toHttp)

    let getTimelineEvents =
        ror {
            let! timelineEvents = task { return Ok(Some timelineEvents) }
            return timelineEvents
        }
        |> toHttp

    let routing =
        TokenRouter.router
            notFound
            [
              TokenRouter.route "/my-errors" <| errorApi
              TokenRouter.route "/timelines" <| getTimelineEvents ]

    let configureCors (builder: WebApplicationBuilder) =
        builder.Services.AddCors(fun options ->
            options.AddDefaultPolicy(fun policy ->
                policy
                    .WithOrigins("http://localhost:3000")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                |> ignore
            )
        ) |> ignore

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

        builder.Services.AddGiraffe() |> ignore

        let app = builder.Build()

        if builder.Environment.IsDevelopment() then
            app.UseCors() |> ignore

        app.UseGiraffe(routing)

        app.Run()

        exitCode
