class User {
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }
    increaseAge() {
        this._age += 1;
    }
    get name() { return this._name.toUpperCase()}
    set name(newName) { this._name = newName }
}

const nathan = new User('Nathan', 29, 'nchrist3@kent.edu');
nathan.name = 'Nate';
nathan.age = 50;
console.log(nathan.name);

class Admin extends User {
    constructor(name, age, email, role) {
        super(name, age, email); // parameters for the parent class
        this._role = role; // specific to the new class
    }
    get role() { return this._role.toUpperCase()}
}

const anna = new Admin('Anna', 28, 'anna@gmail.com', 'Admin');
console.log(anna.role);
console.log(anna.name); // Inherits the get name from the parent class