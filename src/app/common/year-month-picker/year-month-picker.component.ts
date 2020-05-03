import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerColumn, PickerColumnOption } from '@ionic/core';

// Services
import { GlobalizeService } from '../../services';
import * as moment from 'moment';

@Component({
  selector: 'my-year-month-picker',
  templateUrl: './year-month-picker.component.html',
  styleUrls: ['./year-month-picker.component.scss'],
})
export class YearMonthPickerComponent {

  static MIN_YEAR = 1994;
  static MAX_NUM_YEARS = 30;

  /* Inputs */
  @Input() year: number;
  @Input() month: number; // 0 - Jan, 11 - December

  /* Outputs */
  @Output() yearChange = new EventEmitter<number>();
  @Output() monthChange = new EventEmitter<number>();
  @Output() change = new EventEmitter<PickerChangeValue>();


  months: string[]; // 0 - Jan, 1 - Feb, ...
  years: number[];
  monthsAndYears: MonthsAndYears;


  constructor(private pickerController: PickerController, private globalize: GlobalizeService) {
    if (this.year && this.year < YearMonthPickerComponent.MIN_YEAR) {
      throw new Error(`Input year must be bigger than ${YearMonthPickerComponent.MIN_YEAR}`);
    }

    this.months = this.globalize.getMonthsForCurrentLang();
    this.years = Array.from(Array(YearMonthPickerComponent.MAX_NUM_YEARS), (_, x) => x + YearMonthPickerComponent.MIN_YEAR);

    const currentYear = moment(moment.now()).year();
    if (this.years.indexOf(currentYear) === -1) {
      const lastYear = this.years[this.years.length - 1];
      const yearsToAdd = Math.abs(currentYear - lastYear);
      if (currentYear > lastYear) {
        this.years = this.years.concat(Array.from(Array(yearsToAdd), (_, x) => x + lastYear + 1));
      } else {
        this.years = this.years.reverse().concat(Array.from(Array(yearsToAdd), (_, x) => x)).reverse();
      }
    }
    this.years.reverse();

    this.monthsAndYears = {
      months: this.months,
      years: this.years
    };
  }

  async showPicker() {
    const options: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: PickerOptionsSelected) => {
            this.onPickerSelected(value);
          }
        }
      ],
      columns: this.createColumns(),
      mode: 'md'
    };

    const picker = await this.pickerController.create(options);
    picker.present();
  }

  createColumns(): PickerColumn[] {
    const columns: PickerColumn[] = new Array<PickerColumn>();
    const monthsColumn: PickerColumn = {
      name: `month`,
      options: this.getMonthsColumnOptions(),
      selectedIndex: this.month
    };
    columns.push(monthsColumn);
    const yearsColumn: PickerColumn = {
      name: 'year',
      options: this.getYearsColumnOptions(),
      selectedIndex: this.monthsAndYears.years.indexOf(this.year)
    };
    columns.push(yearsColumn);
    return columns;
  }

  getMonthsColumnOptions(): PickerColumnOption[] {
    const options: PickerColumnOption[] = new Array<PickerColumnOption>();
    this.monthsAndYears.months.forEach((month, index) => {
      options.push({
        text: month,
        value: index
      });
    });
    return options;
  }

  getYearsColumnOptions(): PickerColumnOption[] {
    const options: PickerColumnOption[] = new Array<PickerColumnOption>();
    this.monthsAndYears.years.forEach(year => {
      options.push({
        text: `${year}`,
        value: year
      });
    });
    return options;
  }

  private onPickerSelected(value: PickerOptionsSelected) {
    const res: PickerChangeValue = {
      month: value.month.value,
      year: value.year.value
    };
    this.year = res.year;
    this.month = res.month;
    this.yearChange.emit(this.year);
    this.monthChange.emit(this.month);
    this.change.emit(res);
  }

}

export interface PickerChangeValue {
  month: number; // 0 - Jan, 11 - Feb, ...
  year: number;
}

interface PickerOptionsSelected {
  month: PickerOptionsSelectedDetails;
  year: PickerOptionsSelectedDetails;
}

interface PickerOptionsSelectedDetails {
  text: string;
  value: number;
  columnIndex: number;
}

interface MonthsAndYears {
  months: string[];
  years: number[];
}
