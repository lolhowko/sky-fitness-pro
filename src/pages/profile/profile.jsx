import * as S from './styles'
import {
  NavLink,
  useParams,
  //  useNavigate
} from 'react-router-dom'
import styles from './profile.module.css'
import { PersonalData } from '../../components/PersonalData/PersonalData'
import { useAuth } from '../../components/hooks/useAuth'
import { useEffect, useState } from 'react'
import { courseList } from '../../components/store/selectors/courseNew'
import {
  emailSelector,
  idSelector,
  passwordSelector,
} from '../../components/store/selectors/user'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCurrentCourse,
  setWorkoutList,
} from '../../components/store/slices/courseWorkoutSlice'
import { getWorkouts } from '../../api'
import { images } from '../../components/images/Images'

export function Profile({ logOut }) {
  // для дальнейшего - если польхователь в своем аккаунте - показывать страницу, если нет navigate("/")

  const [isShowForm, setIsShowForm] = useState(false)

  const courses = useSelector(courseList)
  const userId = useSelector(idSelector)
  const dispatch = useDispatch()
  const email = useSelector(emailSelector)
  const password = useSelector(passwordSelector)

  console.log(courses)

  //получить курсы юзера

  const coursesForUser = courses.filter(
    (course) => course.users && course.users.some((user) => user === userId)
  )

  useEffect(() => {
    getWorkouts()
      .then((data) => {
        dispatch(setWorkoutList(data))
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])

  const handleCard = (course) => {
    dispatch(setCurrentCourse(course))
    localStorage.setItem('selectedCourse', JSON.stringify(course))
    setIsShowForm(true)
  }

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

        <S.ProfList>
          {coursesForUser.map((course, index) => (
            <S.Prof key={index} id={course.id}>
              <S.CourseName>{course.nameRU}</S.CourseName>
              <S.ProfCard src={images[index].src} alt="prof_card"></S.ProfCard>

              <S.ProfButton
                onClick={() => {
                  handleCard(course)
                }}
              >
                Перейти →
              </S.ProfButton>
            </S.Prof>
          ))}
        </S.ProfList>

        {/* <div className={styles.coursesCard}>
            <img
              className={styles.workout2}
              src="workoutcard2.png"
              alt="work1"
            />
          </div>
          <div className={styles.coursesCard}>
            <img
              className={styles.workout3}
              src="workoutcard3.png"
              alt="work1"
            />
          </div> */}
      </div>
    </div>
  )
}
