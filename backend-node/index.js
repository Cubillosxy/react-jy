const {inc, dec, getCount} = require("./counter");
const collectAnswers = require('./lib/questions');

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you doing to do with node js "
];
/*
const answerEvents = collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});*/

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer =>
    console.log(`question answered: ${answer}`)
);


answerEvents.on("complete", answers => {
    console.log('thanks');
    console.log(`${answers}`);
});

answerEvents.on("complete", () => process.exit());


