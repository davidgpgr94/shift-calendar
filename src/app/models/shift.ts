import { ScheduleShift } from '.';
import * as moment from 'moment';

export class Shift {
    from: moment.Moment;
    to: moment.Moment;
    schedule: ScheduleShift;

    constructor(data: {from: moment.Moment, to: moment.Moment, schedule?: ScheduleShift}) {
        this.from = data.from;
        this.to = data.to;
        this.schedule = data.schedule;
    }

}
