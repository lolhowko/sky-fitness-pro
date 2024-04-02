import * as S from './ProgressExercises.styles';
import { ProgressItemScale } from './ProgressItemScale';

export const ProgressExercises = () => {

return (
    <S.ProgressBox>
        <S.ProgressTitle> Мой прогресс по тренировке 2:</S.ProgressTitle>
        <S.ProgressInfo>
            <S.ProgressItem>
                <S.ProgressItemName>Наклоны вперед</S.ProgressItemName>
                <ProgressItemScale value={30} max={100} color="rgb(86, 94, 239)" backgroundColor="rgb(237, 236, 255)"/>
            </S.ProgressItem>
            <S.ProgressItem>
                <S.ProgressItemName>Наклоны назад</S.ProgressItemName>
                <ProgressItemScale value={60} max={100} color="rgb(255, 109, 0)" backgroundColor="rgb(255, 242, 224)"/>
            </S.ProgressItem>
            <S.ProgressItem>
                <S.ProgressItemName>Поднятие ног, согнутых в коленях</S.ProgressItemName>
                <ProgressItemScale value={90} max={100} color="rgb(154, 72, 241)" backgroundColor="rgb(249, 235, 255)"/>
            </S.ProgressItem>
        </S.ProgressInfo>
    </S.ProgressBox>
)
}