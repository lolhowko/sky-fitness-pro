import * as S from './MainPage.styles.js'
import { Header } from '../../components/header/header.jsx'
import { Courses } from '../../components/courses/courses.jsx'

export function MainPage({ courses, logOut }) {
  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <Header logOut={logOut} />

        <S.HeaderInfo>
        <S.Titles>
          <S.HeaderDescription>
            Онлайн-тренировки для занятий дома
          </S.HeaderDescription>
          <S.HeaderTitle>
            Начните заниматься спортом и улучшите качество жизни
          </S.HeaderTitle>
        </S.Titles>
        <S.ChangeBody>
          <img src="/SaleSticker.svg" alt="" />
        </S.ChangeBody>
      </S.HeaderInfo>
      
        <Courses courses={courses} />
        <S.Footer>
          <S.PageUp href="#top">
            <S.FooterButton>Наверх ↑</S.FooterButton>
          </S.PageUp>
        </S.Footer>
      </S.Container>
    </>
  )
}
