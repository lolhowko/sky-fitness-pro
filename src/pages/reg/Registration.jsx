import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react'
import styles from './Registration.module.css'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { setUser } from '../../components/store/slices/userSlice'
import { register } from '../../authApi'

export function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [error, setError] = useState(null)
  const [offButton, setOffButton] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')

  const [errorsForm, setErrorsForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
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

    if (confirmPassword.trim() === '') {
      newErrors.password = 'Подтвердите пароль'
      isValid = false
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Пароли не совпадают'
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
  }, [email, password, confirmPassword])

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

  useEffect(() => {
    const newErrors = { ...errorsForm }
    newErrors.confirmPassword = ''
    setErrorsForm(newErrors)
  }, [confirmPassword])

  const handleReg = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      try {
        const response = await register(email, password, confirmPassword)
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
        setError(error.message)
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

          <div className={styles.regLoginDiv}>
            <input
              className={styles.inputLogo}
              type="email"
              id="email"
              placeholder="Логин"
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

            <input
              className={styles.inputLogo}
              type="confirmPassword"
              id="confirmPassword"
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            {errorsForm.confirmPassword && (
              <p className={styles.errorText}>{errorsForm.confirmPassword}</p>
            )}

            <div className={styles.buttonReg}>
              <button
                className={styles.regButton}
                onClick={(e) => handleReg(e)}
              >
                {offButton ? 'Осуществляем регистрацию' : 'Зарегистрироваться'}
              </button>
            </div>

            {error ? <p className={styles.errorText}>{error}</p> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
