import * as S from '../courses/courses'
import { NavLink } from 'react-router-dom'

export function Courses() {
  return (
    <S.Courses>
      <S.Card>
        <NavLink to="/courses/${course._id">
          <S.Card1 src="profcard1.png" alt="" />
        </NavLink>
      </S.Card>
      <S.Card>
        <NavLink to="/courses/${course._id">
          <S.Card1 src="profcard2.png" alt="" />
        </NavLink>
      </S.Card>
      <S.Card>
        <NavLink to="/courses/${course._id">
          <S.Card1 src="profcard3.png" alt="" />
        </NavLink>
      </S.Card>
      <S.Card>
        <NavLink to="/courses/${course._id">
          <S.Card1 src="profcard4.png" alt="" />
        </NavLink>
      </S.Card>
      <S.Card>
        <NavLink to="/courses/${course._id">
          <S.Card1 src="profcard5.png" alt="" />
        </NavLink>
      </S.Card>
    </S.Courses>
  )
}

export default Courses
