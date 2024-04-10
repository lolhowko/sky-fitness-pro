import { useEffect, useState } from 'react'
import * as S from './MyExercisesForm.styles'
import CountedProgress from '../progress-counted/progress-counted'
import { useDispatch, useSelector } from 'react-redux'
import { setProgressValues } from '../../store/slices/progressSlice'
const FORM_STATE_IN_PROCESS = 'FORM_STATE_IN_PROCESS'
const FORM_STATE_COMPLETE = 'FORM_STATE_COMPLETE'

export const MyExercisesForm = ({ listExercises }) => {
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formState, setFormState] = useState(FORM_STATE_IN_PROCESS)
  const [isErrorExist, setIsErrorExist] = useState(false)

  // const { progressValues } = useSelector((state) => state.progress)
  const workoutLength = listExercises.length

  const [progressValuesChange, setProgressValuesChange] = useState(
    new Array(workoutLength).fill('')
  )

  useEffect(() => {
    dispatch(setProgressValues(new Array(workoutLength).fill('')))
  }, [])

  const openModal = () => {
    setFormState(FORM_STATE_IN_PROCESS)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const sendProgress = () => {
    if (progressValuesChange.some((value) => value === '')) {
      setFormState(FORM_STATE_IN_PROCESS)
      setIsModalOpen(true)
      setIsErrorExist(true)
    } else {
      setFormState(FORM_STATE_COMPLETE)
      setIsErrorExist(false)
      dispatch(setProgressValues(progressValuesChange))

      setTimeout(() => {
        closeModal()
      }, 2000)
    }
  }

  return (
    <div>

      <S.Button onClick={openModal}>Заполнить свой прогресс</S.Button>
      {isModalOpen && formState === FORM_STATE_IN_PROCESS && (
        <>
          <S.PoupLayout onClick={()=>{closeModal()}}/>
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
                      value={progressValuesChange[index]}
                      onChange={(e) => {
                        const newProgressValues = [...progressValuesChange]
                        newProgressValues[index] = e.target.value
                        setProgressValuesChange(newProgressValues)
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
          <S.PoupLayout onClick={()=>{closeModal()}}/>
          <CountedProgress
            tittle="Ваш прогресс засчитан!"
            closeModal={closeModal}
          />
        </>
      )}
    </div>
  )
}
