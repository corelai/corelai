import React, {useEffect, useState} from 'react';
import HistoryEntryExpanded, {HistoryEntry} from "./HistoryEntryExpanded.tsx";
import {HistoryEntryTitleCore} from "./HistoryEntryTitle.tsx";
import HistoryEntryDate from "./HistoryEntryDate.tsx";

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
            {data.map((historyEntry: HistoryEntry) => (
                    <div key={historyEntry.id} className="
                    flex
                    justify-left items-center
                    flex-col sm:flex-row
                    ">
                        <div className="
                        pb-2 sm:pb-6
                        sm:pe-2 ">
                            <HistoryEntryDate textColor={`
                            text-writing-800
                            dark:text-writing-200                            
                            `} date={historyEntry.date}/>
                        </div>
                        <HistoryEntryTitleCore title={historyEntry.title}/>
                    </div>

                )
            )}

            {data.map((historyEntry: HistoryEntry) => (

                    <HistoryEntryExpanded key={historyEntry.id} className="py-2" historyEntry={historyEntry}/>
                )
            )}

        </div>
    );
};

export default History;