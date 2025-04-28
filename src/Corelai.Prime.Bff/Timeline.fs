namespace Corelai.Prime.Bff

open System
open System.Threading.Tasks
open Corelai.Prime.Bff.time
open Npgsql
open SqlHydra.Query
open HydraBuilders

module Timeline =

    type Timeline =
        { id: Guid
          code: string
          title: string
          date: DateTime
          summary: string
          tags: string array
          lang: string
          version: int
          imagePath: string }

    let openContext connectionString=
        let compiler = SqlKata.Compilers.PostgresCompiler()
        let conn = new NpgsqlConnection(connectionString)
        conn.Open()
        let ctx = new QueryContext(conn, compiler)
#if DEBUG
        // Writes your queries and parameters to the console
        ctx.Logger <- printfn "SQL: %O"
#endif
        ctx

    let private toCtx (queryContext:QueryContext) : ContextType = ContextType.op_Implicit( queryContext)
    let getAllTimelines connectionString : Task<timeline seq> =
        openContext connectionString
        |> toCtx
        |> fun ctx ->  selectTask ctx {
            for t in time.timeline do
                select t
        }
