//function here:
const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
      case 'Mercury':
        return earthWeight * .378;
        break;
      case 'Venus':
        return earthWeight * .907;
        break;
      case 'Mars':
        return earthWeight * .377;
        break;
      case 'Jupiter':
        return earthWeight * 2.36;
        break;
      case 'Saturn':
        return earthWeight * .916;
        break;
      default:
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
        break;
   }
  }
   
  console.log(calculateWeight(100, 'Jupiter'));
  console.log(calculateWeight(50, 'Mars'));
  