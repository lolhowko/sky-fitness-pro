import React from 'react'
import { useParams } from 'react-router-dom'
import Logo from '../../components/CourseDescriptionPage/Logo/Logo'
import CourseInformation from '../../components/CourseDescriptionPage/CourseInformation/CourseInformation'
import Bid from '../../components/CourseDescriptionPage/Bid/Bid'
import * as S from './CourseDescriptionPage.style'

const CourseDescriptionPage = ({ courses }) => {
  const { courseId } = useParams()
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
  return (
    <S.CourseDescriptionPage>
      <Logo />
      <CourseInformation {...course} />
      <Bid />
    </S.CourseDescriptionPage>
  )
}

export default CourseDescriptionPage
