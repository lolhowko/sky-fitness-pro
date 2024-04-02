import {
  NavLink,
  useParams,
  //  useNavigate
} from 'react-router-dom'
import styles from './profile.module.css'
import { PersonalData } from '../../components/PersonalData/PersonalData'
import { useAuth } from '../../components/hooks/useAuth'
import { useState } from 'react'
import * as S from '../../pages/profile/profile'
import yoga from '../../pages/profile/img/profcard1.png'
import stretch from '../../pages/profile/img/profcard2.png'
import bodyFlex from '../../pages/profile/img/profcard5.png'

export function Profile({ logOut, coursesFirebase, password }) {
  coursesFirebase.sort((a, b) => a.order - b.order)
  // для дальнейшего - если польхователь в своем аккаунте - показывать страницу, если нет navigate("/")
  const { email } = useAuth()
  // const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.mainPage}>
        <div className={styles.headerPage}>
          <NavLink to="/">
            <img className={styles.logosvg} src="logo.svg" alt="logo" />
          </NavLink>
          <PersonalData logOut={logOut} email={email} />
        </div>
        <div>
          <h1 className={styles.titlePage}>Мой профиль</h1>
          <h1 className={styles.infoUser}>Логин: {email}</h1>
          <h1 className={styles.infoUser}>Пароль: {password} </h1>
        </div>
        <div className={styles.buttonChangeLog}>
          <button className={styles.loginButton}>Редактировать логин</button>
        </div>
        <div className={styles.buttonChangePass}>
          <button className={styles.loginButton}>Редактировать пароль</button>
        </div>
        <div className={styles.titleCourses}>
          <h1 className={styles.titleCoursesText}>Мои курсы</h1>
        </div>
        <S.Courses>
          <S.ProductContent>
            {coursesFirebase.map((course) => {
              return (
                <NavLink key={course._id} to={`/course/${course._id}`}>
                  <S.Product>
                    <S.Card
                      src={
                        course._id === 'ab1c3f'
                          ? yoga
                          : course._id === 'kfpq8e'
                          ? stretch
                          : course._id === 'ypox9r'
                          ? bodyFlex
                          : course._id === '6i67sm'
                      }
                      alt="product"
                    />
                  </S.Product>
                </NavLink>
              )
            })}
          </S.ProductContent>
        </S.Courses>
      </div>
    </div>
  )
}
