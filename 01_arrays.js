const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);
const myArr2 = new Array(1,2,3,4);
console.log(myArr2[0]);

//array methods
myArr.push(6);
myArr.push(7);
console.log(myArr);
console.log(myArr);
console.log(myArr.pop());
myArr.unshift(9);
console.log(myArr);
myArr.shift();
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
const newArr = myArr.join();
console.log(typeof(newArr));






