import * as S from './authPage.styles.js'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../../components/Logo.jsx'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { Validate } from '../../components/validates/validate'
import { app } from '../../components/firebase/firebase'
import { setUser } from '../../components/store/slices/userSlice'

export const AuthPage = ({ callback }) => {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const navigate = useNavigate()
  const [buttonActive, setButtonActive] = useState(false)
  const auth = getAuth(app)

  const handleLogin = async ({ email, password }) => {
    Validate({ email, password, setError })

    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        ({ user }) => {
          console.log(user)

          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          )
          callback(user.uid)
        }
      )
      setButtonActive(true)
      navigate('/', { replace: true })
      setError(null)
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
      /*if (error.message === 'Firebase: Error (auth/invalid-credential).') {
        setError('Ошибка авторизации: Недопустимые учетные данные')
      } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
        setError('Ошибка авторизации: Неверный адрес электронной почты')
      } else {
        setError(`Ошибка авторизации: ${error.message}`)
      }*/
    } finally {
      setButtonActive(false)
    }
  }

  const handleReg = async ({ email, password, repeatPassword }) => {
    Validate({ email, password, repeatPassword, setError })

    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        ({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          )
          callback(user.email)
        }
      )
      setButtonActive(true)
      navigate('/', { replace: true })
      setError(null)
      setIsLoginMode(true)
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
      /*if (error.message === 'Firebase: Error (auth/invalid-credential).') {
        setError('Ошибка авторизации: Недопустимые учетные данные')
      } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
        setError('Ошибка авторизации: Неверный адрес электронной почты')
      } else {
        setError(`Ошибка авторизации: ${error.message}`)
      }*/
    } finally {
      setButtonActive(false)
    }
  }

  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.Container>
      <S.Maincard>
        <Logo theme="white" />
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.InputLogo
                placeholder="Логин"
                type="email"
                id="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.InputLogo
                type="password"
                id="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}

            <S.Buttons>
              <S.LogButton
                disabled={buttonActive}
                onClick={() => handleLogin({ email, password })}
              >
                {buttonActive ? 'Выполняется вход...' : 'Войти'}
              </S.LogButton>
              <Link onClick={() => setIsLoginMode(false)} to="/auth">
                <S.RegButton>Зарегистрироваться</S.RegButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.InputLogo
                placeholder="Логин"
                type="email"
                id="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.InputLogo
                type="password"
                id="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.InputLogo
                type="repeatPassword"
                id="repeatPassword"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}

            <S.Buttons>
              <S.LogButton
                disabled={buttonActive}
                onClick={() => handleReg({ email, password, repeatPassword })}
              >
                {buttonActive
                  ? 'Выполняется регистрация...'
                  : 'Зарегистрироваться'}
              </S.LogButton>
            </S.Buttons>
          </>
        )}
      </S.Maincard>
    </S.Container>
  )
}
