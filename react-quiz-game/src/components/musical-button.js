import React from "react";
import * as Tone from "tone";

function MusicalButton(props) {
  const { children } = props;
  const playMusic = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
  };
  return <button onClick={playMusic}>{children}</button>;
}

export default MusicalButton;
