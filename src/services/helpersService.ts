import { ILegs } from "../types/legs";

export class HelpersService {
  static formatDate(date: string): string {
    const newDate = new Date(date);
    return newDate.toLocaleString();
  }
  static calcDuration(duration: number): string {
    const durationInHours = Math.trunc(duration / 60);
    const durationInMinute = duration - durationInHours * 60;
    return `${durationInHours} ч ${durationInMinute} мин`;
  }

  static getDuration(legs: ILegs[]): number {
    let duration = 0;
    legs.map((leg) => (duration += leg.duration));
    return duration;
  }
}
