import React from "react";
import {Guid} from "../../utils/guid.ts";
import {formatEntryDateOnly, formatEntryTimeOnly} from "../../utils/FormatEntryDate.ts";
import HistoryEntryTitle from "./HistoryEntryTitle.tsx";
import {HistoryEntryHeroImage} from "./HistoryEntryHeroImage.tsx";


export interface HistoryEntry {
    id: Guid;
    code: string;
    title: string;
    date: Date;
    summary: string;
    body: string;
    imagePath: string;
    tags: string[];

}


interface HistoryEntryExpandedProps {
    historyEntry: HistoryEntry;
}



const HistoryEntryExpanded: React.FC<HistoryEntryExpandedProps> = ({historyEntry}) => {

    return (
        <>

            <div className="
                sm:rounded-4xl
                bg-surface-50
                shadow-sm shadow-surface-400
                dark:shadow-none
                max-w-[499px]
                overflow-hidden
                ">

                <HistoryEntryHeroImage imagePath={historyEntry.imagePath}>
                    <div className="
                     bg-linear-to-b from-surface-900/95 to-50% to-surface-50/0
                     absolute inset-0
                    "></div>
                    <div className="ps-8">
                        <h2 className="uppercase tracking-wide font-[700] text-writing-50
                        relative z-1
                        text-base/4
                        pt-8
                        ">
                            {formatEntryDateOnly(historyEntry.date)}
                        </h2>
                        <h4 className="uppercase tracking-wide font-[400] text-writing-300
                        relative z-1
                        text-sm/4
                        pt-0
                        ">
                            {formatEntryTimeOnly(historyEntry.date)}
                        </h4>
                    </div>

                    <div className="ms-auto pe-8">
                        <h2 className="uppercase tracking-wide font-[700] text-writing-50
                    relative z-1
                    text-base/4
                    pt-8
                    text-nowrap
                    ">
                            {historyEntry.code}</h2>

                    </div>
                </HistoryEntryHeroImage>


                <HistoryEntryTitle title={historyEntry.title}/>

                <h2 className="tracking-wide
                text-sm sm:text-sm/6
                font-[400]  py-12
                px-8 sm:px-16
                ">
                    {historyEntry.summary}
                </h2>

                <div className="flex justify-center
                p-12
                gap-4
                flex-wrap
                ">
                    {historyEntry.tags.map((tag: string) => (
                        <div className="
                    p-1
                    rounded-4xl text-nowrap
                    font-[200]
                    bg-surface-50
                    text-writing-900
                    outline outline-offset-1
                    text-xs
                    uppercase tracking-tighter
                    " key={tag}>
                            #{tag}
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default HistoryEntryExpanded;