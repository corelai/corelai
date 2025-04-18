const HistoryEntryTag = ({tag}: { tag: string }) => (
    <div className="
                    py-0.5 px-2
                    rounded-4xl text-nowrap
                    font-[400]
                    bg-surface-50
                    text-writing-900
                    outline outline-offset-1 outline-surface-200
                    text-[0.5rem]
                    uppercase tracking-tighter
                    ">
        #{tag}
    </div>
)

export default HistoryEntryTag;