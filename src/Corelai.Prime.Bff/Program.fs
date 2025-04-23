namespace Corelai.Prime.Bff

open Microsoft.AspNetCore.Builder
open Microsoft.Extensions.Hosting
open Railway
open Giraffe
open Timeline
open ApiResponder

module Program =
    let exitCode = 0

    let sampleApiCall: ApiResult<int, string> =
        ror {
            let! a = task { return Ok(Some 2) }
            let! b = task { return Ok(Some(a + 3)) }
            return b * 10
        }

    let webApp =
        choose [ route "/test" >=> text "ok"
                 route "/timeline/0000" >=> json ilionEvent
                 route "/rail" >=> toHttp sampleApiCall
                 route "/my-error"
                 >=> toHttp (task { return Error "Bonzio error" })
                 route "/my-not-found"
                 >=> toHttp (task { return Ok None }) ]

    [<EntryPoint>]
    let main args =

        let builder = WebApplication.CreateBuilder(args)


        builder.Services.AddGiraffe() |> ignore

        let app = builder.Build()

        app.UseGiraffe(webApp)

        app.Run()

        exitCode
