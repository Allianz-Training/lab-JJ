export class Package {
  id: number;
  name: string;
  benefits: string[];
  duration: string;
  insuranceAmount: number;
  price: number;

  constructor(
    id: number,
    name: string,
    benefits: string[],
    duration: string,
    insuranceAmount: number,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.benefits = benefits;
    this.duration = duration;
    this.insuranceAmount = insuranceAmount;
    this.price = price;
  }
}
