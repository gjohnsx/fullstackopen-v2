import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
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
      <Header course={course.title} />
      {course.parts.map(course => {
        return(
          <Content key={course.part} part={course.part} exercises={course.exercises} />
        )
      })}

      <Total totalExercises={course.totalEx()} />
    </div>

  )
};

export default App;