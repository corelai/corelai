namespace Corelai.Prime.Bff

open System.Threading.Tasks
open FSharp.Control.Tasks

module Railway =

    type ApiResult<'T, 'E> = Task<Result<Option<'T>, 'E>>

    type RorBuilder() =
        member _.Return(value: 'T) : ApiResult<'T, 'E> = task { return Ok(Some value) }

        member _.ReturnFrom(task: ApiResult<'T, 'E>) : ApiResult<'T, 'E> = task

        member _.Bind(input: ApiResult<'T, 'E>, binder: 'T -> ApiResult<'U, 'E>) : ApiResult<'U, 'E> =
            task {
                let! result = input

                match result with
                | Ok(Some value) -> return! binder value
                | Ok None -> return Ok None
                | Error e -> return Error e
            }

        member _.Zero() : ApiResult<'T, 'E> = task { return Ok None }

        member _.Delay(f: unit -> ApiResult<'T, 'E>) : ApiResult<'T, 'E> = task { return! f () }

    let ror = RorBuilder()

    let map (f: 'T -> 'U) (input: ApiResult<'T, 'E>) : ApiResult<'U, 'E> =
        task {
            let! res = input

            match res with
            | Ok(Some v) -> return Ok(Some(f v))
            | Ok None -> return Ok None
            | Error e -> return Error e
        }
