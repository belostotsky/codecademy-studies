// Check if the user is ready to play!
confirm("Are you ready to play?");
//Ask for age
var age = prompt("What's your age?");
//Age check
if(age < 13)
{
    console.log("Please ask your mom if you able to play this game.");
}
else
{
    console.log("Let's start!");
}
//introduction
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
//storyline
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
//do you want to race Bieber?
var userAnswer = prompt("Do you want to race Bieber on stage?");
//yes or no?
if(userAnswer === "yes") {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}
//feedback
var feedback = prompt("Please rate this game from 1 to 10 points.");
if(feedback > 8) {
    console.log("Thank you! We should race at the next concert!");
}
else {
    console.log("I'll keep practicing coding and racing.");
}
