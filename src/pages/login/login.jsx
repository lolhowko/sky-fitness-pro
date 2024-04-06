import { NavLink, useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { setUser } from '../../components/store/slices/userSlice'

export function Login({ email, password, setEmail, setPassword, callback }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')

  const handleAuth = async (e) => {
    e.preventDefault()

    if (email === '' || password === '') {
      setErrorMessage('Все поля должны быть заполнены')
      return
    }

    const auth = getAuth()

    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
        callback(user.uid);
      })
      .catch((error) => {
        console.log(error)
        setErrorMessage('Неверно введен логин или пароль')
      })
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
          <input
            className={styles.inputLogo}
            type="password"
            id="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <div className={styles.buttonLoginDiv}>
            <button
              className={styles.loginButton}
              onClick={(e) => handleAuth(e)}
            >
              Войти
            </button>
          </div>
          <div className={styles.regLoginDiv}>
            <NavLink to="/reg">
              <button className={styles.regButton}> Зарегистрироваться</button>
            </NavLink>
          </div>

          {errorMessage ? (
            <p className={styles.errorText}>{errorMessage}</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
