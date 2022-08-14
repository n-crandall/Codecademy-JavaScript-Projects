let input = 'Slop em up!';
const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  /*console.log('i is ' + i); */
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  } if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowelsArray.length; j++) {
    /*console.log('j is ' + j);*/
    if (input[i] === vowelsArray[j]) {
      resultArray.push(input[i]);
      //console.log(resultArray);
    } 
  }
}
//console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);