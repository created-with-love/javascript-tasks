// Задача 2 - 3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром
// произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

function findLongestWord(string = '') {
  // Write code under this line
  // 1) Разбить строку на массив слов
  const wordsVar = string.split(' ');
  let biggestWord = wordsVar[0];
  // 2) Разбить каждое слово на буквы
  for (let word of wordsVar) {
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  }
  return biggestWord;
  // 3) сравнить количество букв в каждом слове
  // 4) сделать сравнение на выбор самого длинного слова и вернуть его
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
('jumped');

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'

// 1) Разбить строку на массив слов
// 2) Разбить каждое слово на буквы
// 3) сравнить количество букв в каждом слове
// 4) сделать сравнение на выбор самого длинного слова и вернуть его
