import React, {useEffect, useState} from 'react';
import {HistoryEntry} from "./HistoryEntryExpanded.tsx";
import {HistoryEntryFullDate, HistoryEntryHour} from "./HistoryEntryDate.tsx";

const isValidHistoryEntry = (obj: any): obj is HistoryEntry =>
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.code === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.date === 'string' && // verrà poi convertita
    typeof obj.summary === 'string' &&
    typeof obj.body === 'string' &&
    typeof obj.imagePath === 'string';

const parseHistoryData = (raw: any): HistoryEntry[] => {
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
    const [data, setData] = useState<HistoryEntry[]>([]);

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
            <h3 className={`font-[200] 
            text-xl
            text-writing-600
            dark:text-writing-500
            `}>events</h3>
            <h1 className={`
            text-2xl
             font-oxanium font-[600] uppercase
            dark:text-writing-300
            `}>Timeline</h1>
            {data.map((historyEntry: HistoryEntry) => (
                    <div key={historyEntry.id} className="
                    cursor-pointer
                    border-l-2
                    border-surface-400 hover:border-surface-900
                     dark:border-surface-600 dark:hover:border-surface-400
                    hover:bg-gold-200 dark:hover:bg-gold-200/20
                    dark:bg-linear-to-r dark:from-surface-300/5 dark:to-surface-900/0
                    ms-10
                    ps-8
                    flex
                    sm:justify-left items-start
                    flex-col sm:flex-row
                    relative
                    py-4 sm:py-8
                    ">
                        <HistoryPlainDate date={historyEntry.date}/>
                        <div className={`uppercase tracking-tight
                        dark:text-writing-300
                        `}>{historyEntry.title}</div>
                    </div>

                )
            )}

            {/*{data.map((historyEntry: HistoryEntry) => (*/}

            {/*        <HistoryEntryExpanded key={historyEntry.id} className="py-2" historyEntry={historyEntry}/>*/}
            {/*    )*/}
            {/*)}*/}

        </div>
    );
};

export default History;