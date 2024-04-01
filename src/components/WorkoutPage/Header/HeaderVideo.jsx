import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import * as S from './HeaderVideo.styles'

export const HeaderVideo = ({ logOut }) => {
  const { email } = useAuth()

  return (
    <S.Header>
      <S.HeaderrLeft>
        <Link to="/">
          <S.HeaderLogo>
            <img src="/logo.svg" alt="logo" />
          </S.HeaderLogo>
        </Link>
      </S.HeaderrLeft>
      <S.HeaderRight>
        <S.HeaderIconUser>
          <img src="/userIcon.svg" alt="logo" />
        </S.HeaderIconUser>
        <S.HeaderUserName>
          {email} <span onClick={logOut}>&#9660;</span>
        </S.HeaderUserName>
      </S.HeaderRight>
    </S.Header>
  )
}
