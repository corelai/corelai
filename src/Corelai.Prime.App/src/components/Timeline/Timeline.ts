import {Guid} from "../../utils/guid.ts";

export interface Timeline {
    id: Guid
    code: string
    title: string
    date: Date
    summary: string
    tags: string[]
    lang: string
    version: number
    imagePath: string
}

