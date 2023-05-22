import { Link } from "react-router-dom";


const InstructorView = (props) => {
  const {instructor, editTask, allTasks} = props;
  let assignedCourses = allTasks.filter(course => course.instructorId===instructor.id);
  let availableCourses = allTasks.filter(course => course.instructorId!==instructor.id);
  
  return (
    <div>      
      <h1>{instructor.firstname}</h1>
      <h3>{instructor.department}</h3>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned courses:
        {assignedCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button onClick={() => editTask({id:course.id, instructorId: null})}>x</button>
            </div>
          );
        })}</div>
        <div>Available courses:
        {availableCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button onClick={() => editTask({id:course.id, instructorId: instructor.id})}>+</button>
            </div>
          );
        })}</div>

      </div>

  
    </div>
  );

};

export default InstructorView;