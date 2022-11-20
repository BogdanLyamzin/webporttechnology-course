const phoneRegexp = /^\d\d\d\d \d\d\d-\d\d-\d\d$/;

const phone = "8067 641-22-22";

// console.log(phoneRegexp.test(phone));

const phone2 = "8067 641-22-222";

// console.log(phoneRegexp.test(phone2));

const list = `1. Купити коту їжі.
2. Сховати від кота іжу.
3. Втекти від кота.`;

const rowCount = list.match(/\n/g)?.length || 1;
// console.log(rowCount + 1);

const numberRows = list.match(/^\d/gm)?.length || 0; 
// console.log(numberRows);

if(numberRows === rowCount + 1) {
    console.log("Це список");
}
