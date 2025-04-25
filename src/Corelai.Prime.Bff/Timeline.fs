namespace Corelai.Prime.Bff

open System
open System.Text.Json.Serialization

module Timeline =

    type Timeline =
        { id: Guid
          code: string
          title: string
          date: DateTime
          summary: string
          tags: string list
          lang: string
          version: int
          imagePath: string }

    let timelineEvents: Timeline array =
        [| { id = Guid.Parse("2bf8b4d1-bccb-4fc9-8ad3-25e5a9476a55")
             code = "CL-PRM-HIST-0000"
             title = "ILION Constructed"
             date = DateTime.Parse("2125-03-09T12:19:00Z")
             summary = "CORELAI SECTOR completes construction of ILION, its first capital-class interstellar vessel."
             tags = [ "ilion"; "core-vessel"; "construction"; "sector-prime" ]
             lang = "en"
             version = 1
             imagePath = "/images/timeline/0000.png"
             }

           { id = Guid.Parse("09b5bbda-7093-400d-9121-25abec3571f1")
             code = "CL-PRM-HIST-0001"
             title = "ILION Enters Earth Orbit"
             date = DateTime.Parse("2125-03-12T06:45:00Z")
             summary = "The flagship ILION begins orbital operations around Terra in preparation for authorization procedures."
             tags = [ "ilion"; "orbit"; "terra"; "ueg"; "sector-prime" ]
             lang = "en"
             version = 1
             imagePath = "/images/timeline/0001.png" }

           { id = Guid.Parse("8923a1f0-6718-4067-b918-c15375a9c19c")
             code = "CL-PRM-HIST-0002"
             title = "Colonization Mission Authorized"
             date = DateTime.Parse("2125-03-20T13:28:00Z")
             summary = "UEG grants CORELAI SECTOR permission to launch its first interstellar expansion mission toward TE-110D (SORAN)."
             tags = [ "authorization"; "ueg"; "mission-approval"; "soran"; "sector-prime" ]
             lang = "en"
             version = 1
             imagePath = "/images/timeline/0004.png" }

           { id = Guid.Parse("42229c5d-13cb-4910-b63a-4a0d68c83822")
             code = "CL-PRM-HIST-0003"
             title = "EMBER Constructed"
             date = DateTime.Parse("2125-04-04T13:38:00Z")
             summary = "The EMBER battle cruiser is commissioned as an advanced tactical asset for SECTOR operations."
             tags = [ "ember"; "core-vessel"; "construction"; "sector-prime" ]
             lang = "en"
             version = 1
             imagePath = "/images/timeline/0006.png" }

           { id = Guid.Parse("31967274-f5f6-4732-99b3-5d1872df9860")
             code = "CL-PRM-HIST-0004"
             title = "EMBER Joins ILION Fleet"
             date = DateTime.Parse("2125-04-09T15:35:00Z")
             summary = "EMBER enters formation with ILION, officially becoming part of CORELAI SECTOR’s expeditionary fleet."
             tags = [ "ember"; "ilion"; "fleet-formation"; "sector-prime" ]
             lang = "en"
             version = 1
             imagePath = "/images/timeline/0003.png" }

           { id = Guid.Parse("342c3c95-0260-4e7a-877f-aab056548653")
             code = "CL-PRM-HIST-0005"
             title = "Arrival at SORAN Orbit"
             date = DateTime.Parse("2125-04-20T19:45:00Z")
             summary = "CORELAI SECTOR fleet reaches orbit of TE-110D (SORAN), initiating Phase 1 of interstellar colonization."
             tags = [ "soran"; "arrival"; "colonization"; "expansion"; "sector-prime" ]
             lang = "en"
             version = 1
             imagePath = "/images/timeline/0005.png"}
        |]