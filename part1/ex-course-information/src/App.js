import { useState } from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
};

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons.
      </div>
    )
  }
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handlePlusClick = () => {
    setCounter(prevCounter => prevCounter + 1);
    setAllClicks(allClicks.concat('+'));
  };

  const handleMinusClick = () => {
    setCounter(prevCounter => prevCounter - 1);
    setAllClicks(allClicks.concat('-'));
  };

  const course = {
    title: 'Half Stack application development',
    parts: [
      {part: 'Fundamentals of React', exercises: 10},
      {part: 'Using props to pass data', exercises: 7},
      {part: 'State of a component', exercises: 14},
    ],
    totalEx: function() {
      return this.parts.reduce((acc, cur) => {
        return acc += cur.exercises;
      }, 0);
    },
  };

  return (
    <div>
      <p>
        {counter}
      </p>
      <Button handleClick={handlePlusClick} text='+' />
      <Button handleClick={() => {
        setCounter(0);
        setAllClicks([]);
      }} text='reset' />
      <Button handleClick={handleMinusClick} text='-' />

      <Header course={course.title} />
      {course.parts.map(course => {
        return(
          <Content key={course.part} part={course.part} exercises={course.exercises} />
        )
      })}

      <Total totalExercises={course.totalEx()} />
      <History allClicks={allClicks} />

    </div>

  )
};

export default App;