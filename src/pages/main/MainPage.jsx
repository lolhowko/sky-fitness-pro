import * as S from './MainPage'
import { AppRoutes } from '../../routers'
import { Header } from '../../components/header/header.jsx'
import { Courses } from '../../components/courses/courses.jsx'

export function MainPage() {
  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <Header />
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
