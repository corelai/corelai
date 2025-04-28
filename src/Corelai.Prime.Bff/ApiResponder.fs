namespace Corelai.Prime.Bff

open System.Threading.Tasks
open Microsoft.AspNetCore.Http
open FSharp.Control.Tasks

module ApiResponder =
    open Railway

    let toHttp (result: ApiResult<'T, string>) (ctx: HttpContext) : Task =
        task {
            let! res = result

            match res with
            | Ok(Some value) ->
                ctx.Response.StatusCode <- StatusCodes.Status200OK
                do! ctx.Response.WriteAsJsonAsync(value)
            | Ok None ->
                let payload = {| message = "Not found" |}
                ctx.Response.StatusCode <- StatusCodes.Status404NotFound
                do! ctx.Response.WriteAsJsonAsync(payload)
            | Error err ->
                let payload = {| message = err |}
                ctx.Response.StatusCode <- StatusCodes.Status500InternalServerError
                do! ctx.Response.WriteAsJsonAsync(payload)
        }

    let applyToHttp ctx result = toHttp result ctx
