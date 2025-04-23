namespace Corelai.Prime.Bff

open System

module Timeline =
    type Timeline =
        {
            id: Guid
            code: string
            title: string
            date: DateTime
            summary: string
            tags: string list
            lang: string
            version: int
            imagePath: string
        }

    let ilionEvent : Timeline =
        {
            id = Guid.Parse("2bf8b4d1-bccb-4fc9-8ad3-25e5a9476a55")
            code = "CL-PRM-HIST-0000"
            title = "ILION Constructed"
            date = DateTime.Parse("2125-03-09T12:19:00Z")
            summary = "CORELAI SECTOR completes construction of ILION, its first capital-class interstellar vessel."
            tags = [ "ilion"; "core-vessel"; "construction"; "sector-prime" ]
            lang = "en"
            version = 1
            imagePath = "/images/timeline/0000.png"
        }

