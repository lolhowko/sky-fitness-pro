import { NavLink } from 'react-router-dom'
import * as S from './Logo.style'
import logo from './logo.svg'

const Logo = () => {
  return <NavLink to="/">{<S.Logo alt="SkyFitnessPro" src={logo} />}</NavLink>
}

export default Logo