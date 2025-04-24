namespace Corelai.Prime.Bff

open Giraffe.TokenRouter
open Giraffe.ViewEngine
open Microsoft.AspNetCore.Builder
open Microsoft.Extensions.Hosting
open Railway
open Giraffe
open Timeline
open ApiResponder
open TokenRouter

module Program =
    let exitCode = 0

    let sampleApiCall: ApiResult<int, string> =
        ror {
            let! a = task { return Ok(Some 2) }
            let! b = task { return Ok(Some(a + 3)) }
            return b * 10
        }


    let notFound = setStatusCode 404 >=> text "Not found"

    let routing =
        router
            notFound
            [ route "/" (text "index")
              route "/test" (text "ok")
              routef "parsing/%s/%i" (fun (s, i) -> text (sprintf "Received %s & %i" s i))
              subRoute
                  "/errors"
                  [ GET [ route "/my-error" (toHttp (task { return Error "Bonzio error" }))
                          route "/my-not-found" (toHttp (task { return Ok None }))
                          subRoute "/v2" [ route "/my-not-found" (toHttp (task { return Ok None })) ] ] ]
              subRoute
                  "/oks"
                  [ route "/test" (text "ok")
                    route "/rail" (toHttp sampleApiCall) ]
              route
                  "/timelines/0000"
                  (ror {
                      let! a = task { return Ok(Some ilionEvent) }
                      return a
                   }
                   |> toHttp)

              ]

    [<EntryPoint>]
    let main args =

        let builder = WebApplication.CreateBuilder(args)


        builder.Services.AddGiraffe() |> ignore

        let app = builder.Build()

        app.UseGiraffe(routing)

        app.Run()

        exitCode
