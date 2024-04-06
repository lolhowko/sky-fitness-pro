import { useParams } from 'react-router-dom'
import * as S from './CourseVideoPage.styles'
import VideoPlayer from '../../components/WorkoutPage/VideoPlayer/VideoPlayer'
import { CourseExercises } from '../../components/WorkoutPage/CourseExercises/CourseExercises'
import { ProgressExercises } from '../../components/WorkoutPage/ProgressExercises/ProgressExercises'
import { HeaderVideo } from '../../components/WorkoutPage/Header/HeaderVideo'
import { MyExercisesForm } from '../../components/WorkoutPage/MyExercisesForm/MyExercisesForm'

export const CourseVideoPage = ({ courses, workouts, logOut }) => {
  const params = useParams()
  console.log(courses)

  if (
    !courses ||
    !workouts ||
    courses.length === 0 ||
    workouts.length === 0
  ) {
    return <></>
  }

  const course = courses.filter((item) =>
    item.workouts.includes(params.courseId)
  )[0]
  if (!course) {
    return <h1>Неверный идентификатор курса</h1>
  }

  const workout = workouts.filter((course) => course._id === params.courseId)[0]

  return (
    <>
      {workouts.length > 0 && (
        <S.Container>
          <HeaderVideo logOut={logOut} />
          <S.CourseTitle>{course.nameRU}</S.CourseTitle>
          <S.CourseDescribtion> {workout.name} </S.CourseDescribtion>
          <VideoPlayer srcVideo={workout.video} />
          {workout.exercises && (
            <S.ExercisesDetails>
              <div>
                <CourseExercises listExercises={workout.exercises} />
                <MyExercisesForm listExercises={workout.exercises} />
              </div>
              <ProgressExercises listExercises={workout.exercises} />
            </S.ExercisesDetails>
          )}
        </S.Container>
      )}
      {(workouts?.length ?? 0) === 0 && <h1> нет данных</h1>}
    </>
  )
}
