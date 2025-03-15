const obj = {};
const key1 = {};
const key2 = [];

obj[key1] = "value1";
obj[key2] = "value2";

console.log(obj);           // { '[object Object]': 'value2' }
console.log(obj[key1]);     // "value2" (key1 and key2 both became the same string)
