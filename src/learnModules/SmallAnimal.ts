import { Animal } from "./Animal";

export class SmallAnimal implements Animal {
  constructor(private animalType: string) {
    this.animalType = animalType;
  }

  getAnimalType(): void {
    console.log(`${this.animalType}は動物の一種です`);
  }
}
