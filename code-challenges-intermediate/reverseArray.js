// Write your code here:
const sentence = ['sense.', 'make', 'all', 'will', 'This'];
function reverseArray(sentence) { 
     let reversed = [];
     for (let i = sentence.length; i > 0; i--) {
         reversed.push(sentence[i - 1])
     } return reversed;
  };


console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];


