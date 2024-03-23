import * as S from '../main/MainPage'

export function MainPage() {
  return (
    <>
    <S.GlobalStyle/>
    <S.Container>
      <S.Header>
        <S.HeaderMain>
          <a href="#">
            <img src="logo.svg" alt="logo" />
          </a>
          <S.HeaderButton>Войти</S.HeaderButton>
        </S.HeaderMain>
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
            <img src="SaleSticker.svg" alt="" />
          </S.ChangeBody>
        </S.HeaderInfo>
      </S.Header>
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
        <S.FooterButton>Наверх ↑</S.FooterButton>
      </S.Footer>
    </S.Container>
    </>
  )
}

