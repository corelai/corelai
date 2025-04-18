import {formatEntryDateOnly, formatEntryTimeOnly} from "../../utils/FormatEntryDate.ts";


interface HistoryEntryDateProps {
    date: Date;
}

const HistoryEntryDate = ({date}: HistoryEntryDateProps) =>
    (
        <div className="ps-8">
            <h2 className="uppercase tracking-wide font-[700] text-writing-50
                        relative z-1
                        text-base/4
                        pt-8
                        ">
                {formatEntryDateOnly(date)}
            </h2>
            <h4 className="uppercase tracking-wide font-[400] text-writing-300
                        relative z-1
                        text-sm/4
                        pt-0
                        ">
                {formatEntryTimeOnly(date)}
            </h4>
        </div>
    )

export default HistoryEntryDate