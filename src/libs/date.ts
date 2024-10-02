export function findFirstMondayOfMonth(date: Date) {
    if (date.getDay() === 1) {
        if (date.getDate() < 7) {
            if (date.getDate() === 1) return date;
            return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
        }
        return findFirstMondayOfMonth(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7));
    }
    let diff = date.getDay() - 1;
    if (diff < 0) diff += 7;
    const mondayOfWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() - diff);
    if (mondayOfWeek.getMonth() !== date.getMonth()) return mondayOfWeek;
    return findFirstMondayOfMonth(mondayOfWeek);
}

export function findLastSundayOfMonth(date: Date, lastDay: number) {
    if (date.getDay() === 0) {
        if (date.getDate() > lastDay - 7) {
            if (date.getDate() === lastDay) return date;
            return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
        }
        return findLastSundayOfMonth(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7), lastDay);
    }
    let diff = 7 - date.getDay();
    const sundayOfWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() + diff);
    if (sundayOfWeek.getMonth() !== date.getMonth()) return sundayOfWeek;
    return findLastSundayOfMonth(sundayOfWeek, lastDay);
}