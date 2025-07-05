const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
obj.arr = String(obj.arr)

const arrValues = [];

for (let key in obj) {
    arrValues.push(obj[key]) 
        
}

console.log(arrValues)