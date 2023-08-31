const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  // const massWord = [];
  let str = "";
  for (i = 0; i < expr.length; i = i + 10) {
    // massWord.push(expr.slice(i,i+10));
    if (decoder(expr.slice(i, i + 10)) === ` `) {
      str += ` `;
    } else {
      str += MORSE_TABLE[decoder(expr.slice(i, i + 10))];
    }
  }

  return str;
}

function decoder(elem) {
  if (elem === `**********`) {
    return ` `;
  }
  let slovo = "";
  for (let j = 0; j < elem.length; j += 2) {
    if (elem.slice(j, j + 2) === `10`) {
      slovo = slovo + `.`;
    }
    if (elem.slice(j, j + 2) === "11") {
      slovo += `-`;
    }
  }
  return slovo;
}
module.exports = {
  decode,
};
