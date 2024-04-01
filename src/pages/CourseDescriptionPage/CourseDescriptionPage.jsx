import React from "react";
import { useParams } from "react-router-dom";
import Logo from "../../components/CourseDescriptionPage/Logo/Logo";
import CourseInformation from "../../components/CourseDescriptionPage/CourseInformation/CourseInformation";
import Bid from "../../components/CourseDescriptionPage/Bid/Bid";
import * as S from "./CourseDescriptionPage.style";

const CourseDescriptionPage = () => {
  const { id } = useParams();
  
  const course = {
    id: "1",
    name: "Йога",
    desires: [
      "Давно хотели попробовать йогу, но не решались начать.",
      "Хотите укрепить позвоночник, избавиться от болей в спине и суставах.",
      "Ищете активность, полезную для тела и души."
    ],
    directions: [
      "Йога для новичков",
      "Классическая йога",
      "Йогатерапия",
      "Кундалини-йога",
      "Хатха-йога",
      "Аштанга-йога"
    ],
    description:
      "Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам."
  };

  return (
    <S.CourseDescriptionPage>
      <Logo />
      <CourseInformation
        id={course.id}
        name={course.name}
        description={course.description}
        desires={course.desires}
        directions={course.directions}
      />
      <Bid />
    </S.CourseDescriptionPage>
  );
};

export { CourseDescriptionPage };