import React from 'react'
import CourseName from './CourseName/CourseName'
import CourseDesires from './CourseDesires/CourseDesires'
import CourseDirections from './CourseDirections/CourseDirections'
import CourseDescription from './CourseDescription/CourseDescription'

const CourseInformation = ({
  nameRU,
  fitting,
  directions,
  description,
  nameEN,
}) => {
  return (
    <>
      <CourseName nameRU={nameRU} nameEN={nameEN} />
      <CourseDesires fitting={fitting} />
      <CourseDirections directions={directions} />
      <CourseDescription description={description} />
    </>
  )
}

export default CourseInformation
