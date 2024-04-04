
import * as S from './SelectWorkoutPopup.styles'

export const SelectWorkoutPopup = ({ list }) => {

  console.log(list);

  return (

    <S.SelectWorkoutContainer>
      <S.SelectWorkoutHeader>
        <S.SelectWorkoutTitle>Выберите тренировку</S.SelectWorkoutTitle>
      </S.SelectWorkoutHeader>
      <S.SelectWorkoutBody id="hhh">
        <S.SelectWorkoutList>
          {list.map(item=>(
            <S.SelectWorkoutItem>
              {item.name}
            </S.SelectWorkoutItem>))}
          {list.map(item=>(
            <S.SelectWorkoutItem>
              {item.name}
            </S.SelectWorkoutItem>))}
        </S.SelectWorkoutList>
      </S.SelectWorkoutBody>
    </S.SelectWorkoutContainer>

  )
};