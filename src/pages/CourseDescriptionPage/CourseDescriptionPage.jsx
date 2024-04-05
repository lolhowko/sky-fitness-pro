import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Logo from '../../components/CourseDescriptionPage/Logo/Logo'
import CourseInformation from '../../components/CourseDescriptionPage/CourseInformation/CourseInformation'
import Bid from '../../components/CourseDescriptionPage/Bid/Bid'
import * as S from './CourseDescriptionPage.style'
import { useDispatch, useSelector } from 'react-redux'
import { get, getDatabase, ref, update } from 'firebase/database'
import { getCourses } from '../../api'
import { setCourseList } from '../../components/store/slices/courseWorkoutSlice'
import { idSelector } from '../../components/store/selectors/user'

const CourseDescriptionPage = ({ courses }) => {
  const { courseId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const course = courses.find((c) => c._id === courseId) || {
    _id: '1',
    nameRU: 'Йога',
    nameEN: 'Yoga',
    fitting: [
      'Давно хотели попробовать йогу, но не решались начать.',
      'Хотите укрепить позвоночник, избавиться от болей в спине и суставах.',
      'Ищете активность, полезную для тела и души.',
    ],
    directions: [
      'Йога для новичков',
      'Классическая йога',
      'Йогатерапия',
      'Кундалини-йога',
      'Хатха-йога',
      'Аштанга-йога',
    ],
    description:
      'Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.',
  }

  const userId = useSelector(idSelector)

  const [isShown, setIsShown] = useState(false)

  const db = getDatabase()

  const addUserToCourse = async () => {
    console.log('HELLO')
    if (!userId) {
      navigate('/auth')
      return
    }
    try {
      //получаем ссылку на объект курса в firebase
      const courseRef = ref(db, `course/${course._id}`)

      const snapshot = await get(courseRef)
      const courseFirebase = snapshot.val()

      // courseFirebase.courses[courseId].users = [userId]

      console.log(courseFirebase)
      if (courseFirebase?.users && Array.isArray(courseFirebase.users)) {
        if (courseFirebase.users.includes(userId)) {
          console.log('Пользователь уже записан на курс')
          // navigate('/profile')
          return
        }
        courseFirebase.users.push(userId)
      } else {
        courseFirebase.users = "[userId]"
      }

      // Обновляем объект курса в базе данных
      await update(courseRef, courseFirebase)()
        .then((data) => {
          dispatch(setCourseList(data))
        })
        .catch((error) => {
          console.log(error.message)
        })
      setIsShown(true)
    } catch (error) {
      console.error('Ошибка при добавлении пользователя курс', error)
    }
  }

  return (
    <S.CourseDescriptionPage>
      <Logo />
      <CourseInformation {...course} />
      <Bid addUserToCourse={addUserToCourse} isShown={isShown} />
    </S.CourseDescriptionPage>
  )
}

export default CourseDescriptionPage
