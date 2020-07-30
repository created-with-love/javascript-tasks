// function highAndLow(numbers) {
//     const wordsArray = numbers.split(' ');
//     console.log(wordsArray);
//     let smallestNumber = wordsArray[0];
//     let biggerNumber = wordsArray[0];

//     for (let number of wordsArray) {

//         if (Number(number) > biggerNumber) {
//             biggerNumber = number;
//         }

//         if (smallestNumber > number) {
//             smallestNumber = number;
//         }
//     }
//     return `${biggerNumber} ${smallestNumber}`;
// }

function highAndLow(numbers) {
  const wordsArray = numbers.split(' ');
  console.log(wordsArray);
  let smallestNumber = wordsArray[0];
  let biggerNumber = wordsArray[0];

  for (let i = 0; i < wordsArray.length; i += 1) {
    if (Number(wordsArray[i]) > biggerNumber) {
      biggerNumber = Number(wordsArray[i]);
    }

    if (smallestNumber > Number(wordsArray[i])) {
      smallestNumber = Number(wordsArray[i]);
    }
  }
  return `${biggerNumber} ${smallestNumber}`;
}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));
