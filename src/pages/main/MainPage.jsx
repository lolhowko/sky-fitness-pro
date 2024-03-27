import * as S from './MainPage.styles.js'
import { Header } from '../../components/header/header.jsx'
import { Courses } from '../../components/courses/courses.jsx'

export function MainPage({logOut}) {
  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <Header logOut={logOut}/>
        <Courses/>
        <S.Footer>
          <S.PageUp href="#top">
            <S.FooterButton>Наверх ↑</S.FooterButton>
          </S.PageUp>
        </S.Footer>
      </S.Container>
    </>
  )
}
