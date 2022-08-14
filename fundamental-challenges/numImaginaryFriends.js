// function here:
const numImaginaryFriends = (totalFriends) => {
    totalFriends = Math.ceil(totalFriends * .25);
    return totalFriends;
  }
  
  console.log(numImaginaryFriends(30));
  
  
  
  
  // Uncomment the lines below when you're ready to try out your function
  // console.log(numImaginaryFriends(20)) // Should print 5
  // console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)