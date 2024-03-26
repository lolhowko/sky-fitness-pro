import React from "react";
import * as S from "./CourseName.style";
import group from "../../../assets/images/Group.png";

const CourseName = ({ name }) => {
  return (
    <S.CourseNameContainer>
      <S.CourseNameImage src={group} />
      <S.CourseName>{name}</S.CourseName>
    </S.CourseNameContainer>
  );
};

export default CourseName;