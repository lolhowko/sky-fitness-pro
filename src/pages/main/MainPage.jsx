import styles from './MainPage.module.css'

export function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <a href="#">
            <img className={styles.logosvg} src="logo.svg" alt="logo" />
          </a>
          <button className={styles.headerButton}>Войти</button>
        </div>
        <div className={styles.headerInfo}>
          <div className={styles.headerTitles}>
            <p className={styles.headerDesctiption}>
              Онлайн-тренировки для занятий дома
            </p>
            <h1 className={styles.headerTitle}>
              Начните заниматься спортом и улучшите качество жизни
            </h1>
          </div>
          <div className={styles.changeBody}>
            <img className={styles.saleSticker} src="SaleSticker.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
            <a href="#"><img className={styles.card1} src="profcard1.png" alt="" /></a>
         
        </div>
        <div className={styles.card}>
            <a href="#"><img className={styles.card1} src="profcard2.png" alt="" /></a>
         
        </div>
        <div className={styles.card}>
            <a href="#"><img className={styles.card1} src="profcard3.png" alt="" /></a>
         
        </div>
        <div className={styles.card}>
            <a href="#"><img className={styles.card1} src="profcard4.png" alt="" /></a>
         
        </div>
        <div className={styles.card}>
            <a href="#"><img className={styles.card1} src="profcard5.png" alt="" /></a>
         
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.footerButton}>Наверх ↑</button>
      </div>
    </div>
  )
}
