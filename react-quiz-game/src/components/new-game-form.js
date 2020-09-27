import React, { useState } from "react";
import "./new-game-form.css";

function NewGameForm() {
  const [name, setName] = useState("");
  const [numQuestions, setNumQuestions] = useState(10);
  const [category, setCategory] = useState(1);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onNumQuestionsChange = (event) => {
    const min = Number.parseInt(event.target.min);
    const max = Number.parseInt(event.target.max);
    const value = Number.parseInt(event.target.value);
    if (value < min) setNumQuestions(min);
    else if (value > max) setNumQuestions(max);
    else setNumQuestions(value);
  };

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (name === "") {
      alert("Please enter a name.");
      return;
    }

    // to do: kick off the game instead of alerting
    alert(
      `New game for ${name} with ${numQuestions} questions from category ${category}.`
    );
  };

  return (
    <form className="game-form" onSubmit={onFormSubmit}>
      <div className="game-form__row">
        <label className="game-form__label" htmlFor="name">
          Enter Name:
        </label>
        <input
          className="game-form__input"
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
        />
      </div>
      <div className="game-form__row">
        <label className="game-form__label" htmlFor="questions">
          Enter Number of Questions:
        </label>
        <input
          className="game-form__input"
          type="number"
          id="questions"
          min="1"
          max="50"
          value={numQuestions}
          onChange={onNumQuestionsChange}
        />
      </div>
      <div className="game-form__row">
        <label className="game-form__label" htmlFor="category">
          Pick a Category:
        </label>
        <select
          id="category"
          className="game-form__input"
          value={category}
          onChange={onCategoryChange}
        >
          <option value="1">General Knowldege</option>
          <option value="2">Entertainment: Books</option>
          <option value="3">Science</option>
        </select>
      </div>
      <div className="game-form__row">
        <input className="game-form__submit" type="submit" value="Play" />
      </div>
    </form>
  );
}

export default NewGameForm;
