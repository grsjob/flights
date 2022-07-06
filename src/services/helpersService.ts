import { IFlights } from "../types/flights";

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

  static deleteDuplicateFlights(obj: IFlights) {
    return obj.reduce((prev, item) => {
      if (!prev.find((v) => v.flightToken === item.flightToken)) {
        prev.push(item);
      }
      return prev;
    }, []);
  }
}
