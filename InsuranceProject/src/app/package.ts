export class Package {
  id: number;
  name: string;
  benefits: string[];
  duration: string;
  insuranceAmount: number;
  price: number;
  description: string;

  constructor(
    id: number,
    name: string,
    benefits: string[],
    duration: string,
    insuranceAmount: number,
    price: number,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.benefits = benefits;
    this.duration = duration;
    this.insuranceAmount = insuranceAmount;
    this.price = price;
    this.description = description;
  }
}
