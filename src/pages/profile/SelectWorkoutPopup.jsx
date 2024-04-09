
import { useNavigate } from 'react-router';
import * as S from './SelectWorkoutPopup.styles'

export const SelectWorkoutPopup = ({ list, callbackToClose }) => {
  const navigate = useNavigate();
  console.log(list);

  const openWorkout = (workoutId) =>{
    navigate("/users/courses/" + workoutId)
  };

  return (
    <>
      <S.PoupLayout onClick={()=> callbackToClose()}/>
      <S.SelectWorkoutContainer>
        <S.SelectWorkoutHeader>
          <S.SelectWorkoutTitle>Выберите тренировку</S.SelectWorkoutTitle>
        </S.SelectWorkoutHeader>
        <S.SelectWorkoutBody>
          <S.SelectWorkoutList>
            {list.map(item=> item.isComplete === true
              ?(<>
                <S.SelectWorkoutItemComplete onClick={()=> openWorkout(item._id)}>
                  <S.WorkoutCheckComplete src="/complete.svg" alt="complete" />
                  {item.name}
                  </S.SelectWorkoutItemComplete>
                
              </>)
              :(<S.SelectWorkoutItem onClick={()=> openWorkout(item._id)}>{item.name}</S.SelectWorkoutItem>)
              )}
          </S.SelectWorkoutList>
        </S.SelectWorkoutBody>
      </S.SelectWorkoutContainer>
    </>
  )
};