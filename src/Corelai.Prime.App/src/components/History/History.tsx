import React, {useEffect, useState} from 'react';
import {formatEntryDate} from "../../utils/FormatEntryDate.tsx";

const History: React.FC = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        const loadJson = async () => {
            try {
                const response = await fetch('/history/prime-history.json');
                if (!response.ok) throw new Error('Fetch Error');
                const jsonData = await response.json();
                setData(jsonData);
                console.dir(jsonData);
            } catch (error) {
                console.error('JSON fetch error:', error);
            }
        };

        loadJson();
    }, []);

    return (
        <div>

            {data.map((entry: any) => (
                <div
                    key={entry.id}
                    className=""
                >
                    {/* HEADER */}
                    <h1 className="
                    flex
                    flex-col sm:flex-row
                    sm:justify-evenly
                    items-center
                    gap-2

                    ">
                        <p className="text-sm text-gray-400 whitespace-nowrap">
                            [{formatEntryDate(entry.date)}]
                        </p>
                        <p className="

                        text-xs
                        sm:text-sm
                        md:text-base

                        font-text
                        text-normal
                        tracking-wide">
                            {entry.title}
                        </p>
                    </h1>

                    {/* IMAGE */}
                    <div className="flex justify-center py-4 bg-primary-surface">
                        <img
                            src={entry.imagePath}
                            alt={entry.summary}
                            className="max-w-80 object-contain"
                        />
                    </div>

                    {/* SUMMARY */}
                    <p className="font-[600]
                    pb-6
                    font-oxanium
                    leading-relaxed
                    bg-secondary-surface
                    text-xs
                    sm:text-sm
                    md:text-base
                    ">
                        {entry.summary}
                    </p>

                    {/* METADATA */}
                    <div className="text-normal bg-secondary-surface grid
                    sm:grid-cols-[1fr_3fr]
                    sm:gap-4
                    py-4 sm:py-6

                    text-xs
                    sm:text-sm
                    md:text-base
                    ">
                        <HistoryMetadata label="Issued by" data={entry.issuedBy}/>
                        <HistoryMetadata label="Issued to" data={entry.issuedTo}/>
                        <HistoryMetadata label="Location" data={entry.location}/>
                        <HistoryMetadata label="Language" data={entry.lang.toUpperCase()}/>
                    </div>

                    {/* BODY */}
                    <div
                        className="whitespace-pre-line leading-relaxed
                        text-xs
                        sm:text-sm
                        md:text-base
                        text-left

                        ">
                        {entry.body}
                    </div>

                    {/* TAGS */}
                    <div className="py-4 sm:py-6 md:py-8 flex flex-wrap justify-center gap-2">
                        {entry.tags.map((tag:string) => (
                            <span
                                key={tag}
                                className="text-xs
                                        px-3
                                        py-1
                                        rounded-full
                                        bg-division-surface text-division
                                        tracking-wide
                                        uppercase
                                        font-semibold"
                            >
        #{tag}
      </span>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    );
};

type HistoryMetadataProps = {
    label: string,
    data: string
}
const HistoryMetadata: React.FC<HistoryMetadataProps> = (props: HistoryMetadataProps) => {


    return (
        <>
            <span className="font-semibold text-secondary sm:ms-auto">{props.label} </span>
            <span className="pb-2 sm:pb-0 sm:me-auto">{props.data}</span>
        </>
    );
}
export default History;