const clickButton = document.querySelector("#click-button");
console.log(clickButton);
let numClicks = 0;
function onButtonClicked() {
  numClicks += 1;
  console.log(`You clicked the button ${numClicks} times!`);
  clickButton.textContent = `You clicked the button ${numClicks} times!`;

  //rgb(224, 80, 140)
  const randomHue = Math.random() * 360;
  clickButton.style.backgroundColor = `hsl(${randomHue}, 100%, 25%)`;
  clickButton.style.color = "white";
}
clickButton.addEventListener("click", onButtonClicked);

const speakButton = document.querySelector("#speak-button");
speakButton.addEventListener("click", () => {
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(
    "Welcome to our fancy game site!"
  );
  utterance.pitch = 1;
  utterance.rate = 1.5;
  speechSynthesis.speak(utterance);
});
