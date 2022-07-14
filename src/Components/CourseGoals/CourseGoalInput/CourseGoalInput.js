import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styled from "styled-components";
import "./CourseGoalInput.css";

const FormControl = styled.div`
  & {
    margin: 0.5rem 0;
  }

  & label {
    font-weight: bold;
    display: block;
    color: ${(props) => (props.invalid ? "red" : "black")};
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    background: ${(props) => (props.invalid ? "black" : "#fad0ec")};
    border-color: ${(props) => (props.invalid ? "red" : "#ccc")};
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

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
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          value={enteredText}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseGoalInput;
