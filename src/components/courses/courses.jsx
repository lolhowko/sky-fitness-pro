import * as S from '../courses/courses'
import { NavLink } from 'react-router-dom'

import yoga from '../courses/img/profcard1.png'
import stretch from '../courses/img/profcard2.png'
import danceFitness from '../courses/img/profcard3.png'
import stepAerobics from '../courses/img/profcard4.png'
import bodyFlex from '../courses/img/profcard5.png'

export function Courses({ coursesFirebase }) {
  console.log(coursesFirebase)
  coursesFirebase.sort((a, b) => a.order - b.order)

  return (
    <S.Courses>
      <S.Card>
        {coursesFirebase.map((course) => {
          return (
            <NavLink key={course._id} to={`/course/${course._id}`}>
              <S.Product>
                <S.Card1
                  src={
                    course._id === 'ab1c3f'
                      ? yoga
                      : course._id === 'kfpq8e'
                      ? stretch
                      : course._id === 'ypox9r'
                      ? danceFitness
                      : course._id === '6i67sm'
                      ? stepAerobics
                      : bodyFlex
                  }
                  alt="product"
                />
              </S.Product>
            </NavLink>
          )
        })}
      </S.Card>
    </S.Courses>
  )
}

export default Courses

{
  /* <S.Card>
<NavLink to="/users/:userId/courses/:courseId">
  <S.Card1 src="profcard2.png" alt="" />
</NavLink>
</S.Card>
<S.Card>
<NavLink to="/users/:userId/courses/:courseId">
  <S.Card1 src="profcard3.png" alt="" />
</NavLink>
</S.Card>
<S.Card>
<NavLink to="/users/:userId/courses/:courseId">
  <S.Card1 src="profcard4.png" alt="" />
</NavLink>
</S.Card>
<S.Card>
<NavLink to="/users/:userId/courses/:courseId">
  <S.Card1 src="profcard5.png" alt="" />
</NavLink>
</S.Card> */
}
