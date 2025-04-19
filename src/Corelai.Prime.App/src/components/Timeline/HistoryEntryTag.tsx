const HistoryEntryTag = ({tag}: { tag: string }) => (
    <div className="
                    py-0.5 px-2
                    rounded-4xl text-nowrap
                    text-xs
                    sm:text-sm
                    font-[400]
                    bg-surface-50
                    dark:bg-transparent
                    text-writing-500
                    dark:text-writing-300
                    outline-[0.08rem] outline-offset-1
                    outline-writing-300
                    dark:outline-writing-400
                    uppercase tracking-tighter
                    ">
        #{tag}
    </div>
)

export default HistoryEntryTag;