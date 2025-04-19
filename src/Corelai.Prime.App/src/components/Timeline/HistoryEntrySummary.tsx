const HistoryEntrySummary = ({summary}: { summary: string }) =>
    (
        <h2 className="tracking-wide
                text-sm
                sm:text-base
                font-[400] py-12
                px-8 sm:px-16
                dark:font-[600]
                ">
            {summary}
        </h2>
    )

export default HistoryEntrySummary;