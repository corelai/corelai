import React, {useEffect, useState} from 'react';
import TimelineEntryExpanded, {TimelineEntry} from "./TimelineEntryExpanded.tsx";
import {HistoryEntryFullDate, HistoryEntryHour} from "./HistoryEntryDate.tsx";
import {useModal} from "../../context/ModalContext.tsx";

const isValidHistoryEntry = (obj: any): obj is TimelineEntry =>
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.code === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.date === 'string' && // verrà poi convertita
    typeof obj.summary === 'string' &&
    typeof obj.body === 'string' &&
    typeof obj.imagePath === 'string';

const parseHistoryData = (raw: any): TimelineEntry[] => {
    if (!Array.isArray(raw)) throw new Error('Invalid JSON structure');
    return raw.map(item => {
        if (!isValidHistoryEntry(item)) throw new Error('Invalid history entry');
        return {
            ...item,
            date: new Date(item.date),
        };
    });
};

interface HistoryPlainDateProps {
    date: Date;
}

const HistoryPlainDate = ({date}: HistoryPlainDateProps) => (
    <div className="
                        w-48 sm:w-32
                        flex flex-row sm:flex-col
                        pb-2 sm:pb-0
                        pt-8 sm:pt-1
                        sm:pe-2 ">
        <div className="pe-2">
            <HistoryEntryFullDate textColor={`
                            text-writing-800
                            dark:text-writing-200                            
                            `} date={date}/>
        </div>
        <HistoryEntryHour textColor={`
                            text-writing-800
                            dark:text-writing-200                            
                            `} date={date}/>
    </div>
)

const History: React.FC = () => {
    const [data, setData] = useState<TimelineEntry[]>([]);
    const { open } = useModal();

    useEffect(() => {
        const loadJson = async () => {
            try {
                const response = await fetch('/history/prime-history.json');
                if (!response.ok) throw new Error('Fetch Error');
                const jsonData = await response.json();
                const parsed = parseHistoryData(jsonData);
                setData(parsed);
            } catch (error) {
                console.error('JSON fetch error:', error);
            }
        };

        loadJson();
    }, []);

    return (
        <div>

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
            {data.map((timelineEntry: TimelineEntry) => (
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
                        sm:justify-left items-start
                        flex-col sm:flex-row
                        relative
                        py-4 sm:py-8
                        shadow-xs
                        grow
                        ">
                            {/*date*/}
                            <HistoryPlainDate date={timelineEntry.date}/>
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

            {/*<button*/}
            {/*    onClick={() =>*/}
            {/*        open(*/}
            {/*            <div>*/}
            {/*                <h1 className="text-lg font-bold">Modale Globale</h1>*/}
            {/*                <p className="mt-2">Controllata via context Corelai-style™</p>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    }*/}
            {/*>*/}
            {/*    Apri Modale*/}
            {/*</button>*/}

            {/*{data.map((timelineEntry: TimelineEntry) => (*/}

            {/*        <TimelineEntryExpanded key={timelineEntry.id} className="py-2" timelineEntry={timelineEntry}/>*/}
            {/*    )*/}
            {/*)}*/}

        </div>
    );
};

export default History;