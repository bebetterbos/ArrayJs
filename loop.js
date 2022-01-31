const names = ['Justin', 'Sarah', 'Chris'];

console.log('--While--');
let index = 0;
while (index < names.length) {
    const name = names[index];
    console.log(name);
    index++;
}

console.log('--for--');
for (let index = 0; index < names.length; index++) {
    const name = name[index];
    console.log(name);
}

console.log('--for of--');
for (let name of names) {
    console.log(name);
}