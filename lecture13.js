var arr = [];
var arr2 = [1, 2, 3, 4, 5];
arr2;   // => [1, 2, 3, 4, 5]

var mixed_arr = [ 1, true, 3.14, "string", {name:"object"}, [1, 2, 3]];
mixed_arr;  // => [1, ture, 3.14, "string", >object, .Array[3]]

mixed_arr.length    // => 6
arr2.length // => 5
arr.length;  // => 0
arr2[0];    // => 1
arr2[3];    // => 4
arr2[7];    // => undefined
