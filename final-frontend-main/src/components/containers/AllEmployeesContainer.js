import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchAllEmployeesThunk } from "../../store/thunks";
import { AllEmployeesView } from "../views";

import { 
  deleteEmployeesThunk
} from '../../store/thunks';



function AllEmployeesContainer() {
  const allEmployees = useSelector((state) => state.allEmployees);
  const dispatch = useDispatch();

  //replaces componentDidMount
  useEffect(() => {
    dispatch(fetchAllEmployeesThunk());
  }, [dispatch]);

  return <AllEmployeesView 
             allEmployees={allEmployees}
             //deleteEmployee={this.props.deleteEmployee}   
             />;
}

/*
class AllEmployeesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllEmployees();
  }
  render(){
      return(
          <div>
              <AllEmployeesView 
                employees={this.props.allEmployees}
                deleteEmployee={this.props.deleteEmployee}   
              />
          </div>
      )
  }
}
*/


// Map state to props;
const mapState = (state) => {
  return {
    allEmployees: state.allEmployees,
  };
};
// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllEmployees: () => dispatch(fetchAllEmployeesThunk()),
    deleteEmployee: (employeeId) => dispatch(deleteEmployeesThunk(employeeId)),
  };
};

export default connect(mapDispatch, mapState) (AllEmployeesContainer);
