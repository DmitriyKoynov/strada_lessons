class Man {
  #age;
  constructor(name) {
    this.name = name;
    this.#age = 22;
    this.weight = 80;

    this.getAge = function () {
      return this.#age;
    };
  }
}

const misha = new Man("Misha");
console.log(misha.getAge());
