function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}

let person = {
    name: "Angy",
    age: 25
}

printInfo.call(person)