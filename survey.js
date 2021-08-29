const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const answers = [];
rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  answers.push(answer);
  rl.question("What's an activity you like doing?",(answer) => {
    answers.push(answer);
    rl.question("What do you listen to while doing that?",(answer) => {
      answers.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)",(answer) => {
        answers.push(answer);
        rl.question("What's your favourite thing to eat for that meal?",(answer) => {
          answers.push(answer);
          rl.question("Which sport is your absolute favourite?",(answer) => {
            answers.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!",(answer) => {
              answers.push(answer);
              rl.close();
              const name = answers[0];
              const activity = answers[1];
              const music = answers[2];
              const meal = answers[3];
              const food = answers[4];
              const sport = answers[5];
              const superpower = answers[6];
              console.log();
              console.log(`My name is ${name} and I really like ${activity}! I listen to ${music} while eating ${food} during ${meal} and`); 
              console.log(`playing ${sport}. My superpower is ${superpower}`);
            });
          });
        });
      });
    });
    
  });
});

// console.log(`My name is ${answer}, I like to do ${answer1}. I listen music while doing ${answer2}`);
//               console.log(`My name is ${answer}, I like to do ${answer1}. I listen music while doing ${answer2}`);
//               console.log(`My name is ${answer}, I like to do ${answer1}. I listen music while doing ${answer2}`);
//               console.log(`My name is ${answer}, I like to do ${answer1}. I listen music while doing ${answer2}`);