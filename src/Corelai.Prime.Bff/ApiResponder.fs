namespace Corelai.Prime.Bff

open System.Threading.Tasks
open Microsoft.AspNetCore.Http
open FSharp.Control.Tasks

module ApiResponder =
    open Railway

    let toResponse (result: ApiResult<'T, string>) (ctx: HttpContext) : Task =
        task {
            try
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
            with ex ->
                let payload = {| message = ex.Message; stackTrace = ex.StackTrace; hResult = ex.HResult |}
                ctx.Response.StatusCode <- StatusCodes.Status500InternalServerError
                do! ctx.Response.WriteAsJsonAsync(payload)
        }

    let applyToResponse ctx result = toResponse result ctx
