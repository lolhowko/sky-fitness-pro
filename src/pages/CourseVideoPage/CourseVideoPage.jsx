import { useParams } from 'react-router-dom';
import * as S from './CourseVideoPage.styles';
import VideoPlayer from '../../components/WorkoutPage/VideoPlayer/VideoPlayer';
import { MyExercises } from '../../components/WorkoutPage/MyExercises/MyExercises';
import { ProgressExercises } from '../../components/WorkoutPage/ProgressExercises/ProgressExercises';
import { HeaderVideo } from '../../components/WorkoutPage/Header/HeaderVideo';

export const CourseVideoPage = () =>{
  const params = useParams();
  console.log(params.userId);
  console.log(params.courseId);

  return (
    <>
      <HeaderVideo/>
      {/* <S.CourseTitle>{params.courseId}</S.CourseTitle> */}
      <S.CourseTitle>Йога</S.CourseTitle>
      <S.CourseDescribtion> Красота и здоровье / Йога на каждый день / 2 день</S.CourseDescribtion>
        < VideoPlayer/>
        <S.ExercisesDetails>
          < MyExercises/>
          < ProgressExercises/>
        </S.ExercisesDetails>
    </>

  )
}