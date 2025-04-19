export type HistoryEntryProps = {
    title: string;
    relative: boolean;
}

const HistoryEntryTitle = ({title, relative}: HistoryEntryProps) => {
    const relativeClassName = relative ? "relative" : "";
    const translateClassName = relative ? "absolute\n" +
        "            left-1/2 -translate-x-1/2\n" +
        "            sm:left-1/2 sm:-translate-x-1/2\n" +
        "            top-full  -translate-y-1/2" : ""
    return (<div className={relativeClassName}>
        <div className={translateClassName}>
            <HistoryEntryTitleCore title={title}/>
        </div>
    </div>)
}

export type HistoryEntryTitleCoreProps = {
    title: string;
}


export const HistoryEntryTitleCore = ({title}:HistoryEntryTitleCoreProps) =>(
    <h1 className={`
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
            text-nowrap
            w-72
            `}>
        {title}
    </h1>
)

export default HistoryEntryTitle