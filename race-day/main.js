let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 18;
if (registeredEarly && age > 18) {
  console.log(raceNumber += 1000)
}
if (registeredEarly && age > 18) {
  console.log(`Your number is ${raceNumber}. Race starts at 9:30 am.`);
} else if (!registeredEarly && age > 18) {
  console.log(`Your number is ${raceNumber}. Late adults run at 11:00 am.`);
}
if (age < 18) {
  console.log(`Your number is ${raceNumber}. Youth registrants run at 12:30 pm (regarldess of registration).`);
} else if (age === 18){
  console.log(`Your number is ${raceNumber}. Please see registration desk.`)
}