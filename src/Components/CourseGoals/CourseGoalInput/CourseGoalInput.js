import React , { useState }  from "react";

import './CourseGoalInput.css';
import Button from "../../UI/Button/Button";

const CourseGoalInput = (props) => {

    const [enteredText , setEnteredText] = useState('');
    const goalInputChangeHandler = (event) => {
        setEnteredText(event.target.value);
    }
    
    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddGoal(enteredText);
    }
    return(
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </div>
            <Button type="submit" >Add Goal</Button>
        </form>
    )
}

export default CourseGoalInput;