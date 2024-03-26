import * as S from './HeaderVideo.styles';

export const HeaderVideo = () => {

  return (
    <S.Header>
      <S.HeaderrLeft>
        <S.HeaderLogo>
          <img src="/logo.svg" alt="logo" />
        </S.HeaderLogo>
      </S.HeaderrLeft>
      <S.HeaderRight>
        <S.HeaderIconUser>
        <img src="/userIcon.svg" alt="logo" />
        </S.HeaderIconUser>
        <S.HeaderUserName>UserName <span>&#9660;</span></S.HeaderUserName>
      </S.HeaderRight>
    </S.Header>
  )
}