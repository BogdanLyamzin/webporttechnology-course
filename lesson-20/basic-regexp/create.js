const regexp = new RegExp("ukraine", "i");

const regexp2 = /ukraine/i;

const str = "Ukraine - the greatest country ever";

const comment = `Бонуси та безкоштовні коди у казино <a href="https://sitename.com">тут</a>`;

const spamWord = "span";

const spamRegexp = new RegExp(spamWord, "i");

const spamResult = spamRegexp.test(comment);

console.log(spamResult);

