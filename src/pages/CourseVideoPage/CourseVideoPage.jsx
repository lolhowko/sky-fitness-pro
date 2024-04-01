import { useParams } from 'react-router-dom'
import * as S from './CourseVideoPage.styles'
import VideoPlayer from '../../components/WorkoutPage/VideoPlayer/VideoPlayer'
import { CourseExercises } from '../../components/WorkoutPage/CourseExercises/CourseExercises'
import { ProgressExercises } from '../../components/WorkoutPage/ProgressExercises/ProgressExercises'
import { HeaderVideo } from '../../components/WorkoutPage/Header/HeaderVideo'
import { MyExercisesForm } from '../../components/WorkoutPage/MyExercisesForm/MyExercisesForm'
import { useState } from 'react'

export const CourseVideoPage = ({ courses, logOut, descriptions }) => {
  const params = useParams()
  console.log(courses)

  const myCourse = courses.filter((course) => course._id === params.courseId)[0]

  if (
    !courses ||
    !descriptions ||
    courses.length === 0 ||
    descriptions.length === 0
  ) {
    return <></>
  }

  const courseDescription = descriptions.filter((description) =>
    description.workouts.includes(params.courseId)
  )[0]
  if (!courseDescription) {
    return <h1>Неверный идентификатор курса</h1>
  }

  // const myCourse = courses.filter((course) => course._id === params.courseId)[0]
  return (
    <>
      {courses.length > 0 && (
        <>
          <HeaderVideo logOut={logOut} />
          <S.CourseTitle>{courseDescription.nameRU}</S.CourseTitle>
          <S.CourseDescribtion> {myCourse.name} </S.CourseDescribtion>
          <VideoPlayer srcVideo={myCourse.video} />
          {myCourse.exercises && (
            <S.ExercisesDetails>
              <div>
                <CourseExercises listExercises={myCourse.exercises} />
                <MyExercisesForm listExercises={myCourse.exercises} />
              </div>
              <ProgressExercises listExercises={myCourse.exercises} />
            </S.ExercisesDetails>
          )}
        </>
      )}
      {(courses?.length ?? 0) === 0 && <h1> нет данных</h1>}
    </>
  )
}
