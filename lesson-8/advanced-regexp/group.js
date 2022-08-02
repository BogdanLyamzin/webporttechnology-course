const phrase = "new new world";

const regexp = /(new ){2}/gi;

console.log(phrase.match(regexp).length);