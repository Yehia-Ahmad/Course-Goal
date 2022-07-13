import React , { useState } from 'react';

import CourseGoalList from './Components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseGoalInput from './Components/CourseGoals/CourseGoalInput/CourseGoalInput';
import './App.css';

const DUMMY_COURSE_GOAL = [
  { text: 'Do all exercises!', id: 'g1' },
  { text: 'Finish the course!', id: 'g2' }
]

function App() { 

  const [courseGoals , setCourseGoals] = useState(DUMMY_COURSE_GOAL);

  
  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      return([{text:enteredText , id: Math.random().toString()},...prevGoals])
    })
  }
  
  let content = <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>;

  const deleteItemHandler = (itemID) => {
    console.log(itemID);
    const upDataing = courseGoals.filter((item) => (item.id !== itemID)) ;
    setCourseGoals(upDataing);
  }

  if(courseGoals.length > 0){
    content = (<CourseGoalList items = {courseGoals} onDeleteItem={deleteItemHandler} />);
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseGoalInput onAddGoal = {addGoalHandler}  />
      </section>
      <section>
        {content}
      </section>
    </div>
  )
}

export default App;
