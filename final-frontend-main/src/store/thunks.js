import * as ac from './actions/actionCreators';
const axios = require('axios');

//PATH (should be where your server is running)
let path = "http://localhost:5001/api";

// THUNKS

//All instructors
export const fetchAllEmployeesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/instructors`);
    dispatch(ac.fetchAllEmployees(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Single instructor
export const fetchEmployeeThunk = (id) => async (dispatch) => {
  // thunk creator would not an be async function 
  // if using Promise.then:
  // return axios
  //   .get(`${path}/api/instructors/${id}`)
  //   .then((res) => res.data)
  //   .then((instructor) => dispatch(ac.fetchInstructor(instructor)))
  //   .catch((err) => console.log(err));
  try {
    let res = await axios.get(`${path}/instructors/${id}`);
    dispatch(ac.fetchInstructor(res.data));
  } catch(err) {
    console.error(err);
  }
};

//All Tasks
// did: editTask, deleteTask, fetchTask(s), addTask
export const fetchAllTasksThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/courses`);
    dispatch(ac.fetchAllTasks(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const addTaskThunk = (course) => async (dispatch) => {
  // course = { title: "CSCI 127" }
  try {
    let res = await axios.post(`${path}/courses`, course);
    dispatch(ac.addTask(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

export const deleteTasksThunk = courseId => async dispatch => {
  try {
    await axios.delete(`${path}/courses/${courseId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deleteTask(courseId));
  } catch(err) {
    console.error(err);
  }
};

export const editTaskThunk = course => async dispatch => {
  try {
    let res = await axios.put(`${path}/courses/${course.id}`, course);
    //res.data is the updated course object
    dispatch(ac.editTask(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Single course
export const fetchTaskThunk = id => async dispatch => {
  try {
    let res = await axios.get(`${path}/courses/${id}`);
    dispatch(ac.fetchTask(res.data));
  } catch(err) {
    console.error(err);
  }
};
