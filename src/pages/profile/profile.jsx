import { NavLink, useNavigate } from 'react-router-dom'
import styles from './profile.module.css'
import { PersonalData } from '../../components/PersonalData/PersonalData'
import { useAuth } from '../../components/hooks/useAuth'

export function Profile({ logOut }) {
  // для дальнейшего - если польхователь в своем аккаунте - показывать страницу, если нет navigate("/")
  const { isAuth, email } = useAuth()
  const navigate = useNavigate()

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
          <h1 className={styles.infoUser}>Логин: </h1>
          <h1 className={styles.infoUser}>Пароль: </h1>
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
        <div classNaworkoutcard1me={styles.coursesCards}>
          <div className={styles.coursesCard}>
            <img className={styles.workout1} src=".png" alt="work1" />
          </div>
          <div className={styles.coursesCard}>
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
          </div>
        </div>
      </div>
    </div>
  )
}
