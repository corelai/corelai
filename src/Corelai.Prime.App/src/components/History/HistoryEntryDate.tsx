import {formatEntryDateOnly, formatEntryTimeOnly} from "../../utils/FormatEntryDate.ts";


interface HistoryEntryDateProps {
    textColor: string;
    date: Date;
}

export const HistoryEntryFullDate = ({textColor, date}: HistoryEntryDateProps) =>
    (
        <h2 className={`uppercase tracking-wide font-[700] 
            ${textColor}
                        relative z-1
                        text-base/4
                        
                        `}>
            {formatEntryDateOnly(date)}
        </h2>
    )
export const HistoryEntryHour = ({textColor, date}: HistoryEntryDateProps) =>
    (
        <h4 className={`uppercase tracking-wide font-[400] 
            ${textColor}
                        relative z-1
                        text-sm/4
                        `}>
            {formatEntryTimeOnly(date)}
        </h4>
    )
const HistoryEntryDate = ({textColor, date}: HistoryEntryDateProps) => {
    return (
        <div className="ps-8">
            <div className="pt-8">
                <HistoryEntryFullDate textColor={textColor} date={date} />
            </div>
            <div className="pt-0">
                <HistoryEntryHour textColor={textColor} date={date} />
            </div>
        </div>
    )
}
export default HistoryEntryDate