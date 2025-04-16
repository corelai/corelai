export const formatEntryDate = (iso: string): string => {
    const date = new Date(iso);
    const year = date.getFullYear();
    const month = date.toLocaleString('en-GB', {month: 'short'});
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year} ${month} ${day} ${hours}:${minutes}`;
};