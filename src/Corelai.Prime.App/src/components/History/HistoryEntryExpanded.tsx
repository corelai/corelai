import React from "react";
import {Guid} from "../../utils/guid.ts";
import HistoryEntryTitle from "./HistoryEntryTitle.tsx";
import TimelineEntryHeroImage from "./TimelineEntryHeroImage.tsx";
import HistoryEntryDate from "./HistoryEntryDate.tsx";
import HistoryEntryCode from "./HistoryEntryCode.tsx";
import HistoryEntryTag from "./HistoryEntryTag.tsx";
import HistoryEntrySummary from "./HistoryEntrySummary.tsx";


export interface TimelineEntry {
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
    className:string;
    historyEntry: TimelineEntry;
}



const HistoryEntryExpanded: React.FC<HistoryEntryExpandedProps> = ({historyEntry, className}) => {

    return (
        <div className={className}>

            <div className="
                sm:rounded-4xl
                bg-surface-50
                dark:bg-transparent
                dark:bg-linear-to-b dark:from-surface-50 dark:from-50% dark:to-surface-800
                shadow-sm shadow-surface-400
                dark:shadow-none
                dark:border-b-1 sm:dark:border-3 border-gold-300/30
                max-w-[499px]
                overflow-hidden
                ">

                <TimelineEntryHeroImage imagePath={historyEntry.imagePath}>
                    <HistoryEntryDate textColor={`text-writing-50`} date={historyEntry.date}/>
                    <HistoryEntryCode code={historyEntry.code}/>
                </TimelineEntryHeroImage>


                <HistoryEntryTitle title={historyEntry.title} relative={true}/>

                <HistoryEntrySummary summary={historyEntry.summary}/>

                <div className="flex justify-center
                px-8 pb-8
                sm:px-16
                gap-2
                flex-wrap
                ">
                    {historyEntry.tags.map((tag: string) => (
                       <HistoryEntryTag key={tag} tag={tag}/>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default HistoryEntryExpanded;