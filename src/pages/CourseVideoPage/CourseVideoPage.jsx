import { useParams } from 'react-router-dom';
import * as S from './CourseVideoPage.styles';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { MyExercises } from '../../components/MyExercises/MyExercises';
import { ProgressExercises } from '../../components/ProgressExercises/ProgressExercises';

export const CourseVideoPage = () =>{
  const params = useParams();
  console.log(params.userId);
  console.log(params.courseId);

  return (
    <>
      <S.CourseTitle>{params.courseId}</S.CourseTitle>
      <S.CourseDescribtion> Красота и здоровье / Йога на каждый день / 2 день</S.CourseDescribtion>
        < VideoPlayer/>
        <S.ExercisesDetails>
          < MyExercises/>
          < ProgressExercises/>
        </S.ExercisesDetails>
    </>

  )
}