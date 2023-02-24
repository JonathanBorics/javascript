const one = "Guarana mindenkinek!";
const two = "give me all";
// osszeadas
console.log(one + " " + two);

// string literal
console.log(`hello ${one} ${two}`);

//escape
console.log("'");

//length
console.log(one.length);

// indexOf, lastindexOf
console.log(one.indexOf("G"));
console.log(one.lastIndexOf("e"));

// includes
console.log(one.includes(" "));

// search
console.log(one.search(" mind"));

// < ==

console.log(one < two);

// replace

console.log(one.replace("mi", "ze"));

// substr

console.log(one.substr(4, 5));

// tolowarcase , touppercase
console.log(one.toLowerCase());
console.log(two.toUpperCase());

//trim
console.log("     guarana   ".trim().length);

//string as array , charat
console.log(one[10]);
console.log(one.charAt(10));
