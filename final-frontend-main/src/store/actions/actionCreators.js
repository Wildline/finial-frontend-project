import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All instructors
export const fetchAllEmployees = (instructors) => {
  return {
    type: at.FETCH_ALL_INSTRUCTORS,
    payload: instructors,
  };
};

//Single instructor
export const fetchInstructor = (instructor) => {
  return {
    type: at.FETCH_INSTRUCTOR,
    payload: instructor,
  };
};

//All courses
export const fetchAllTasks = (courses) => {
  return {
    type: at.FETCH_ALL_COURSES,
    payload: courses,
  };
};

export const addTask = (course) => {
  return {
    type: at.ADD_COURSE,
    payload: course,
  };
};

export const deleteTask = (courseId) => {
  return {
    type: at.DELETE_COURSE,
    payload: courseId,
  };
};


export const editTask = (course) => {
  return {
    type: at.EDIT_COURSE,
    payload: course,
  };
};

//Single course
export const fetchTask = (course) => {
  return {
    type: at.FETCH_COURSE,
    payload: course,
  };
};