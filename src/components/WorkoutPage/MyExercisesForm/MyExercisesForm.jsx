import { useState } from 'react'
import * as S from './MyExercisesForm.styles'
const FORM_STATE_IN_PROCESS = 'FORM_STATE_IN_PROCESS'
const FORM_STATE_COMPLETE = 'FORM_STATE_COMPLETE'

export const MyExercisesForm = ({ listExercises }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formState, setFormState] = useState(FORM_STATE_IN_PROCESS)

  // DOP
  const [isMyProgressCounted, setIsMyProgressCounted] = useState(false)
  const [isErrorExist, setIsErrorExist] = useState(false)

  const openModal = () => {
    setFormState(FORM_STATE_IN_PROCESS)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const sendProgress = () => {
    if (progressValues.some((value) => value === '')) {
      setIsModalOpen(true)
      setIsErrorExist(true)
    } else {
      setFormState(FORM_STATE_COMPLETE)
      setIsModalOpen(false)
      setIsMyProgressCounted(true)
      setIsErrorExist(false)

      setTimeout(() => {
        setIsMyProgressCounted(false)
      }, 2000)
    }
    // setFormState(FORM_STATE_COMPLETE)
    // setTimeout(() => {
    //   closeModal()
    // }, 2000)
  }

  // КОД ОТ ЛАНЫ

  // console.log(listExercises)
  const workoutLength = listExercises.length

  // console.log(workoutLength)

  const [progressValues, setProgressValues] = useState(
    new Array(workoutLength).fill('')
  )

  return (
    <div>
      <S.Button onClick={openModal}>Заполнить свой прогресс</S.Button>
      {isModalOpen && formState === FORM_STATE_IN_PROCESS && (
        <>
          <S.Popup>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <S.PopupTitle>Мой прогресс</S.PopupTitle>
              {listExercises.map((exercise, index) => {
                const exerciseText = exercise.name.split('(')

                return (
                  <S.PopupQuestionList key={index}>
                    <S.MyProgressText>
                      Сколько раз вы сделали {exerciseText[0].toLowerCase()}?
                    </S.MyProgressText>
                    <S.MyProgressInput
                      type="number"
                      placeholder="Введите значение"
                      value={progressValues[index]}
                      onChange={(e) => {
                        const newProgressValues = [...progressValues]
                        newProgressValues[index] = e.target.value
                        setProgressValues(newProgressValues)
                        console.log(newProgressValues)
                      }}
                    ></S.MyProgressInput>
                  </S.PopupQuestionList>
                )
              })}
            </div>
            <S.PopupButton onClick={sendProgress}>Oтправить</S.PopupButton>
            {isErrorExist ? (
              <S.ErrorText>Все поля должны быть заполнены!</S.ErrorText>
            ) : null}
          </S.Popup>
        </>
      )}
      {isModalOpen && formState === FORM_STATE_COMPLETE && (
        <>
          <S.ProgressOkConfirm>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <S.ProgressOkConfirmTitle>
              {' '}
              Ваш прогресс засчитан!
            </S.ProgressOkConfirmTitle>
            <S.ProgressOkImg src="/ok.svg" alt="ok" />
          </S.ProgressOkConfirm>
        </>
      )}
    </div>
  )
}
