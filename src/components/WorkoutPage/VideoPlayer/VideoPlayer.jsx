import * as S from './VideoPlayer.styles';

export default function VideoPlayer({ srcVideo }) {

return (
  <S.BarVideoPlayer>
    <div>
      <iframe 
        width="1160" 
        height="639" 
        source src={srcVideo}
        title="Embedded youtube"
      />
    </div>
  </S.BarVideoPlayer>
);
}
