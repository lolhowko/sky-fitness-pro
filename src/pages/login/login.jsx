import { NavLink, useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { setUser } from '../../components/store/slices/userSlice'
import { login } from '../../authApi'

export function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [error, setError] = useState(null)
  const [offButton, setOffButton] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  //валидация
  const [errorsForm, setErrorsForm] = useState({
    email: '',
    password: '',
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = { ...errorsForm }
    const passPattern = /^[^\s]+$/g
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email.trim() === '') {
      newErrors.email = 'Введите почту'
      isValid = false
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Введите корректную почту'
      isValid = false
    } else {
      newErrors.email = ''
    }

    if (password.trim() === '') {
      newErrors.password = 'Введите пароль'
      isValid = false
    } else if (!passPattern.test(password)) {
      newErrors.password = 'Пароль не должен содержать пробелы'
      isValid = false
    } else {
      newErrors.password = ''
    }

    setErrorsForm(newErrors)

    return isValid
  }

  //сброс ошибок валидации
  useEffect(() => {
    setError(null)
  }, [email, password])

  useEffect(() => {
    const newErrors = { ...errorsForm }
    newErrors.email = ''
    setErrorsForm(newErrors)
  }, [email])

  useEffect(() => {
    const newErrors = { ...errorsForm }
    newErrors.password = ''
    setErrorsForm(newErrors)
  }, [password])

  const handleAuth = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      try {
        const response = await login(email, password)
        //dodelat
        dispatch(
          setUser({
            email: response.email,
            id: response.uid,
            token: response.accessToken,
            password: password,
          })
        )
        setOffButton(true)
        navigate('/')
      } catch (error) {
        if (
          error.code === 'auth/wrong-password' ||
          error.code === 'auth/user-not-found'
        ) {
          setError('Неправильная авторизация')
        } else {
          setError(error.message)
        }
      } finally {
        setOffButton(false)
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.maincard}>
        <div className={styles.loginPage}>
          <NavLink to="/">
            <img className={styles.logosvg} src="logo.svg" alt="logo" />
          </NavLink>
          <input
            className={styles.inputLogo}
            placeholder="Логин"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {errorsForm.email && (
            <p className={styles.errorText}>{errorsForm.email}</p>
          )}
          <input
            className={styles.inputLogo}
            type="password"
            id="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {errorsForm.password && (
            <p className={styles.errorText}>{errorsForm.password}</p>
          )}
          <div className={styles.buttonLoginDiv}>
            <button
              className={styles.loginButton}
              onClick={(e) => handleAuth(e)}
            >
              {offButton ? 'Осуществляем вход' : 'Войти'}
            </button>
          </div>
          <div className={styles.regLoginDiv}>
            <NavLink to="/reg">
              <button className={styles.regButton}> Зарегистрироваться</button>
            </NavLink>
          </div>

          {error ? <p className={styles.errorText}>{error}</p> : null}
        </div>
      </div>
    </div>
  )
}
