namespace Corelai.Prime.Bff

open System.Text.Json
open Giraffe
open Microsoft.AspNetCore.Http


module ApiResponder =
    open Railway

    let toHttp (result: ApiResult<'T, string>) : HttpHandler =
        fun next ctx ->
            task {
                let! res = result
                match res with
                | Ok (Some value) ->
                    do! ctx.Response.WriteAsJsonAsync(value)
                    return Some ctx
                | Ok None ->
                    let payload = {| message = "Not found" |}
                    ctx.Response.StatusCode <- StatusCodes.Status404NotFound
                    do! ctx.Response.WriteAsJsonAsync(payload)
                    return Some ctx
                | Error err ->
                    let payload = {| message = err |}
                    ctx.Response.StatusCode <- StatusCodes.Status500InternalServerError
                    do! ctx.Response.WriteAsJsonAsync(payload)
                    return Some ctx
            }
