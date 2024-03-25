import * as S from './VideoPlayer.styles';

export default function VideoPlayer() {

return (
  <S.BarVideoPlayer>
    <div>
      <video  width="1160" height="639" controls>
        <source src="#" type="video/mp4" />
      </video>
    </div>
  </S.BarVideoPlayer>
);
}
