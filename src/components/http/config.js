const databaseURL = process.env.REACT_APP_FIREBASE_DATABASEURL;

export const BASE_URL = `${databaseURL}`;

//hhttps://sky-fitness-pro-3a520-default-rtdb.europe-west1.firebasedatabase.app/courses
export const COURSES = `${databaseURL}/courses.json`;

//https://sky-fitness-pro-3a520-default-rtdb.europe-west1.firebasedatabase.app/workouts
export const WORKOUTS = `${databaseURL}/workouts.json`;

export const ADD_PROGRESS = (workoutId) => `${databaseURL}/progress/${workoutId}/.json`;