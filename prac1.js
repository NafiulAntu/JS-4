var dogAge = prompt("whats the dog age: ");

var humanAge = (dogAge - 2) * 4 + 21;

console.log(humanAge);

//
var gustList = ["Antu", "Nafiu", "Islam", "Ayman", "Saro"];

if (gustList.includes(gustList)) {
  alert("welcome!");
} else {
  alert("Sorry, maybe next time.");
}

//

var numberOfBottles = 99;
while (numberOfBottles >= 0) {
  var bottleWord = "bottle";
  if (numberOfBottles === 1) {
    bottleWord = "bottles";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
  console.log(numberOfBottles + " " + bottleWord + " of beer,");
  console.log("Take one down, pass it around,");
  numberOfBottles--;
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

//

var output = [];

function fizzBuzz() {
  for (var count = 1; count < 101; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("Fizzbuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }
  console.log(output);
}

//

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert(
    "Your love socre is " +
      loveScore +
      "%" +
      "  You love each other like Ayman love Farhan."
  );
} else {
  alert("Your love score is " + loveScore + "%");
}

//
