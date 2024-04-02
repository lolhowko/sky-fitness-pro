import { useState } from 'react'
import * as S from './ProgressExercises.styles'
import { ProgressItemScale } from './ProgressItemScale'

export const ProgressExercises = ({ listExercises }) => {
  console.log(listExercises)
  const workoutLength = listExercises.length

  console.log(workoutLength)

  const [progressValues, setProgressValues] = useState(
    new Array(workoutLength).fill('')
  )

  console.log(progressValues)

  return (
    <S.ProgressBox>
      <S.ProgressTitle> Мой прогресс по тренировке 2:</S.ProgressTitle>
      <S.TrainingProgressBox>
        {listExercises &&
          listExercises.map((exercise, index) => {
            const exerciseText = exercise?.name ? exercise?.name.split('(') : ''

            let valueInPercentage

            if (exercise.quantity !== 0 && !isNaN(progressValues[index])) {
              valueInPercentage = Math.round(
                (progressValues[index] / exercise.quantity) * 100
              )
            } else {
              valueInPercentage = 0
            }

            if (valueInPercentage > 100) {
              valueInPercentage = 100
            } else if (valueInPercentage < 0) {
              valueInPercentage = 0
            }

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
