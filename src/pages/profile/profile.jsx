import { NavLink, useParams, useNavigate } from 'react-router-dom'
import * as S from './profile.styles.js'
import { PersonalData } from '../../components/PersonalData/PersonalData'
import { UpdateUserData } from '../../components/update-user/update-user.jsx'
import { useEffect, useState } from 'react'
import { SelectWorkoutPopup } from './SelectWorkoutPopup'
import { useAuth } from '../../components/hooks/useAuth'

export function Profile({ cources, logOut, userFirebase, workoutsFirebase }) {
  const navigate = useNavigate()
  const { email } = useAuth()

  const [listSelectedCourse, setListSelectedCourse] = useState([])
  const [showPopup, setShowPopup] = useState(false)

  const [isLoginMode, setIsLoginMode] = useState(null)
  const [loginShow, setLoginShow] = useState(false)
  const [passwordShow, setPasswordShow] = useState(false)
  const [isActive, setIsActive] = useState(false)

  // UPDATE LOG AND PASS

  const handleLoginClick = () => {
    setLoginShow(!loginShow)
    setIsLoginMode(true)
  }
  const handlePasswordClick = () => {
    setPasswordShow(!passwordShow)
    setIsLoginMode(false)
  }

  useEffect(() => {
    if (loginShow || passwordShow) {
      setIsActive(true)
    }
  }, [loginShow, passwordShow])

  // USER COURSES

  if (!userFirebase) {
    navigate('/auth')
    return
  }

  const userCourseIds = !userFirebase.courses
    ? []
    : Object.keys(userFirebase.courses).map(
        (key) => userFirebase.courses[key].courseId
      )

  const coursesWithImgs = cources
    .filter((course) => userCourseIds.indexOf(course._id) >= 0)
    .map((course) => {
      return {
        ...course,
        img: `${course.nameEN}.png`,
      }
    })

  const SelectCourseWorkout = (courseId) => {
    console.log(courseId)
    switch (courseId) {
      case 'courseIoga':
        setListSelectedCourse(
          workoutsFirebase.filter(
            (item) =>
              ['3yvozj', 'hfgxlo', 'kcx5ai', 'kt6ah4', 'mrhuag'].indexOf(
                item._id
              ) >= 0
          )
        )
        break
      case 'courseStreching':
        setListSelectedCourse(
          workoutsFirebase.filter(
            (item) => ['9yolz2', '9mefwq', '17oz5f'].indexOf(item._id) >= 0
          )
        )
        break
      default:
        setListSelectedCourse(
          workoutsFirebase.filter(
            (item) => ['xlpkqy', 'pyvaec', 'pi5vtr'].indexOf(item._id) >= 0
          )
        )
        break
    }
    setShowPopup(!showPopup)
  }

  return (
    <S.Container>
      <S.MainPage>
        <S.HeaderPage>
          <NavLink to="/">
            <img src="/logo.svg" alt="logo" />
          </NavLink>
          <PersonalData logOut={logOut} email={email} />
        </S.HeaderPage>
        <div>
          <S.TitlePage>Мой профиль</S.TitlePage>
          <S.InfoUser>Логин: {email}</S.InfoUser>
          <S.InfoUser>Пароль: {} </S.InfoUser>
        </div>
        <S.ButtonChangeLog>
          <S.LoginButton onClick={() => handleLoginClick()}>
            Редактировать логин
          </S.LoginButton>
        </S.ButtonChangeLog>
        <S.ButtonChangePass>
          <S.LoginButton onClick={() => handlePasswordClick()}>
            Редактировать пароль
          </S.LoginButton>
        </S.ButtonChangePass>
        <S.TitleCourses>
          <S.TitleCoursesText>Мои курсы</S.TitleCoursesText>
        </S.TitleCourses>
        <S.CoursesCards>
          {coursesWithImgs === undefined && (
            <div>У вас еще нет приобретенных курсов</div>
          )}

          {coursesWithImgs && (
            <S.ProfList>
              {coursesWithImgs.map((course, index) => (
                <S.Prof key={index} id={course._id}>
                  <S.ProfCard
                    src={'/CardsCourses/' + course.img}
                    alt="prof_card"
                    onClick={() => {
                      SelectCourseWorkout(course._id)
                    }}
                  ></S.ProfCard>

                  <S.ProfButton
                    onClick={() => {
                      SelectCourseWorkout(course._id)
                    }}
                  >
                    Перейти →
                  </S.ProfButton>
                </S.Prof>
              ))}
            </S.ProfList>
          )}
        </S.CoursesCards>
        {isActive && (
          <UpdateUserData isLoginMode={isLoginMode} setIsActive={setIsActive} />
        )}
      </S.MainPage>
      {showPopup && (
        <SelectWorkoutPopup onClose={showPopup} list={listSelectedCourse} />
      )}
    </S.Container>
  )
}
