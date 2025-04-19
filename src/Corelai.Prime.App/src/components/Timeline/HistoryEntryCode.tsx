interface HistoryEntryCodeProps {
    code: string

}
const HistoryEntryCode = ({code}: HistoryEntryCodeProps) =>
    (
        <div className="ms-auto pe-8">
            <h2 className="uppercase tracking-wide font-[700] text-writing-50
                    relative z-1
                    text-base/4
                    pt-8
                    text-nowrap
                    ">
                {code}</h2>

        </div>
    )

export default HistoryEntryCode;