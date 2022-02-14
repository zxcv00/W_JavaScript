var str = "abcedabcde"
str.charAt(0);  // "a"
str.length  // 10
str.charAt(9);  // "e"
str.charAt(10); // ""
str.charAt(-1); // ""

str[1]; // "b"
str[10];    // undefined
str[-1];    // undefuned

str.substring(2, 4);    // "cd"
str.substr(2, 4);   // "cdea"
str.substring(2);   // "cdeabcde"
str.substr(2);  // "cdeabcde"
str.substr(-7); // "deabcde"
str.substr(-7, 2);  // "de"

str.indexOf("bc");  // 1
str.lastIndexOf("bc");  // 6
str.lastIndexOf("f");   // 1