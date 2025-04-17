import React from "react";

export const HistoryEntryExpanded: React.FC = () => {
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

                <div className="h-48 bg-[url(/images/history/CL-PRM-HIST-0001.png)] bg-center bg-cover bg-no-repeat relative">
                    <div className="bg-surface-900/65 absolute inset-0"></div>
                    <h2 className="uppercase tracking-wide font-[700] text-writing-50
                    relative z-1
                    py-8
                    ps-2
                    "
                    >2025 Mar 16 13:19</h2>
                </div>


                <h1 className="uppercase tracking-wide font-[600] bg-surface-50">h1 600 test for the win</h1>
                <h1 className="uppercase tracking-wide font-[700] bg-surface-50">h1 700 test for the win</h1>
                <div className="py-4 bg-surface-50"></div>
                <div className="hyphens-auto indent-4 font-[400] text-base bg-surface-50"> Font 200.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium adipisci architecto blanditiis, corporis dolor eos labore laudantium maiores nisi non
                    odit
                    perspiciatis, quae
                    quaerat repellat sed soluta veritatis vitae voluptatem?

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam cumque est iure
                    maxime minima molestias non perferendis saepe, velit!
                </div>
            </div>
        </>
    )
}