import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import styles from './profile.module.css'
import { PersonalData } from '../../components/PersonalData/PersonalData'
import { useAuth } from '../../components/hooks/useAuth'
import firebase from '../../components/firebase/firebase'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  emailSelector,
  idSelector,
} from '../../components/store/selectors/user'

export function Profile({ logOut, usersFirebase }) {
  const params = useParams()
  const navigate = useNavigate()
  const userId = useSelector(idSelector)
  const dispatch = useDispatch()
  const email = useSelector(emailSelector)
  const [password, setPassword] = useState('')

  console.log(usersFirebase)

  const currentUser = usersFirebase.filter((user) => user._id === userId)[0]

  const userCourses = currentUser.courses
  console.log(userCourses)

  return (
    <div className={styles.container}>
      <div className={styles.mainPage}>
        <div className={styles.headerPage}>
          <NavLink to="/">
            <img className={styles.logosvg} src="logo.svg" alt="logo" />
          </NavLink>
          <PersonalData logOut={logOut} email={email} />
        </div>
        <div>
          <h1 className={styles.titlePage}>Мой профиль</h1>
          <h1 className={styles.infoUser}>Логин: {email}</h1>
          <h1 className={styles.infoUser}>Пароль: {password} </h1>
        </div>
        <div className={styles.buttonChangeLog}>
          <button className={styles.loginButton}>Редактировать логин</button>
        </div>
        <div className={styles.buttonChangePass}>
          <button className={styles.loginButton}>Редактировать пароль</button>
        </div>
        <div className={styles.titleCourses}>
          <h1 className={styles.titleCoursesText}>Мои курсы</h1>
        </div>
        <div
          className={styles.coursesCards}
          classNaworkoutcard1me={styles.coursesCards}
        >
          <Link>
            <div className={styles.coursesCard}>
              <img
                className={styles.workout1}
                src="workoutcard1.png"
                alt="work1"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
