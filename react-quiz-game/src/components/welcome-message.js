import React from "react";

function WelcomeMessage(props) {
  const { greeting, name } = props;
  return (
    <p className="welcome-message">
      {greeting}, {name}!
    </p>
  );
}

export default WelcomeMessage;
