import { useParams } from 'react-router-dom';
import * as S from './CourseVideoPage.styles';
import VideoPlayer from '../../components/WorkoutPage/VideoPlayer/VideoPlayer';
import { MyExercises } from '../../components/WorkoutPage/MyExercises/MyExercises';
import { ProgressExercises } from '../../components/WorkoutPage/ProgressExercises/ProgressExercises';
import { HeaderVideo } from '../../components/WorkoutPage/Header/HeaderVideo';
import { useAuth } from '../../components/hooks/useAuth';

export const CourseVideoPage = ({ courses, logOut, descriptions }) =>{
  const { isAuth, id } = useAuth(); 
  const params = useParams();

  if (!courses || !descriptions || courses.length === 0 || descriptions.length === 0){
    return (<></>);
  }

  const courseDescription = descriptions.filter(description => description.workouts.includes(params.courseId))[0];
  if (!courseDescription){
    return (<h1>Неверный идентификатор курса</h1>);
  }

  const myCourse = courses.filter((course)=> course._id === params.courseId)[0];
  return (
    <>
      {courses.length > 0 && (
        <>
          <HeaderVideo lologOut={logOut}/>
          <S.CourseTitle>{courseDescription.nameRU}</S.CourseTitle>
          <S.CourseDescribtion> {myCourse.name} </S.CourseDescribtion>
          < VideoPlayer srcVideo={myCourse.video}/>
          {myCourse.exercises && (
            <S.ExercisesDetails>
              < MyExercises listExercises={myCourse.exercises}/>
              < ProgressExercises/>
            </S.ExercisesDetails>
          )}
        </>
      )}
      {(courses?.length ?? 0) === 0 && (
        <h1> нет данных</h1>
      )}
    </>

  )
}