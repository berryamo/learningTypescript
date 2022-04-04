import { SmallAnimal } from "./SmallAnimal";

export class Dog extends SmallAnimal {
  readonly name: string;
  private address: string;
  favoriteFood: string;

  constructor(name: string, favoriteFood: string, address: string) {
    super("犬");
    this.name = name;
    this.favoriteFood = favoriteFood;
    this.address = address;
  }

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(place: string): void {
    this.address = place;
  }
}
