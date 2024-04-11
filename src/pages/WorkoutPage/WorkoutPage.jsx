import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as S from './WorkoutPage.styles'
import VideoPlayer from '../../components/WorkoutPage/VideoPlayer/VideoPlayer'
import { CourseExercises } from '../../components/WorkoutPage/CourseExercises/CourseExercises'
import { ProgressExercises } from '../../components/WorkoutPage/ProgressExercises/ProgressExercises'
import { HeaderVideo } from '../../components/WorkoutPage/Header/HeaderVideo'
import { MyExercisesForm } from '../../components/WorkoutPage/MyExercisesForm/MyExercisesForm'
import { idSelector } from '../../components/store/selectors/user'
import { get } from 'firebase/database'


import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export const WorkoutPage = ({ courses, workouts, logOut }) => {
  const params = useParams()
  console.log(courses)

  const userId = useSelector(idSelector)

  const myCourse = courses.filter((course) => course._id === params.workoutId)[0]
  console.log(myCourse)

  if (!courses || !workouts || courses.length === 0 || workouts.length === 0) {
    return <></>
  }

  const course = courses.filter((item) =>
    item.workouts.includes(params.workoutId)
  )[0]
  if (!course) {
    return <h1>Неверный идентификатор курса</h1>
  }

  const workout = workouts.filter((workout) => workout._id === params.workoutId)[0];

  async function getUserWorkout(userId)
  {
    const userWorkoutRef = firebase.database().ref('users/' + userId + '/workouts/' + params.workoutId);
    await userWorkoutRef.once('value').then((snapshot) => {
      let myWorkout = snapshot.val()
      console.log(myWorkout);
    })
  }
  getUserWorkout(userId);

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
                <MyExercisesForm
                  listExercises={workout.exercises}
                  userId={userId}
                  courses={courses}
                  workout={workout}
                  course={course}
                />
              </div>
              <ProgressExercises
                userId={userId}

                courses={courses}
                course={course}

                workout={workout}
                listExercises={workout.exercises}

              />
            </S.ExercisesDetails>
          )}
        </S.Container>
      )}
      {(workouts?.length ?? 0) === 0 && <h1> нет данных</h1>}
    </>
  )
}
