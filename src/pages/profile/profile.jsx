import {
  NavLink,
  useNavigate,
  useParams,
  //  useNavigate
} from 'react-router-dom'
import styles from './profile.module.css'
import { PersonalData } from '../../components/PersonalData/PersonalData'
import { useAuth } from '../../components/hooks/useAuth'
import { useState } from 'react'
import { SelectWorkoutPopup } from './SelectWorkoutPopup'
import { useDispatch, useSelector } from 'react-redux'
import {
  emailSelector,
  idSelector,
} from '../../components/store/selectors/user'

export function Profile({ logOut, workoutsFirebase }) {
  const navigate = useNavigate()
  const userId = useSelector(idSelector)
  const dispatch = useDispatch()
  const email = useSelector(emailSelector)
  const [password, setPassword] = useState('')

  console.log(userId)
  console.log(workoutsFirebase);
  const [listSelectedCourse, setListSelectedCourse] = useState([]);
  
  const [ showPopup, setShowPopup] = useState(false);

  const SelectCourseWorkout = (courseId) => {
    console.log(courseId);
    switch (courseId) {
      case "courseIoga": 
      setListSelectedCourse(workoutsFirebase.filter((item)=> ["3yvozj", "hfgxlo", "kcx5ai", "kt6ah4", "mrhuag"].indexOf(item._id) >= 0 ));
        break;
      case "courseStreching":
        setListSelectedCourse(workoutsFirebase.filter((item)=> ["9yolz2", "9mefwq", "17oz5f"].indexOf(item._id) >= 0 ));
        break;
      default: 
        setListSelectedCourse(workoutsFirebase.filter((item)=> ["xlpkqy","pyvaec","pi5vtr"].indexOf(item._id) >= 0 ));
        break;
    }
    setShowPopup(!showPopup);
  }; 
  
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
          <div className={styles.coursesCard}>
            <img
              className={styles.workout1}
              src="workoutcard1.png"
              alt="work1"
              onClick={() => SelectCourseWorkout("courseIoga")}
            />
          </div>
          <div className={styles.coursesCard}>
            <img
              className={styles.workout2}
              src="workoutcard2.png"
              alt="work1"
              onClick={() => SelectCourseWorkout("courseStreching")}
            />
          </div>
          <div className={styles.coursesCard}>
            <img
              className={styles.workout3}
              src="workoutcard3.png"
              alt="work1"
              onClick={() => SelectCourseWorkout("courseBodyflex")}
            />SelectCourseWorkout
          </div>
        </div>
      </div>
      {showPopup && <SelectWorkoutPopup onClose={showPopup} list={listSelectedCourse} />}
    </div>
  )
}
