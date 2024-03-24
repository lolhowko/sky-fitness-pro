import styles from './login.module.css'

export function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.maincard}>
        <div className={styles.loginPage}>
          <img className={styles.logosvg} src="logo.svg" alt="logo" />
          <input className={styles.inputLogo} placeholder="Логин"></input>
          <input className={styles.inputLogo} placeholder="Пароль"></input>
          <div className={styles.buttonLoginDiv}>
            <button className={styles.loginButton}>Войти</button>
          </div>
          <div className={styles.regLoginDiv}>
            <button className={styles.regButton}> Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  )
}
