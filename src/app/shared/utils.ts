
import * as moment from 'moment';

export function randomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function getWeekStart(lang: string = window.navigator.language) {
    if (lang === 'en') {
        return 0;
    } else {
        return 1;
    }
}

export function getMonthsForCurrentLang(): string[] {
    const language = window.navigator.language;
    return moment.localeData(language).months();
}

/**
 * Return the month's name
 *
 * @param month Month number (0 is January and 11 December)
 */
export function getMonthNameForCurrentLang(month: number): string {
    const language = window.navigator.language;
    return moment.localeData(language).months()[month];
}

/**
 * Return a list with short name of weeks days. (0 is Sunday and 6 Saturday)
 * @returns week days name
 */
export function getWeekDaysForCurrentLang(): string[] {
    const language = window.navigator.language;
    return moment.localeData(language).weekdaysShort().map(d => d.toLowerCase()).map((d) => `${d[0].toUpperCase()}${d.slice(1)}`);
}
