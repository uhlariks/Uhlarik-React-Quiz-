import triviaItems from "./trivia-items.js";
import shuffle from "./shuffle.js";

function displayTriviaItem(triviaItem) {
  const { question, correct_answer, incorrect_answers } = triviaItem;
  const allAnswers = [correct_answer, ...incorrect_answers];
  const shuffledAnswers = shuffle(allAnswers);

  const newTrivia = triviaItemTemplate.content.cloneNode(true);

  const questionElement = newTrivia.querySelector(".trivia-item__question");
  questionElement.innerHTML = question;

  const buttonElements = newTrivia.querySelectorAll(".trivia-item__button");
  buttonElements.forEach((button, index) => {
    button.innerHTML = shuffledAnswers[index];
    button.addEventListener("click", onAnswerClick);
  });
  triviaContainer.appendChild(newTrivia);
}

function clearTrivia() {
  for (const child of triviaContainer.children) {
    triviaContainer.removeChild(child);
  }
}

function updateScore(newScore) {
  score = newScore;
  scoreElement.textContent = score;

  const scoreContainerElemement = scoreElement.parentElement;
  const keyframes = [
    { transform: "scale(1)" },
    { transform: "scale(1.2" },
    { transform: "scale(1" },
  ];
  const options = {
    duration: 500,
    iterations: 2,
    easing: "ease-in-out",
  };
  scoreContainerElemement.animate(keyframes, options);
}

function updateQuestionNumber() {
  questionNumberElement.textContent = `${triviaItemIndex + 1}/${
    triviaItems.length
  }`;
}

function onAnswerClick(event) {
  const { target } = event;

  //disable all buttons.
  const buttonsElements = triviaContainer.querySelectorAll(
    ".trivia-item__button"
  );
  buttonsElements.forEach((button) => {
    button.disabled = true;
    button.classList.add("trivia-item__button--disabled");
  });

  //check the answer and mark it correct or incorrect
  const selectedAnswer = target.innerHTML;
  const correctAnswer = triviaItems[triviaItemIndex].correct_answer;
  if (selectedAnswer === correctAnswer) {
    updateScore(score + 1);
    target.classList.add("trivia-item__button--correct");
  } else {
    console.log("Wrong answer");
    target.classList.add("trivia-item__button--incorrect");
  }

  const triviaElement = triviaContainer.querySelector(".trivia-item");
  const keyframes = [{ opacity: 1 }, { opacity: 0 }];
  const options = {
    duration: 1000,
    delay: 500,
    easing: "ease-in",
  };

  const animation = triviaElement.animate(keyframes, options);

  //go to the next question when the animation finishes
  animation.addEventListener("finish", () => {
    clearTrivia();
    triviaItemIndex += 1;
    if (triviaItemIndex === triviaItems.length) {
      alert(`Game over! Final score ${score}`);
    } else {
      displayTriviaItem(triviaItems[triviaItemIndex]);
      updateQuestionNumber();
    }
  });
}

let score = 0;
let triviaItemIndex = 0;
const scoreElement = document.querySelector("#score");
const questionNumberElement = document.querySelector("#question-number");
const triviaItemTemplate = document.querySelector("#trivia-item-template");
const triviaContainer = document.querySelector("#trivia-container");

updateQuestionNumber();
displayTriviaItem(triviaItems[triviaItemIndex]);
