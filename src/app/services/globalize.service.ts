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


}
