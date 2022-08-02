const pib1 = "Козак Олександр Васильович";
const pib2 = "Йован Авак Алиевич";
const pib3 = "Lebron James";

/*
2 або 3 слова розділених пробілами
у словах немає цифр, лише літери
*/

const pibRegexp = /^[а-яА-ЯїєЇЄёЁa-zA-Z']+ [а-яА-ЯїєЇЄёЁa-zA-Z']* *[а-яА-ЯїєЇЄёЁa-zA-Z'|]+$/i;

console.log(pibRegexp.test(pib1));
// console.log(pibRegexp.test(pib2));
// console.log(pibRegexp.test(pib3));