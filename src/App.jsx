import * as S from './Appstyle'
import './App.css'
import { AppRoutes } from './routers'
import { useLocation } from 'react-router'
import { GlobalStyled } from './GlobalAppStyle'

function App() {

  return (
    <S.Wrapper>
      <S.Container>
        <AppRoutes />
      </S.Container>

      <GlobalStyled />
    </S.Wrapper>
  )
}

export default App