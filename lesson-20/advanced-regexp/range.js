const str = "EH123456";
// \w [a-zA-Z_]
// \d [0-9]
const passportRegexp = /^[A-Z]{2}\d{6}$/g;

// console.log(passportRegexp.test(str));

// {2,5}
// {5,}
// {1,} - +
// {0,1} - ?
// {0,} - *
const priceRegexp = /\b\d+.?\d?\b/gi;

const phrase = "Ноутбук буде коштувати 150.13 долларів";

console.log(priceRegexp.test(phrase));