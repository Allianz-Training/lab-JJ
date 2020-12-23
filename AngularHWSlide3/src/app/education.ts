export class Education {
  from: number;
  end: number;
  place: string;
  special: string;

  constructor(from: number, end: number, place: string, special: string) {
    this.from = from;
    this.end = end;
    this.place = place;
    this.special = special;
  }
}
