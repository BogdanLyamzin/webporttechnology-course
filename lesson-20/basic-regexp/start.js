// Пошук
const str = "У нашій країні проживає понад 40 мільйонів людей. Ми маємо 26 областей.";

const numbers = str.match(/\b\d+\b/gi);
// console.log(numbers);

// Заміна
const comment = `Подивитися ви можете <a href="https://sitename.com">тут</a>`;

const newComment = comment.replace(/href="[\w:/.]+"/gi, `href="#"`);
// console.log(newComment);

// Чи відповідає шаблону
const phoneRegexp = /\+3\(\d{4}\) \d{3}-\d{2}-\d{2}/gi;

const phone = "+3(8067) 641-52-02";

console.log(phoneRegexp.test(phone));
