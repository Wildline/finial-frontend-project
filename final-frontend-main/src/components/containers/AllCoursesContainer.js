import { Component } from 'react';
import { connect } from 'react-redux';


import { 
  fetchAllTasksThunk,
  deleteTasksThunk
} from '../../store/thunks';

import AllCoursesView from '../views/AllCoursesView';

class AllCoursesContainer extends Component {
    componentDidMount() {
      this.props.fetchAllTasks();
    }
    render(){
        return(
            <div>
                <AllCoursesView 
                  courses={this.props.allTasks}
                  deleteTask={this.props.deleteTask}   
                />
            </div>
        )
    }
}

// Map state to props;
const mapState = (state) => {
  return {
    allTasks: state.allTasks,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasksThunk()),
    deleteTask: (courseId) => dispatch(deleteTasksThunk(courseId)),
  };
};

export default connect(mapState, mapDispatch)(AllCoursesContainer);