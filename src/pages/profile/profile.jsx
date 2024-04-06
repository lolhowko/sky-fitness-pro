import * as S from './profile.styles.js'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { PersonalData } from '../../components/PersonalData/PersonalData'
import { UpdateUserData } from '../../components/update-user/update-user.jsx'
import { useAuth } from '../../components/hooks/useAuth'

export function Profile({ logOut }) {
  // для дальнейшего - если польхователь в своем аккаунте - показывать страницу, если нет navigate("/")
  const { email } = useAuth()
  // const navigate = useNavigate()

  const [isLoginMode, setIsLoginMode] = useState(null)

  const [loginShow, setLoginShow] = useState(false)
  const handleLoginClick = () => {
    setLoginShow(!loginShow)
    setIsLoginMode(true)
  }
  const [passwordShow, setPasswordShow] = useState(false)
  const handlePasswordClick = () => {
    setPasswordShow(!passwordShow)
    setIsLoginMode(false)
  }

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (loginShow || passwordShow) {
      setIsActive(true)
    }
  }, [loginShow, passwordShow])

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
          <S.CoursesCards>
            <S.Workout src="workoutcard1.png" alt="work1" />
          </S.CoursesCards>
          <S.CoursesCards>
            <S.Workout src="workoutcard2.png" alt="work1" />
          </S.CoursesCards>
          <S.CoursesCards>
            <S.Workout src="workoutcard3.png" alt="work1" />
          </S.CoursesCards>
        </S.CoursesCards>
        {isActive && (
          <UpdateUserData isLoginMode={isLoginMode} setIsActive={setIsActive} />
        )}
      </S.MainPage>
    </S.Container>
  )
}
