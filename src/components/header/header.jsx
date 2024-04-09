import { NavLink } from 'react-router-dom'
import { Logo } from '../Logo.jsx'
import * as S from '../header/header.style.js'
import { useAuth } from '../hooks/useAuth'
import { PersonalData } from '../PersonalData/PersonalData'

export function Header({ logOut }) {
  const { isAuth, email } = useAuth()

  return (
    <S.Header>
      <S.HeaderMain>
        <Logo />
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
    </S.Header>
  )
}

export default Header
