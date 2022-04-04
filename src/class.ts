/**
 * Typescriptにおけるインターフェースと継承の実装
 */
interface Animal{
  getAnimalType(): void;
}

class SmallAnimal implements Animal {
  constructor(
    private animalType: string,
  ) {
    this.animalType = animalType;
  }

  getAnimalType(): void {
    console.log(`${this.animalType}は動物の一種です`);
  }
}

class Dog extends SmallAnimal {
  readonly name: string;
  private address: string;
  favoriteFood: string;

  constructor(
    name: string,
    favoriteFood: string,
    address: string
  ) {
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

const dog = new Dog(
  "コタロー",
  "骨つき肉",
  "静岡県"
);

console.log(dog.getAnimalType());
console.log(dog.getName());
console.log(dog.getAddress());
dog.setAddress("東京都");
console.log(dog.getAddress());
