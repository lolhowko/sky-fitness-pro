import React from 'react'
import * as S from './CourseDesires.style'
import CourseDesire from './CourseDesire/CourseDesire'
import { Title } from '../../Title/Title.style'

const CourseDesires = ({ fitting }) => {
  return (
    <section>
      <Title>Подойдет для вас, если:</Title>
      <S.CourseDesiresWrapper>
        {fitting.map((fit, index) => (
          <CourseDesire key={index} desire={fit} index={index + 1} />
        ))}
      </S.CourseDesiresWrapper>
    </section>
  )
}

export default CourseDesires
