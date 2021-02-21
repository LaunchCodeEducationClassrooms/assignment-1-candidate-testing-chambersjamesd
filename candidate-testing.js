const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer 
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["1. " + question + "\nYour Answer: ", "2. True or False: 5000 meters = 5 kilometers.\nYour Answer: ", "3. (5+3)/2*10 = ?\nYour Answer: ", "4. Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?\nYour answer: ", "5. What is the minimum crew size for the ISS?\nYour Answer: "];
var correctAnswers = [correctAnswer.toUpperCase(), "TRUE", "40", "TRAJECTORY","3"];
var candidateAnswers = [];
let passFailStatus = "FAIL"

 // TODO 1.1b: Ask for candidate's name //
function askForName() {
  candidateName = input.question("Candidate Name: ");
}

function askQuestions(a_question) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let val of questions){
  let answer = input.question("\n" + val);
  candidateAnswers.push(answer);
  console.log("Correct Answer: " + correctAnswers[candidateAnswers.length - 1]);
  }
}

//Ask questions, one by one and store answers


function gradeQuiz() {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let correct = 0;
  for (i = 0; i <5; i++){
    let thisAnswer = candidateAnswers[i].toUpperCase();
    let thisCorrect = correctAnswers[i];
    if (thisAnswer == thisCorrect){
      correct++
    }
  }
  let grade = (correct / correctAnswers.length) * 100;
  console.log("\n>>> Overall Grade: " + grade + "% (" + correct + " of 5 responses correct) <<<");
  if (grade > 79){
    passFailStatus = "PASSED";
  }
  console.log(">>> Status: " + passFailStatus + " <<<\n\n")
  return grade;
}






function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("\nWelcome, " + candidateName + "! Let's see what you've got!\n\n");
  askQuestions();
  let candidateGrade = gradeQuiz(this.candidateAnswers);

}
runProgram();
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
