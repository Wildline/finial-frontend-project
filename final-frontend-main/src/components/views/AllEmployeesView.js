import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../store/actions/actionCreators";
import { employee } from "../../store/reducers";

const AllEmployeesView = (props) => {
  let{employees, deleteEmployee} = props;
  
  if (!props.allEmployees.length) {
    return <div>There are no employees.</div>;
  }

  return (
    <div>
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div key={employee.id}>
          <Link to={`/employee/${employee.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{employee.department}</p>
          <br/>
          <button onClick={() => deleteEmployee(employee.id)}>X</button>
          <br/>
          <Link to={`/newemployee`}>
        <button>Add New Employees</button>
      </Link>
        </div>
        );


      })}

    </div>


    
  );

  

  
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;