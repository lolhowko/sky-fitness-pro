import * as S from './ProgressExercises.styles'
import { useSelector } from 'react-redux'

export const ProgressExercises = ({ userId, myWorkout }) => {
  const { progressValues } = useSelector((state) => state.progress) // массив с заполнения формы

  const getPercentageByValue = (exercise) => {
    exercise.progress = exercise.progress ?? 0

    let valueInPercentage

    if (exercise.quantity !== 0 && exercise.progress !== null) {
      valueInPercentage = Math.round(
        (exercise.progress / exercise.quantity) * 100
      )
    } else {
      valueInPercentage = 0
    }

    if (valueInPercentage > 100) {
      valueInPercentage = 100
    } else if (valueInPercentage < 0) {
      valueInPercentage = 0
    }
    return valueInPercentage
  }

  const listExercises = myWorkout.exercises

  return (
    <S.ProgressBox>
      <S.ProgressTitle> Мой прогресс по тренировке 2:</S.ProgressTitle>
      <S.TrainingProgressBox>
        {listExercises &&
          listExercises.map((exercise, index) => {
            exercise.progress = exercise.progress ?? 0
            const exerciseText = exercise?.name ? exercise?.name.split('(') : ''
            const valueInPercentage = getPercentageByValue(exercise)
            return (
              <S.TrainingProgressInPercentage key={'progress-' + index}>
                <S.TrainingProgressElement>
                  {exerciseText[0]}
                </S.TrainingProgressElement>
                <S.TrainingProgressInputBox>
                  <S.ProgressInputForExerciseFirst
                    value={valueInPercentage + '%'}
                  ></S.ProgressInputForExerciseFirst>
                  <S.TrainingProgressInputPercentage
                    value={parseInt(valueInPercentage)}
                  >
                    {valueInPercentage + '%'}
                  </S.TrainingProgressInputPercentage>
                </S.TrainingProgressInputBox>
              </S.TrainingProgressInPercentage>
            )
          })}
      </S.TrainingProgressBox>
    </S.ProgressBox>
  )
}
