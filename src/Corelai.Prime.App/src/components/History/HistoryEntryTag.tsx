const HistoryEntryTag = ({tag}: { tag: string }) => (
    <div className="
                    p-1
                    rounded-4xl text-nowrap
                    font-[200]
                    bg-surface-50
                    text-writing-900
                    outline outline-offset-1
                    text-xs
                    uppercase tracking-tighter
                    ">
        #{tag}
    </div>
)

export default HistoryEntryTag;