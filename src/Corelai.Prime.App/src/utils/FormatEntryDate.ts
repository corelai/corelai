const getDateParts = (date: Date) => ({
    year: date.getFullYear(),
    month: date.toLocaleString('en-GB', { month: 'short' }),
    day: String(date.getDate()).padStart(2, '0'),
    hours: String(date.getHours()).padStart(2, '0'),
    minutes: String(date.getMinutes()).padStart(2, '0'),
});

export const formatEntryDateTime = (date: Date): string => {
    const { year, month, day, hours, minutes } = getDateParts(date);
    return `${year} ${month} ${day} ${hours}:${minutes}`;
};

export const formatEntryDateOnly = (date: Date): string => {
    const { year, month, day } = getDateParts(date);
    return `${year} ${month} ${day}`;
};

export const formatEntryTimeOnly = (date: Date): string => {
    const { hours, minutes } = getDateParts(date);
    return `${hours}:${minutes}`;
};