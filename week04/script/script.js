let person = {
    name: 'Antonia Francisca',
    age: 30,
    profession: 'software Engineer',
    hobbies: ['reading', 'play guitar', 'hiking'],
    address: {
        street: '123 Camino Real',
        city: 'Santa Rosa',
        country: 'Honduras',
    },
    isEmployed: true,
    greet: function () {
        console.log(`Hello, My name is ${this.name}`);
    }
}

console.log(person['hobbies']);
console.log(person.hobbies[2]);
console.log(person.age);
console.log(person['address'].country);

person.age = 40;
console.log(person.age);