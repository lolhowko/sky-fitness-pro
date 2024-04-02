import React from 'react'
import * as S from './CourseDesire.style'

const CourseDesire = ({ desire, index }) => {
  return (
    <S.CourseDesire>
      <S.CourseDesireCircle>{index}</S.CourseDesireCircle>
      <S.CourseDesireText>{desire}</S.CourseDesireText>
    </S.CourseDesire>
  )
}

export default CourseDesire
