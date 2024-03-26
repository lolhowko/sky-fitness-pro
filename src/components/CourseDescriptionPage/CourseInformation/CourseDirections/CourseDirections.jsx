import React from "react";
import Title from "../../Title/Title"; 
import * as S from ".//CourseDirections.style"; 

const CourseDirections = ({ directions }) => {
  return (
    <section>
      <Title>Направления:</Title>
      <S.CourseDirectionsWrapper>
        {directions.map((direction) => (
          <li key={direction}>{direction}</li>
        ))}
      </S.CourseDirectionsWrapper>
    </section>
  );
};

export default CourseDirections;