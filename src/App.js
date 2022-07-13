import React , { useState } from 'react';

import './App.css';
import CourseGoalInput from './Components/CourseGoals/CourseGoalInput/CourseGoalInput';
import CourseGoalList from './Components/CourseGoals/CourseGoalList/CourseGoalList';

const DUMMY_COURSE_GOAL = [
  { text: 'Do all exercises!', id: 'g1' },
  { text: 'Finish the course!', id: 'g2' }
]

function App() { 

  const [courseGoals , setCourseGoals] = useState(DUMMY_COURSE_GOAL);

  let content = <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>;

  if(courseGoals.length > 0){
    content = (<CourseGoalList items = {courseGoals} />);
  }

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      return([{text:enteredText , id: Math.random().toString()},...prevGoals])
    })
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseGoalInput onAddGoal = {addGoalHandler} />
      </section>
      <section>
        {content}
      </section>
    </div>
  )
}

export default App;
