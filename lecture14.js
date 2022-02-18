var arr = [1, 2, 3, 4, 5];

arr.pop();  // => 5
arr // => [1, 2, 3, 4]

arr.shift();    // => 1
arr;    // => [2, 3, 4]

arr.push(6);    // => 4
arr;    // => [2, 3, 4, 6]

arr.unshift(0); // => 5
arr;    // => [0, 2, 3, 4, 6]

arr.reverse();  // => [6, 4, 3, 2, 0]
arr;    // => [6, 4, 3, 2, 0]

arr.sort();     // => [0, 2, 3, 4, 6]
arr;    // => [0, 2, 3, 4, 6]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

arr1.concat(arr2);  // => [1, 2, 3, 4, 5, 6]
arr1;   // => [1, 2, 3]
arr2;   // => [4, 5, 6]
arr3 = arr1.concat(arr2);   // => [1, 2, 3, 4, 5, 6]

var arr4 = [1, 2, 3, 1, 2, 3];

arr4.indexOf(2);    // => 1
arr4.lastIndexOf(2);    // => 4

var str = "1, 2, 3, 4, 5";

str.split(","); // => ["1", "2", "3", "4". "5"]


