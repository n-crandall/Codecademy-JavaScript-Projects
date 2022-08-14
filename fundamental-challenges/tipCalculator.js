//function here:
const tipCalculator = (quality, total) => {
    if (quality === 'bad') {
      return total * .05;
    } if (quality === 'ok') {
      return total * .15;
    } if (quality === 'good') {
      return total * .20;
    } if (quality === 'excellent') {
      return total * .30;
    } else {
      return total * .18;
    }
  }
  console.log(tipCalculator('excellent', 300));
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(tipCalculator('good', 100)) //should return 20
  