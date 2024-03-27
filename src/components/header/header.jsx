import { NavLink } from 'react-router-dom'
import * as S from '../header/header'
import { useAuth } from '../hooks/useAuth'
import { PersonalData } from '../PersonalData/PersonalData'

export function Header({ logOut }) {
  const { isAuth, email } = useAuth()

  return (
    <S.Header>
      <S.HeaderMain>
        <NavLink to="/">
          <img src="logoHeader.svg" alt="logo" />
        </NavLink>
        <S.HeaderTopButton>
          {isAuth ? (
            <PersonalData email={email} logOut={logOut} />
          ) : (
            <NavLink to="/auth">
              <S.HeaderButton id="top">Войти</S.HeaderButton>
            </NavLink>
          )}
        </S.HeaderTopButton>
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
