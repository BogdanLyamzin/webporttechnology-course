const listItemRegexp = /\d\. /gi;
/*
.
\
()
[]
+
^
$
*/
const list = `1, Купити кота.
2. Сховатися вид кота.`;
// console.log(list.match(listItemRegexp).length);

const phone = "+3(8067) 644-44-44";

const phoneRegexp = /^\+3\(\d{4}\) \d{3}-\d{2}-\d{2}$/gi;

// console.log(phoneRegexp.test(phone));

const contract = "34567/123456";

const contractRegexp = /\d{5}\/\d{6}/gi;

console.log(contractRegexp.test(contract));

const regexp = /[\^\d]/gi;