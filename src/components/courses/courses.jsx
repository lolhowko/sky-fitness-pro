import { Link } from 'react-router-dom'
import * as S from '../courses/courses'
import { useEffect, useState } from 'react'

export function Courses({ courses, response }) {
  const coursesWithImgs = courses.map((course) => {
    return {
      ...course,
      img: `${course.nameEN}.png`,
    }
  })
  if (response === null) {
    throw new Error('Что-то пошло не так')
  } else {
    return (
      <S.Courses>
        {coursesWithImgs.map((course, index) => {
          return (
            <S.Card key={index}>
              <Link to={`/course/${course._id}`}>
                <S.Card1 src={'/CardsCourses/' + course.img} alt="" />
              </Link>
            </S.Card>
          )
        })}
      </S.Courses>
    )
  }
}
export default Courses
