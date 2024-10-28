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

export function getCurrentWeekDays(startOfWeek: Date) {
    const weekDays = [];

    for (let i = 0; i < 7; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        weekDays.push(day)
    }

    return weekDays;
}

export function getLocalDate(date: string | Date) {
    const localDate = new Date(date);
    return `${localDate.getMonth() + 1}/${localDate.getDate()}/${localDate.getFullYear()} ${localDate.getHours().toString().padStart(2, '0')}:${localDate.getMinutes().toString().padStart(2, '0')}`
}

export function getISODate(date: string | Date) {
    return new Date(date).toISOString().split('T')[0];
}

export function getLocalTime(date: string | Date) {
    const localTime = new Date(date);
    return `${localTime.getHours().toString().padStart(2, '0')}:${localTime.getMinutes().toString().padStart(2, '0')}`
}

export function isDateEqual(source: string | Date, target: string | Date) {
    const sourceDate = new Date(source), targetDate = new Date(target);
    return sourceDate.getFullYear() === targetDate.getFullYear() && sourceDate.getMonth() === targetDate.getMonth() && sourceDate.getDate() === targetDate.getDate();
}