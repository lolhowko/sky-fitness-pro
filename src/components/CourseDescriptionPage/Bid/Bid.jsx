import React from 'react'
import * as S from './Bid.style'
// import svgUrl from '../../../assets/images/bid.svg'
import Button from '../Button/Button'
import CountedProgress from '../../WorkoutPage/progress-counted/progress-counted'

const Bid = ({ addUserToCourse, isShown }) => {
  return (
    <S.BidContainer>
      <S.SignUp>
        <p>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </p>
        <div style={{ marginTop: '34px' }}>
          <Button onClick={addUserToCourse}
          >Записаться на тренировку
          </Button>
        </div>
      </S.SignUp>
      {/* <S.BidImg alt="Рука с телефоном" src={svgUrl} /> */}

      {isShown && <CountedProgress tittle="Вы успешно записались!" />}
    </S.BidContainer>
  )
}

export default Bid
