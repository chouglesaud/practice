abstract class Animal {
  abstract makeSound(): void;
}

class Cat extends Animal {
  makeSound(): void {
    console.log("meow meow");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bow Bow");
  }
}
const blackBoxOfAnimals: Animal[] = [new Cat(), new Dog()];

blackBoxOfAnimals.forEach((animal: Animal) => {
  animal.makeSound();
});
