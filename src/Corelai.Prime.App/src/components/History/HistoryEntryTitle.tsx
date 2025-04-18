export type HistoryEntryProps = { title: string }

const HistoryEntryTitle = ({title}: HistoryEntryProps) =>
    (
        <div className="relative">
            <h1 className="
            uppercase
            font-[700]
            text-sm text-center
            px-4 pt-3 pb-2


            text-gold-300
            dark:text-gold-100
            bg-surface-900
            dark:bg-gold-500

            rounded-2xl sm:rounded-4xl
            border-2 border-surface-50
            dark:border-0 dark:border-y-2 dark:border-gold-300
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