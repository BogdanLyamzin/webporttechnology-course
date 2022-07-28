const str = "Нас 40 мільйонів и будет більше!";

const numbers = str.match(/\d/g);
// console.log(numbers);
console.log(/\D/.test(str));

const passport = "ЕН2056667";
const passportNumbers = passport.match(/\d/g)?.length || 0;
// console.log(passportNumbers);

const phoneRegexp = /\d\d\d\d \d\d\d-\d\d\-\d\d/;

const phone = "8067 641-03-03";
// console.log(phoneRegexp.test(phone));

const phase = "Вивчайте Java-script.";
const regexp = /java.script/gi;
// console.log(regexp.test(phase));

const phase2 = `Разом нас багато\nНас не подолати.`;

const words = phase2.match(/\s/gi)?.length || 0;
// console.log(words + 1);

