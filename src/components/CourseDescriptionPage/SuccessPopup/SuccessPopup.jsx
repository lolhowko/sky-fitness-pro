import React from 'react';
import * as S from './SuccessPopup.styles';
import successUrl from '../../../assets/images/success.png';

const SuccessPopup = ({ isOpen = false, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.SuccessPopupContainer>
      <S.SuccessPopupBox>
        <S.SuccessPopupText>Вы успешно записаны на курс!</S.SuccessPopupText>
        <S.SuccessImg src={successUrl} alt="success image" />
      </S.SuccessPopupBox>
    </S.SuccessPopupContainer>
  );
};

export default SuccessPopup;