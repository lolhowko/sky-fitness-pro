import * as S from './MainPage'
import { AppRoutes } from '../../routers'
import { Header } from '../../components/header/header.jsx'

export function MainPage() {
  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <Header />
        <S.Courses>
          <S.Card>
            <a href="#">
              <S.Card1 src="profcard1.png" alt="" />
            </a>
          </S.Card>
          <S.Card>
            <a href="#">
              <S.Card1 src="profcard2.png" alt="" />
            </a>
          </S.Card>
          <S.Card>
            <a href="#">
              <S.Card1 src="profcard3.png" alt="" />
            </a>
          </S.Card>
          <S.Card>
            <a href="#">
              <S.Card1 src="profcard4.png" alt="" />
            </a>
          </S.Card>
          <S.Card>
            <a href="#">
              <S.Card1 src="profcard5.png" alt="" />
            </a>
          </S.Card>
        </S.Courses>
        <S.Footer>
          {/* <S.PageUp href="PageUp"> */}

          {/* </S.PageUp> */}
          <S.PageUp className="PageUp" href="#top">
            <S.FooterButton>Наверх ↑</S.FooterButton>
          </S.PageUp>
        </S.Footer>
      </S.Container>
    </>
  )
}

export default Header;
