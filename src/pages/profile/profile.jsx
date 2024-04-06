import { NavLink, useNavigate, useParams } from 'react-router-dom'
import * as S from './styles'
import styles from './profile.module.css'
import { PersonalData } from '../../components/PersonalData/PersonalData'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emailSelector} from '../../components/store/selectors/user'

export function Profile({ cources, logOut, userFirebase }) {
  const params = useParams()
  const navigate = useNavigate()
  const email = useSelector(emailSelector)
  const [password, setPassword] = useState('')

  if(!userFirebase){
    navigate('/auth');
    return;
  }

  const userCourseIdsObject = userFirebase.courses;
  const userCourseIds = Object.keys(userCourseIdsObject).map((key) => userCourseIdsObject[key]);
  console.log(userCourseIds)

  const userCourses = cources.filter(
    (course) => userCourseIds.indexOf(course._id)
  );

  const coursesWithImgs = userCourses.map((course) => {
    return {
      ...course,
      img: `${course.nameEN}.png`,
    }
  })

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
        >
          {coursesWithImgs === undefined && (
            <div>У вас еще нет приобретенных курсов</div>
          )}

          {coursesWithImgs && (
            <S.ProfList>
              {coursesWithImgs.map((course, index) => (
                <S.Prof key={index} id={course._id}>
                  <S.CourseName>{course.nameRU}</S.CourseName>
                  <S.ProfCard
                    src={'/CardsCourses/' + course.img}
                    alt="prof_card"
                  ></S.ProfCard>

                  <S.ProfButton onClick={() => {}}>Перейти →</S.ProfButton>
                </S.Prof>

                // <Link>
                //   <div className={styles.coursesCard}>
                //     <img
                //       className={styles.workout1}
                //       src="workoutcard1.png"
                //       alt="work1"
                //     />
                //   </div>
                // </Link>
              ))}
            </S.ProfList>
          )}
        </div>
      </div>
    </div>
  )
}
