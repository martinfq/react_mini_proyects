import { useEffect, useRef } from "react";

export default function TiktokVideo({ item, current }) {
  const ref = useRef(null);

  useEffect(() => {
    if (current && ref.current) {
       ref.current.play();
    } else {
       ref.current.pause();
      ref.current.currentTime = 0;
    }
  }, [current]);

  return (
    <div className="tiktokVideo">
      <video ref={ref} width="540" height="960">
        <source
          src={`http://localhost:4000/videos/${item.path}`}
          type="video/mp4"
          muted="muted"
        />
      </video>
    </div>
  );
}
