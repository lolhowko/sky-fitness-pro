import * as S from './update-user.styles.js'
import { useState } from 'react'
import { Validate } from '../validates/validate.js'
import { useNavigate } from 'react-router-dom'
import { getAuth, updateEmail, updatePassword } from 'firebase/auth'

export const UpdateUserData = ({ isLoginMode, setIsActive }) => {
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [buttonActive, setButtonActive] = useState(false)
  const navigate = useNavigate()
  const auth = getAuth()
  const user = auth.currentUser

  const handleLogin = async ({ email }) => {
    Validate({ email, setError })
    try {
      await updateEmail(user, email).then(() => {})
      navigate('/auth', { replace: true })
      setError(null)
      setButtonActive(true)
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
      if (error.message === 'Firebase: Error (auth/invalid-credential).') {
        setError('Ошибка авторизации: Недопустимые учетные данные')
      } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
        setError('Ошибка авторизации: Неверный адрес электронной почты')
      } else {
        setError(`Ошибка авторизации: ${error.message}`)
      }
    } finally {
      setButtonActive(false)
    }
  }

  const handlePassword = async ({ password, repeatPassword }) => {
    Validate({ password, repeatPassword, setError })
    try {
      await updatePassword(user, password).then(() => {})
      navigate('/auth', { replace: true })
      setError(null)
      setButtonActive(true)
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
    } finally {
      setButtonActive(false)
    }
  }

  return (
    <S.Container>
      <S.Maincard>
        <S.PageClose onClick={() => setIsActive(false)}>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_iconCarrier">
              <g id="Page-1" stroke="none" fill="none">
                <g
                  id="Icon-Set-Filled"
                  transform="translate(-469.000000, -1041.000000)"
                  fill="#b1aaaa"
                >
                  <path
                    d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"
                    id="cross"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </S.PageClose>
        <img src="/logo.svg" alt="logo" />
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.InputTitle>Новый логин:</S.InputTitle>
              <S.InputLogo
                placeholder="Логин"
                type="email"
                id="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.LoginButton
                disabled={buttonActive}
                onClick={() => handleLogin({ email })}
              >
                {buttonActive ? 'Сохрание...' : 'Сохранить'}
              </S.LoginButton>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.InputTitle>Новый пароль:</S.InputTitle>
              <S.InputLogo
                type="new-password"
                id="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.InputLogo
                type="new-password"
                id="password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.LoginButton
                disabled={buttonActive}
                onClick={() => handlePassword({ password, repeatPassword })}
              >
                {buttonActive ? 'Сохрание...' : 'Сохранить'}
              </S.LoginButton>
            </S.Buttons>
          </>
        )}
      </S.Maincard>
    </S.Container>
  )
}
