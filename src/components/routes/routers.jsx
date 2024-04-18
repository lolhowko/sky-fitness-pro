import { Route, Routes, useNavigate } from 'react-router'
import { AuthPage } from '../../pages/authPage/authPage'
import { CourseDescriptionPage } from '../../pages/CourseDescriptionPage/CourseDescriptionPage'
import { CourseVideoPage } from '../../pages/CourseVideoPage/CourseVideoPage'
import { MainPage } from '../../pages/main/MainPage'
import { NotFound } from '../../pages/not-found/NotFound'
import { Profile } from '../../pages/profile/profile'
import { SelectWorkoutPopup } from '../../pages/SelectWorkoutPopup/SelectWorkoutPopup'
import { ProtectedRoute } from './protected-route'

import { useEffect, useState } from 'react'
import { app } from '../firebase/firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/userSlice'

export const AppRoutes = ({ user, setUser }) => {
  //workouts: наименование курса, видео, упражнения
  const [workoutsFirebase, setWorkoutsFirebase] = useState([])
  //courses: направления, описания, наименование на рус и англ, workouts
  const [coursesFirebase, setCoursesFirebase] = useState([])
  // данные авторизованного пользователя
  const [currentUserFirebase, setCurrentUserFirebase] = useState(null)

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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginCallback = (userId) => {
    const fetchUsersData = async () => {
      try {
        const fb = firebase.database(app)
        const coursesRef = fb.ref('users')
        await coursesRef.once('value').then((snapshot) => {
          const users = Object.values(snapshot.val() || {})
          const currentUser = users.filter((user) => user._id === userId)[0]
          setCurrentUserFirebase(currentUser)

          navigate('/profile')
        })
      } catch (error) {
        console.error('Error getting documents (courses): ', error)
      }
    }
    fetchUsersData()
  }

  const logOut = () => {
    navigate('/auth')
    removeUser()
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
          <AuthPage
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            callback={loginCallback}
          />
        }
      />
      <Route path="/course/:courseId" element={<CourseDescriptionPage />} />
      <Route
        path="/users/courses/:courseId"
        element={
          <CourseVideoPage
            courses={coursesFirebase}
            workouts={workoutsFirebase}
            logOut={logOut}
          />
        }
      />
      <Route path="/courses/" element={<NotFound />} />
      <Route path="/users/courses" element={<NotFound />} />

      <Route path="*" element={<NotFound />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route
          path="/profile"
          element={
            <Profile
              cources={coursesFirebase}
              logOut={logOut}
              userFirebase={currentUserFirebase}
              workoutsFirebase={workoutsFirebase}
            />
          }
        />
        <Route
          path="/profile/workout/:courseId/:id"
          element={<SelectWorkoutPopup />}
        />
      </Route>
    </Routes>
  )
}
