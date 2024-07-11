class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return `${this.name} is eating`;
  }
  makeSound() {
    return `${this.name} is shouting`;
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  sniff() {
    return `${this.name} is sniffing`;
  }
}
class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  knead() {
    return `${this.name} is kneading`;
  }
}
let animal1 = new Animal("gorilla");
let someDog = new Dog("someDog", "German Shepherd");
let persianCat = new Cat("someCat", "Persian Cat");

console.log(animal1);  // Animal {...}
console.log(animal1.eat());  // gorilla is eating

console.log(someDog);  // Dog {...}
console.log(someDog.eat());  // someDog is eating 
console.log(someDog.sniff());  // someDog is sniffing

console.log(persianCat);  // Cat {...}
console.log(persianCat.knead());  // someCat is kneading
console.log(persianCat.eat());  // someCat is eating
console.log(persianCat.makeSound());  // someCat is shouting