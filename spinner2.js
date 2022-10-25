//think about this before I code it 
//what do I want to have happen?
//remove the repeated setTimeouts 
//only one set timeout 
//could have a string with all of the positions
//repeat the string for each time the position is called
//add to the count timer for each time the position is called 





const animation = function() {
  let array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
  let counter = 0;

  for (let position of array) {
    counter += 200;
    setTimeout(() => {
      process.stdout.write(position);
    }, counter);
  }
  setTimeout(() => {
    console.log();
  }, counter);

};

animation();



// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);