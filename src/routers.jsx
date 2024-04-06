import { Route, Routes, useNavigate } from 'react-router'
import { NotFound } from './pages/not-found/NotFound'
import { useEffect, useState } from 'react'
import { app } from './components/firebase/firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { CourseVideoPage } from './pages/CourseVideoPage/CourseVideoPage'
import { MainPage } from './pages/main/MainPage'
import { Profile } from './pages/profile/profile'
import { Login } from './pages/login/login'
import { Register } from './pages/reg/Registration'
import { useDispatch } from 'react-redux'
import { removeUser } from './components/store/slices/userSlice'
import CourseDescriptionPage from './pages/CourseDescriptionPage/CourseDescriptionPage'

export const AppRoutes = () => {
  //workouts: наименование курса, видео, упражнения
  const [workoutsFirebase, setWorkoutsFirebase] = useState([])
  //courses: направления, описания, наименование на рус и англ, workouts
  const [coursesFirebase, setCoursesFirebase] = useState([])

  const [usersFirebase, setUsersFirebase] = useState([])

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

    const fetchUsersData = async () => {
      try {
        const coursesRef = fb.ref('users')
        await coursesRef.once('value').then((snapshot) => {
          const trainings = Object.values(snapshot.val() || {})
          setUsersFirebase(trainings)
        })
      } catch (error) {
        console.error('Error getting documents (courses): ', error)
      }
    }
    fetchUsersData()
  }, [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logOut = () => {
    navigate('/auth')
    dispatch(removeUser())
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage courses={coursesFirebase} logOut={logOut} />}
      />
      <Route
        path="/auth"
        element={
          <Login
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        }
      />
      <Route
        path="/reg"
        element={
          <Register
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        }
      />

      <Route path="/profile" element={<Profile logOut={logOut} usersFirebase={usersFirebase}/>} />
      <Route
        path="/course/:courseId"
        element={<CourseDescriptionPage courses={coursesFirebase} />}
      />
      <Route path="/courses/" element={<NotFound />} />
      <Route path="/users/courses" element={<NotFound />} />

      <Route
        path="/users/courses/:courseId"
        element={
          <CourseVideoPage
            courses={workoutsFirebase}
            descriptions={coursesFirebase}
            logOut={logOut}
          />
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
