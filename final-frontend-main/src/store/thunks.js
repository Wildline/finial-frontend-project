import * as ac from './actions/actionCreators';
const axios = require('axios');

//PATH (should be where your server is running)
let path = "http://localhost:5001/api";

// THUNKS

//All employees
export const fetchAllEmployeesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/employees`);
    dispatch(ac.fetchAllEmployees(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Single employees
export const fetchEmployeeThunk = (id) => async (dispatch) => {
  // thunk creator would not an be async function 
  // if using Promise.then:
  // return axios
  //   .get(`${path}/api/instructors/${id}`)
  //   .then((res) => res.data)
  //   .then((instructor) => dispatch(ac.fetchInstructor(instructor)))
  //   .catch((err) => console.log(err));
  try {
    let res = await axios.get(`${path}/employees/${id}`);
    dispatch(ac.fetchEmployee(res.data));
  } catch(err) {
    console.error(err);
  }
};


//All the thing you can do with the employees
export const deleteEmployeesThunk = employeeId => async dispatch => {
  try {
    await axios.delete(`${path}/employees/${employeeId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deleteEmployee(employeeId));
  } catch(err) {
    console.error(err);
  }
};


export const editEmployeeThunk = employee => async dispatch => {
  try {
    let res = await axios.put(`${path}/employees/${employee.id}`, employee);
    //res.data is the updated course object
    dispatch(ac.editEmployee(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const addEmployeeThunk = (employee) => async (dispatch) => {
  // course = { title: "CSCI 127" }
  try {
    let res = await axios.post(`${path}/employees`, employee);
    dispatch(ac.addEmployee(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};





//All Tasks
// did: editTask, deleteTask, fetchTask(s), addTask
export const fetchAllTasksThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/tasks`);
    dispatch(ac.fetchAllTasks(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const addTaskThunk = (task) => async (dispatch) => {
  // course = { title: "CSCI 127" }
  try {
    let res = await axios.post(`${path}/tasks`, task);
    dispatch(ac.addTask(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

export const deleteTasksThunk = taskId => async dispatch => {
  try {
    await axios.delete(`${path}/tasks/${taskId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deleteTask(taskId));
  } catch(err) {
    console.error(err);
  }
};

export const editTaskThunk = task => async dispatch => {
  try {
    let res = await axios.put(`${path}/tasks/${task.id}`, task);
    //res.data is the updated course object
    dispatch(ac.editTask(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Single course
export const fetchTaskThunk = id => async dispatch => {
  try {
    let res = await axios.get(`${path}/tasks/${id}`);
    dispatch(ac.fetchTask(res.data));
  } catch(err) {
    console.error(err);
  }
};
