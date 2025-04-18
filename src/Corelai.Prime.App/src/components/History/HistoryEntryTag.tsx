const HistoryEntryTag = ({tag}: { tag: string }) => (
    <div className="
                    py-1 px-3
                    rounded-4xl text-nowrap
                    font-[200]
                    bg-surface-50
                    text-writing-600
                    outline outline-offset-1 outline-surface-200
                    text-xs
                    uppercase tracking-tighter
                    ">
        #{tag}
    </div>
)

export default HistoryEntryTag;