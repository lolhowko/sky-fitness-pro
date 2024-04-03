import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import * as S from './HeaderVideo.styles'
import { PersonalData } from '../../PersonalData/PersonalData'

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
        <PersonalData logOut={logOut} email={email}/>
      </S.HeaderRight>
    </S.Header>
  )
}
