import * as S from './ProgressExercises.styles';
import { ProgressItemScale } from './ProgressItemScale';

export const ProgressExercises = () => {

return (
    <S.ProgressBox>
        <S.ProgressTitle> Мой прогресс по тренировке 2:</S.ProgressTitle>
        <S.ProgressInfo>
            <S.ProgressItem>
                <S.ProgressItemName>Наклоны вперед</S.ProgressItemName>
                <ProgressItemScale value={16} max={100}/>
            </S.ProgressItem>
            <S.ProgressItem>
                <S.ProgressItemName>Наклоны назад</S.ProgressItemName>
                <ProgressItemScale value={45} max={100}/>
            </S.ProgressItem>
            <S.ProgressItem>
                <S.ProgressItemName>Поднятие ног, согнутых в коленях</S.ProgressItemName>
                <ProgressItemScale value={97} max={100}/>
            </S.ProgressItem>
        </S.ProgressInfo>
    </S.ProgressBox>
)
}