import * as S from '../header/header'

export function Header() {
  return (
    <S.Header>
      <S.HeaderMain>
        <a href="#">
          <img src="logoHeader.svg" alt="logo" />
        </a>
        <S.HeaderButton id="top">Войти</S.HeaderButton>
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
  )
}

export default Header
