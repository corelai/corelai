import React, {useEffect, useState} from 'react';
import TimelineEntryExpanded from "./TimelineEntryExpanded";
import {TimelineEntryFullDate, TimelineEntryTime} from "./HistoryEntryDate";
import {useModal} from "../../context/ModalContext";
import {pipe} from "fp-ts/function";
import {sortBy} from "fp-ts/Array";
import {contramap, ordDate, reverse} from "fp-ts/Ord";
import {fromFetch} from "rxjs/internal/observable/dom/fetch";
import {map, switchMap} from "rxjs";
import {Timeline as TimelineDto} from "./Timeline";
import {parseGuid} from "../../utils/guid";
import useAppSettings from "../../hooks/useAppSettings";


const parse = (raw: TimelineDto[],mediaBaseUrl:string): TimelineDto[] => {
    return raw.map((item: TimelineDto) => {
        return {
            ...item,
            id: parseGuid(item.id),
            date: new Date(item.date),
            imagePath: `${mediaBaseUrl}/${item.imagePath}`,
        };
    });
};

interface HistoryPlainDateProps {
    date: Date;
}

const TimelinePlainDate = ({date}: HistoryPlainDateProps) => (
    <div className="
                        w-48 sm:w-32
                        flex flex-row sm:flex-col
                        pb-0 sm:pb-0
                        pt-0 sm:pt-1

                        sm:pe-2 ">
        <div className={`pe-2 sm:pe-0`}>
            <TimelineEntryFullDate textColor={`
                            text-writing-800
                            dark:text-writing-200                            
                            `} date={date}/>
        </div>
        <TimelineEntryTime textColor={`
                            text-writing-800
                            dark:text-writing-200                            
                            `} date={date}/>
    </div>
)

const Timeline: React.FC = () => {
    //const [data, setData] = useState<TimelineEntry[]>([]);
    const {open} = useModal();
    const {mediaBaseUrl} = useAppSettings();
    // useEffect(() => {
    //     const loadJson = async () => {
    //         try {
    //             const response = await fetch('/timeline/prime-timeline.json');
    //             if (!response.ok) throw new Error('Fetch Error');
    //             const jsonData = await response.json();
    //             const parsed = pipe(
    //                 jsonData,
    //                 parseTimelineData,
    //                 sortBy([byDateDesc])
    //             );
    //             setData(parsed);
    //         } catch (error) {
    //             console.error('JSON fetch error:', error);
    //         }
    //     };
    //
    //     loadJson();
    // }, [byDateDesc]);

    const [timelines, setTimelines] = useState<TimelineDto[]>([]);
    const { bff } = useAppSettings();

    useEffect(() => {
        const byDateDesc = pipe(
            ordDate,
            reverse,
            contramap((entry: TimelineDto) => new Date(entry.date))
        )

        const sub = fromFetch(`${bff.apiBaseUrl}/timelines`)
            .pipe(
                switchMap(res => res.json()),
                map((el: TimelineDto[]) => parse(el,mediaBaseUrl)),
                map((timelines: TimelineDto[]) => sortBy([byDateDesc])(timelines))
            ).subscribe({
                next: setTimelines,
                error: err => console.error('Timeline fetch failed', err),
                //complete: () => console.log('Timeline fetch complete')
            })

        return () => sub.unsubscribe()
    }, [bff,mediaBaseUrl])

    return (
        <div>
            {/*timeline header*/}
            <div className="flex flex-row sm:flex-col">
                <h3 className={`font-[200]             
                    sm:text-xl
                    text-writing-600
                    dark:text-writing-500
                    hidden sm:block
                    ps-20
                    sm:ps-23         
                    `}>
                    events
                </h3>
                <h1 className={`
                    text-xl
                    sm:text-2xl
                    font-oxanium font-[600] uppercase
                    dark:text-writing-300
                    ps-20
                    sm:ps-23
                    -mb-1
                    underline
                    `}>
                    Timeline
                </h1>
            </div>
            <div
                className="overflow-y-auto
                max-h-72
                scrollbar-thin
                scrollbar-thumb-surface-300
                scrollbar-track-transparent">

                {/*timeline table*/}
                {timelines.map((timelineEntry: TimelineDto) => (
                        // main timeline container
                        <div key={timelineEntry.id} className={`flex flex-row 
                        items-center
                        cursor-pointer group
                        `}
                             onClick={() =>
                                 open(
                                     <div>
                                         <TimelineEntryExpanded className="py-2" timelineEntry={timelineEntry}/>
                                     </div>
                                 )
                             }

                        >


                            {/*spacer*/}
                            <div className={`
                        pe-8
                        sm:pe-10
                        
                        `}></div>

                            {/*image*/}
                            <div className={`     
                                           
                        h-14 sm:h-18
                         aspect-square bg-center bg-cover bg-no-repeat 
                        border-surface-950   dark:border-gold-100/25
                         border-2 dark:border-2
                        rounded-full`}
                                 style={{backgroundImage: `url(${timelineEntry.imagePath})`}}>

                            </div>
                            <div className={`
                        px-5
                        sm:ps-4 sm:pe-5
                        `}>

                            </div>

                            {/*timeline data*/}
                            <div key={timelineEntry.id} className="
                        border-l-2
                        border-surface-400 group-hover:border-surface-900
                         dark:border-surface-600 dark:group-hover:border-surface-400

                        group-hover:bg-gold-200 dark:group-hover:bg-transparent
                        active:bg-gold-200 dark:active:bg-transparent
                        dark:group-hover:bg-linear-to-r dark:group-hover:from-surface-300/25 dark:group-hover:to-surface-900/0
                        dark:active:bg-linear-to-r dark:active:from-surface-300/25 dark:active:to-surface-900/0
                        dark:bg-linear-to-r dark:from-surface-300/5 dark:to-surface-900/0


                        ps-8
                        flex
                        flex-col sm:flex-row
                        relative
                        py-6 sm:py-8
                        shadow-xs
                        grow
                        ">
                                {/*date*/}
                                <TimelinePlainDate date={timelineEntry.date}/>

                                {/*title*/}
                                <div className={`uppercase tracking-tight
                            dark:text-writing-300
                            text-xs
                            sm:text-base
                            `}>
                                    {timelineEntry.title}
                                </div>

                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Timeline;