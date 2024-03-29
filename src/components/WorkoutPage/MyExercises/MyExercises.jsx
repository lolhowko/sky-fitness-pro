import { useState } from 'react';
import * as S from './MyExercises.styles'
const FORM_STATE_IN_PROCESS = "FORM_STATE_IN_PROCESS";
const FORM_STATE_COMPLETE = "FORM_STATE_COMPLETE";

export const MyExercises = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState(FORM_STATE_IN_PROCESS);

  const openModal = () => {
    setFormState(FORM_STATE_IN_PROCESS);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendProgress = () => {
    setFormState(FORM_STATE_COMPLETE);
    setTimeout(()=>{
      closeModal();
    }, 2000);
  };

  return (
    <div>
      <S.Title>Упражнения</S.Title>
        <S.ExercisesList>Наклон вперед (10 повторений)</S.ExercisesList>
        <S.ExercisesList>Наклон назад (10 повторений)</S.ExercisesList>
        <S.ExercisesList>Поднятие ног, согнутых в коленях (5 повторений)</S.ExercisesList>   
      <div>
        <S.Button onClick={openModal}>Заполнить свой прогресс</S.Button >
        {isModalOpen && formState === FORM_STATE_IN_PROCESS &&
          (<>
            <S.Popup>
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <S.PopupTitle>Мой прогресс</S.PopupTitle>
                <S.PopupQuestionList>
                  
                  <S.PopupQuestionItem>
                    <S.PopupQuestionText>Сколько раз вы сделали наклоны вперед?</S.PopupQuestionText>
                    <S.PopupQuestionAnswer type="text" placeholder='Введите значение'/>
                  </S.PopupQuestionItem>

                  <S.PopupQuestionItem>
                    <S.PopupQuestionText>Сколько раз вы сделали наклоны назад?</S.PopupQuestionText>
                    <S.PopupQuestionAnswer type="text" placeholder='Введите значение'/>
                  </S.PopupQuestionItem>

                  <S.PopupQuestionItem>
                    <S.PopupQuestionText>Сколько раз вы сделали поднятие ног, согнутых в коленях?</S.PopupQuestionText>
                    <S.PopupQuestionAnswer type="text" placeholder='Введите значение'/>
                  </S.PopupQuestionItem>

                </S.PopupQuestionList>
              </div>
              <S.PopupButton onClick={sendProgress}>Oтправить</S.PopupButton>
            </S.Popup>
          </>)
        }
        {isModalOpen && formState === FORM_STATE_COMPLETE &&
          (<>
            <S.ProgressOkConfirm>
              <span className="close" onClick={closeModal}>&times;</span>
              <S.ProgressOkConfirmTitle> Ваш прогресс засчитан!</S.ProgressOkConfirmTitle>
              <S.ProgressOkImg src="/ok.svg" alt="ok" />
            </S.ProgressOkConfirm>
          </>)
        }

      </div>
    </div>
  );
}
