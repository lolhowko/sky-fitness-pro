import { Route, Routes, useNavigate } from 'react-router'
import { NotFound } from './pages/not-found/NotFound'
import { useEffect, useState } from 'react'
import { app } from "./components/firebase/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

export const AppRoutes = () => {
  //workouts: наименование курса, видео, упражнения
  const [workoutsFirebase, setWorkoutsFirebase] = useState([])
  //courses: направления, описания, наименование на рус и англ, workouts
  const [coursesFirebase, setCoursesFirebase] = useState([])

  useEffect(() => {
    const fb = firebase.database(app)
    const fetchData = async () => {
      try {
        const workoutsRef = fb.ref('workouts')
        await workoutsRef.once('value').then((snapshot) => {
          const trainings = Object.values(snapshot.val() || {})
          setWorkoutsFirebase(trainings)
        })
      } catch (error) {
        console.error('Error getting documents (workouts): ', error)
      }
    }
    fetchData()

    const fetchCoursesData = async () => {
      try {
        const coursesRef = fb.ref('courses')
        await coursesRef.once('value').then((snapshot) => {
          const trainings = Object.values(snapshot.val() || {})
          setCoursesFirebase(trainings)
        })
      } catch (error) {
        console.error('Error getting documents (courses): ', error)
      }
    }
    fetchCoursesData()
  }, [])

  console.log(coursesFirebase);
  console.log(workoutsFirebase);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
