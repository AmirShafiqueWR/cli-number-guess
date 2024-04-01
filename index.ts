#! /usr/bin/env node
// import inquirer for taking input from user
import inquirer from "inquirer";

// define a function for user input
async function userNumber(): Promise<number> {
  const answer = await inquirer.prompt([
    {
      name: "userNumber",
      type: "number",
      message: "Please guess a number: ",
    },
  ]);
  return answer.userNumber;
}

async function playagain(): Promise<boolean> {
  var rightOption: boolean = false;
  do {
    var again = await inquirer.prompt([
      {
        name: "playAgain",
        type: "string",
        message: "Do you want to play again enter y for 'Yess' and n for 'No'",
      },
    ]);
    if (again.playAgain === "y") {
      rightOption = true;
      break;
    } else if (again.playAgain === "n") {
      rightOption = false;
      break;
    } else {
      console.log(
        "You have not entered the right option!"
      );
      continue;
    }
  } while (true);
  return rightOption;
}
// used math.random to generate a random number
// used math.floor to convert generated number into an integer
// limited math.random to 1-6 by using *6 and +1
let cont: boolean = true;
while (cont) {
  const randomNumber = Math.floor(Math.random() * 6 + 1);

//   console.log(randomNumber);

  const answer = await userNumber();

  if (answer === randomNumber) {
    console.log("Congratulation you have guessed the right number");
  } else {
    console.log("Sorry! your guess is not right");
  }

  cont = await playagain();
}
