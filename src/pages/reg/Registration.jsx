import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'
import { useState } from 'react'
import { Logo } from '../../components/Logo.jsx'
import styles from './Registration.module.css'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { setUser } from '../../components/store/slices/userSlice'

export function Register({ email, password, setEmail, setPassword }) {
  const [repeatPassword, setRepeatPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')

  const handleReg = async (e) => {
    e.preventDefault()

    if (email === '' || password === '' || repeatPassword === '') {
      setErrorMessage('Все поля должны быть заполнены')
      return
    }

    const auth = getAuth()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCrenditial) => {
        console.log(userCrenditial)

        const user = userCrenditial.user

        //Сохранение пользователя в базе

        const id = user.uid

        // dispatch(
        //   setUser({
        //     email: user.email,
        //     id: user.uid,
        //     token: user.accessToken,
        //   })
        // )
        // navigate('/profile')

        //Sign up
        async function saveUser(id) {
          console.log(id)
          const db = getDatabase()
          set(ref(db, 'users/' + id), {
            _id: id,
            email: user.email,
          })
        }
        saveUser(id)
        navigate('/auth')
      })
      .catch((error) => {
        console.log(error)
        setErrorMessage(error.message)
      })
  }

  return (
    <div className={styles.container}>
      <div className={styles.maincard}>
        <div className={styles.loginPage}>
          <Logo theme="white" />
          <div className={styles.regLoginDiv}>
            <input
              className={styles.inputLogo}
              type="email"
              id="email"
              placeholder="Логин"
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

            <input
              className={styles.inputLogo}
              type="repeatPassword"
              id="repeatPassword"
              placeholder="Повторите пароль"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            ></input>

            <div className={styles.buttonReg}>
              <button
                className={styles.regButton}
                onClick={(e) => handleReg(e)}
              >
                Зарегистрироваться
              </button>
            </div>

            {errorMessage ? (
              <p className={styles.errorText}>{errorMessage}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
