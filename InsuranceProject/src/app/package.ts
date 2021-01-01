export class Package {
  id: number;
  name: string;
  benefits: string[];
  duration: string;
  price: number;

  constructor(
    id: number,
    name: string,
    benefits: string[],
    duration: string,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.benefits = benefits;
    this.duration = duration;
    this.price = price;
  }
}
