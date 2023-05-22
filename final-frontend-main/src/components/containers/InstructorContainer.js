import React, { Component } from "react";
import { connect } from "react-redux";
import { 
  fetchEmployeeThunk,
  fetchAllTasksThunk,
  editTaskThunk 
} from "../../store/thunks";

import { InstructorView } from "../views";

class InstructorContainer extends Component {
  componentDidMount() {
    //getting instructor ID from url
    this.props.fetchInstructor(this.props.match.params.id);
    this.props.fetchTasks();
  }

  render() {
    return (
      <InstructorView 
        instructor={this.props.instructor}
        editTask={this.props.editTask}
        allTasks={this.props.allTasks}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    instructor: state.instructor,
    allCourses: state.allCourses,

  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchInstructor: (id) => dispatch(fetchEmployeeThunk(id)),
    editTask: (course) => dispatch(editTaskThunk(course)),
    fetchTasks: () => dispatch(fetchAllTasksThunk()),

  };
};

export default connect(mapState, mapDispatch)(InstructorContainer);