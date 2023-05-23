import { Link } from "react-router-dom";


const InstructorView = (props) => {
  const {instructor, editTask, allTasks} = props;
  let assignedTasks = allTasks.filter(task => task.instructorId===instructor.id);
  let availableTasks = allTasks.filter(task => task.instructorId!==instructor.id);
  
  return (
    <div>      
      <h1>{instructor.firstname}</h1>
      <h3>{instructor.department}</h3>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned Tasks:
        {assignedTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h4>{task.title}</h4>
            </Link>
            <button onClick={() => editTask({id:task.id, instructorId: null})}>x</button>
            </div>
          );
        })}</div>
        <div>Available Tasks:
        {availableTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h4>{task.title}</h4>
            </Link>
            <button onClick={() => editTask({id:task.id, instructorId: instructor.id})}>+</button>
            </div>
          );
        })}</div>

      </div>

  
    </div>
  );

};

export default InstructorView;