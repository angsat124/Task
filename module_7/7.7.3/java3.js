const users = [
    { name: "Ангелина", age: 14 },
    { name: "Катя", age: 20 },
    { name: "Петя", age: 31 },
]

const filterUser = users.filter(user => user.age >= 18);

const newUser = filterUser.map(user => user.name);


console.log(filterUser);
console.log(newUser)