namespace Corelai.Prime.Bff

open System
open System.Threading.Tasks
open Corelai.Prime.Bff.Railway
open Dapper
open FSharp.Control.Tasks
open Npgsql

module Timeline =



    [<CLIMutable>]
    type TimelineTable =
        { id: Guid
          code: string
          title: string
          date: DateTime
          summary: string
          tags: string array
          lang: string
          version: int
          image_path: string }

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

    let private openConnection (connectionString: string) : NpgsqlConnection =
        let conn = new NpgsqlConnection(connectionString)
        conn.Open()
        conn

    let getTimelines (connectionString: string) =
        ror {
            let! result =
                task {
                    use conn = openConnection connectionString

                    let sql =
                        """
                    SELECT
                        id,
                        code,
                        title,
                        date,
                        summary,
                        tags,
                        lang,
                        version,
                        image_path
                    FROM time.timeline
                """

                    let! results = conn.QueryAsync<TimelineTable>(sql)

                    return
                        results
                        |> Seq.map (fun t ->
                            { Timeline.id = t.id
                              code = t.code
                              title = t.title
                              date = t.date
                              summary = t.summary
                              tags = t.tags
                              lang = t.lang
                              version = t.version
                              imagePath = t.image_path })
                        |> Some
                        |> Ok

                }

            return result
        }

    let getTimelineById (connectionString: string) (id: Guid) =
        ror {
            let! result =
                task {
                    use conn = openConnection connectionString

                    let sql =
                        """
                    SELECT
                        id,
                        code,
                        title,
                        date,
                        summary,
                        tags,
                        lang,
                        version,
                        image_path
                    FROM time.timeline
                    where id = @id
                """

                    let! maybeResult = conn.QuerySingleOrDefaultAsync<TimelineTable>(sql, {| id = id |})

                    let resultOption =
                        match maybeResult with
                        | null -> None
                        | v -> Some v

                    return
                        resultOption
                        |> Option.map (fun t ->
                            { Timeline.id = t.id
                              code = t.code
                              title = t.title
                              date = t.date
                              summary = t.summary
                              tags = t.tags
                              lang = t.lang
                              version = t.version
                              imagePath = t.image_path })
                        |> Ok

                }

            return result
        }
