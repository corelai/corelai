export type HistoryEntryProps = { title: string }

const HistoryEntryTitle = ({title}: HistoryEntryProps) =>
    (
        <div className="relative">
            <h1 className="
            uppercase tracking-tight
            font-[600]
            text-xs text-center
            px-4 py-2
            bg-surface-200 rounded-2xl sm:rounded-4xl
            shadow-xs shadow-surface-500
            absolute
            left-1/2 -translate-x-1/2
            sm:left-1/2 sm:-translate-x-1/2
            top-full  -translate-y-1/2
            text-nowrap
            ">
                {title}
            </h1>
        </div>)


export default HistoryEntryTitle