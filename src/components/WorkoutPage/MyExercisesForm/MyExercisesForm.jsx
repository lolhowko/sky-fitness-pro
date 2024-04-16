import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as S from './MyExercisesForm.styles'
import CountedProgress from '../progress-counted/progress-counted'
import { useDispatch, useSelector } from 'react-redux'
import {
  setProgress,
  setProgressValues,
} from '../../store/slices/progressSlice'
import { getLessonsUser, postCourse } from '../../../api'
import { db } from '../../firebase/firebase'

import { getDatabase, ref, set, update } from 'firebase/database'
import { idSelector } from '../../store/selectors/user'
const FORM_STATE_IN_PROCESS = 'FORM_STATE_IN_PROCESS'
const FORM_STATE_COMPLETE = 'FORM_STATE_COMPLETE'

export const MyExercisesForm = ({
  listExercises, // workoutId.exercises - упражнения по выбранному воркауту без progress не из БД
  myWorkout, // полностью выбранный воркаут, { exercises[{},{}], workoutId, isComplete }
  // listMyWorkout, // workoutId.exercises - упражнения по выбранному воркауту c progress
}) => {
  const dispatch = useDispatch()
  const params = useParams()
  const listMyWorkout = myWorkout.exercises

  console.log(listMyWorkout)

  const id = useSelector(idSelector) // id пользователя
  const workoutId = myWorkout.workoutId // id workout (в котором есть exercises и тд)

  const { progressValues } = useSelector((state) => state.progress) // прогресс из заполнения формы

  // НАписать функцию добавления данных в БД через метод update

  async function addNewUserProgress(progressValues) {
    const db = getDatabase()
    let fieldValidation = true //Флаг на проверку превышения количества повторений

    listMyWorkout.forEach((el, index) => {
      el.progress = progressValues[index]

      if (el.progress > el.quantity) {
        alert('Вы ввели слишком большое число')
        fieldValidation = false
      }
      if (el.progress < 0) {
        alert('Количество выполненных упражнений не может быть отрицательным')
        fieldValidation = false
      }
      if (el.progress === el.quantity) {
        el.done = true
        fieldValidation = true

        return el
      } else {
        console.log(el)
        return el
      }
    })

    //ПроверяЕм, не превышено какое либо количество повторений
    if (fieldValidation) {
      const updates = {}
      updates[`users/${id}/workouts/${workoutId}/exercises `] = progressValues
      return update(ref(db), updates)
    }
  }

  // Пройтись по массиву и закинуть прогресс введенный в воркаут.прогресс - РАБОТАЕТ
  listMyWorkout.forEach((el, index) => {
    el.progress = progressValues[index]
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formState, setFormState] = useState(FORM_STATE_IN_PROCESS)
  const [isErrorExist, setIsErrorExist] = useState(false)

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
      // addNewUserProgress()

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
          <S.PoupLayout
            onClick={() => {
              closeModal()
            }}
          />
          <S.Popup>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <S.PopupTitle>Мой прогресс</S.PopupTitle>
              {listMyWorkout.map((exercise, index) => {
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
          <S.PoupLayout
            onClick={() => {
              closeModal()
            }}
          />
          <CountedProgress
            tittle="Ваш прогресс засчитан!"
            closeModal={closeModal}
          />
        </>
      )}
    </div>
  )
}
