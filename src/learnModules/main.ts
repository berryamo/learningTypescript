import { Dog } from "./Dog";

const dog = new Dog(
  "わんわん",
  "ほうれん草",
  "沖縄県"
)

console.log(dog.getAnimalType());
console.log(dog.getName());
console.log(dog.getAddress());
dog.setAddress("東京都");
console.log(dog.getAddress());
