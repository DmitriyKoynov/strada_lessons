interface Animal {
    name: string;
    age: number;
    sound: string;
    makeSound: () => void;
}

class Dog implements Animal {
    name: string;
    age: number;
    sound: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.sound = 'Woof!';
    }

    makeSound() {
        console.log(this.sound);
    }
}

const myDog = new Dog('Buddy', 3);
myDog.makeSound(); // Вывод: Woof!
