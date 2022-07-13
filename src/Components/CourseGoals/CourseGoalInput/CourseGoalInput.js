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
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{
            background: !isValid ? "black" : "#fad0ec",
            borderColor: !isValid ? "red" : "#8b005d",
          }}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseGoalInput;
