import React from "react";
import HistoryEntryTitle from "./HistoryEntryTitle.tsx";
import TimelineEntryHeroImage from "./TimelineEntryHeroImage.tsx";
import HistoryEntryDate from "./HistoryEntryDate.tsx";
import HistoryEntryCode from "./HistoryEntryCode.tsx";
import HistoryEntryTag from "./HistoryEntryTag.tsx";
import TimelineEntrySummary from "./TimelineEntrySummary.tsx";
import {Timeline} from "./Timeline.ts";



interface HistoryEntryExpandedProps {
    className:string;
    timelineEntry: Timeline;
}



const TimelineEntryExpanded: React.FC<HistoryEntryExpandedProps> = ({timelineEntry, className}) => {

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

                <TimelineEntryHeroImage imagePath={timelineEntry.imagePath}>
                    <HistoryEntryDate textColor={`text-writing-50`} date={timelineEntry.date}/>
                    <HistoryEntryCode code={timelineEntry.code}/>
                </TimelineEntryHeroImage>


                <HistoryEntryTitle title={timelineEntry.title} relative={true}/>

                <TimelineEntrySummary summary={timelineEntry.summary}/>

                <div className="flex justify-center
                px-8 pb-8
                sm:px-16
                gap-2
                flex-wrap
                ">
                    {timelineEntry.tags.map((tag: string) => (
                       <HistoryEntryTag key={tag} tag={tag}/>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default TimelineEntryExpanded;