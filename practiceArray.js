let value1 = ['Apple', 1, false]
let value2 = ['Fries', 2, true]
let value3 = ['Mars', 9, 'Apple']

var i = value1.length;
while (i--) {
    if (value1[i] !== value2[i]) return false;
}
return true