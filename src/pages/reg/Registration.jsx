import styles from './Registration.module.css'

export function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.maincard}>
        <div className={styles.loginPage}>
          <img className={styles.logosvg} src="logo.svg" alt="logo" />

          <div className={styles.regLoginDiv}>
            <input className={styles.inputLogo} placeholder="Логин"></input>
            <input className={styles.inputLogo} placeholder="Пароль"></input>
            <input className={styles.inputLogo}placeholder="Повторите пароль"></input>
            <div className={styles.buttonReg}>
              <button className={styles.regButton}> Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
