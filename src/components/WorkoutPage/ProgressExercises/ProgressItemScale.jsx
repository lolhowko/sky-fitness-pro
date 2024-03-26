import * as S from './ProgressItemScale.styles';

export function ProgressItemScale({ value, max , color = "green", backgroundColor = "aliceblue"}) {
  
  return (
    <S.ProgressFrame>
      <S.ProgressBar color={color} backgroundColor={backgroundColor}>
        <S.Progress color={color} scale={(value / max) * 100}>
          <S.ProgressValue>{`${(value / max) * 100}%`}</S.ProgressValue>
        </S.Progress>
      </S.ProgressBar>
    </S.ProgressFrame>
  );
}