import React from "react";
import {Guid} from "../../utils/guid.ts";
import HistoryEntryTitle from "./HistoryEntryTitle.tsx";
import HistoryEntryHeroImage from "./HistoryEntryHeroImage.tsx";
import HistoryEntryDate from "./HistoryEntryDate.tsx";
import HistoryEntryCode from "./HistoryEntryCode.tsx";
import HistoryEntryTag from "./HistoryEntryTag.tsx";


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
                    <HistoryEntryDate date={historyEntry.date}/>
                    <HistoryEntryCode code={historyEntry.code}/>
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
                       <HistoryEntryTag key={tag} tag={tag}/>
                    ))}
                </div>

            </div>
        </>
    )
}


export default HistoryEntryExpanded;