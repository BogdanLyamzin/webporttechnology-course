const numberRegexp = /\b\d+\b/i;

const str = "Нас - 42 мільйони!";

// console.log(numberRegexp.test(str));

const comment = `Допомога ЗСУ <a href="https://sitename.com">за посилання</a>`;
const comment2 = `<a href="https://sitename.com/">Слоти на казино</a>.
    Бонуси на перший депозит <a href="https://sitename.com">тут</a>`;

// const result = comment2.match(/Ігрові автомати/gi) || [];
// console.log(result);
// if(result.length > 1){
//     console.log("У коментарі можливий спам");
// }

const result = comment2.match(/Ігрові автомати/gi)?.length || 0;
// console.log(result);
if(result > 1){
    console.log("У коментарі можливий спам");
}

const words = "ukraine - greatest country ever. ukraine - house of brevest man in the world.";

const newWords = words.replace(/ukraine/g, "Ukraine");
console.log(newWords);
