import * as S from './MyExercises.styles'

export const MyExercises = () => {

  const openPopup = () => {};
  return (
    <div>
      <S.Title>Упражнения</S.Title>
        <S.ExercisesList>Наклон вперед (10 повторений)</S.ExercisesList>
        <S.ExercisesList>Наклон назад (10 повторений)</S.ExercisesList>
        <S.ExercisesList>Поднятие ног, согнутых в коленях (5 повторений)</S.ExercisesList>   
    <div>
        {/* <h2>Мое всплывающее окно</h2> */}
        <button onClick={openPopup}>Заполнить свой прогресс</button>
      </div>
    </div>
  );

}