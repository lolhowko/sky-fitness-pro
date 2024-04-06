import React from 'react'
import * as S from './CourseName.style'
// import group from "../../../../assets/images/Group.png";

const CourseName = ({ nameRU, nameEN }) => {
  return (
    <S.CourseNameContainer>
      <S.CourseNameImage src={'/ImagesCourses/' + nameEN + '.jpeg'} />
      <S.CourseName>{nameRU}</S.CourseName>
    </S.CourseNameContainer>
  )
}

export default CourseName