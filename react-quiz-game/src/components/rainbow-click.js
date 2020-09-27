import React, { useState } from "react";

function RainbowClick() {
  const [numClicks, setNumClicks] = useState(0);
  const [playerName, setPlayerName] = useState("Default Name");

  const onButtonClick = (event) => {
    console.log(event.target.innerHTML);
    setNumClicks(numClicks + 1);
  };

  const onNameInputChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setPlayerName(value);
  };
  const hue = numClicks * 10;
  const textStyle = {
    backgroundColor: `hsl(${hue}, 100%, 30%)`,
    color: "white",
    padding: "1rem",
  };

  return (
    <main>
      <h1>Clicky State Demo</h1>
      <div>
        <input type="text" value={playerName} onChange={onNameInputChange} />
      </div>
      <div>
        {/* Applying style this way is useful for dynamic styles, e.g. styles that change with the state*/}
        <p style={textStyle}>
          {playerName}, you've clicked the button {numClicks} times.
        </p>
        <button onClick={onButtonClick}>Click Me!</button>
      </div>
    </main>
  );
}

export default RainbowClick;
