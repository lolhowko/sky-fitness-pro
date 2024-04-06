import * as S from './progress-counted.styles'

export default function CountedProgress({ tittle, closeModal }) {
  return (
    <>
      <S.ProgressOkConfirm>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <S.ProgressOkConfirmTitle> {tittle} </S.ProgressOkConfirmTitle>
        <S.ProgressOkImg src="/ok.svg" alt="ok" />
      </S.ProgressOkConfirm>
    </>
  )
}
