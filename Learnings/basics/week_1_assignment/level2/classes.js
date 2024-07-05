class Animal {
    constructor(name, legcount, speaks) {
        this.name = name;
        this.legcount = legcount;
        this.speaks = speaks
    }

    static myType() {
        console.log("i'm an Animal") //static method assoicited with class
    }

    speak() {
        console.log(`Hi i'm ${this.name} , ${this.speaks}`);
    }
}

let dog = new Animal("doggie", 4, "bhow bhow");
let cat = new Animal("catty", 4, "meow meow");

dog.speak();
cat.speak();
Animal.myType();  //static is associated with calss so without instancited a object the method can be called

