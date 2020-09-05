import { TimeInterface } from '.';
import { randomColor } from '../shared';

export class ScheduleShift {
    name: string;
    entry: TimeInterface;
    exit: TimeInterface;
    color: string;

    constructor(data: {name: string, entry: TimeInterface, exit: TimeInterface, color?: string}) {
        this.entry = data.entry || {hour: 7, minute: 0};
        this.exit = data.exit || {hour: 15, minute: 0};
        this.name = data.name || `${this.entryStr} - ${this.exitStr}`;
        this.color = data.color || randomColor();
    }


    public get entryStr(): string {
        return `${this.entry.hour}:${this.entry.minute}`;
    }

    public get exitStr(): string {
        return `${this.exit.hour}:${this.exit.minute}`;
    }

}

