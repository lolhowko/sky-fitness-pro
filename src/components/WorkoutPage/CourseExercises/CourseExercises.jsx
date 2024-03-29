import * as S from './CourseExercises.styles'

export const CourseExercises = ({ listExercises }) => {

  return (
    <div>
      <S.Title>Упражнения</S.Title>
      <S.ExercisesUL>
        {listExercises.map((item) => {return <S.ExercisesLi>{item.name}</S.ExercisesLi>})}
      </S.ExercisesUL>
    </div>
  );
}
