import React from "react";
import {Guid} from "../../utils/guid.ts";
import {formatEntryDateOnly, formatEntryTimeOnly} from "../../utils/FormatEntryDate.ts";
import HistoryEntryTitle from "./HistoryEntryTitle.tsx";


export interface HistoryEntry {
    id: Guid;
    code: string;
    title: string;
    date: Date;
    summary: string;
    body: string;
    imagePath: string;

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

                <div
                    className="h-48
                    bg-center bg-cover bg-no-repeat relative
                    grid grid-cols-2
                    "
                    style={{backgroundImage: `url(${historyEntry.imagePath})`}}
                >
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
                </div>


                <HistoryEntryTitle title={historyEntry.title}/>

                <h2 className="tracking-wide text-sm/4 font-[400] bg-surface-50 py-12
                px-16
                ">
                    {historyEntry.summary}
                </h2>

            </div>
        </>
    )
}

export default HistoryEntryExpanded;