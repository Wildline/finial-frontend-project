import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTaskThunk } from "../../store/thunks";
import { CourseView } from "../views";

class CourseContainer extends Component {
  componentDidMount() {
    //getting course ID from url
    this.props.fetchTask(this.props.match.params.id);
  }

  render() {
    return (
      <CourseView 
        course={this.props.course}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    course: state.course,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(CourseContainer);