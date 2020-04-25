import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GlobalizeService {

  constructor() { }

  public getMonthsForCurrentLang(): string[] {
    const language = window.navigator.language;
    return moment.localeData(language).months();
  }

  /**
   * Return the month's name
   *
   * @param month Month number (0 is January and 11 December)
   */
  public getMonthNameForCurrentLang(month: number): string {
    const language = window.navigator.language;
    return moment.localeData(language).months()[month];
  }

  /**
   * Return a list with short name of weeks days. (0 is Sunday and 6 Saturday)
   * @returns week days name
   */
  public getWeekDaysForCurrentLang(): string[] {
    const language = window.navigator.language;
    return moment.localeData(language).weekdaysShort().map(d => d.toLowerCase()).map((d) => `${d[0].toUpperCase()}${d.slice(1)}`);
  }


}
