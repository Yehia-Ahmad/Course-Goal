import React, { useState } from "react";

import "./CourseGoalInput.css";
import Button from "../../UI/Button/Button";

const CourseGoalInput = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredText);
    setEnteredText("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input
          value={enteredText}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseGoalInput;
