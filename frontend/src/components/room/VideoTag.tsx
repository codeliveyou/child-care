import React, { useEffect, useRef } from "react";
import classNames from "classnames";

interface VideoTagProps {
  srcObject?: MediaStream;
  src?: string;
  style?: React.CSSProperties;
  className?: string;
  muted?: boolean;
  id?: string;
}

function VideoTag({ srcObject, src, style, className, muted, id }: VideoTagProps) {
  const video = useRef<HTMLVideoElement>(null);

  const combinedClassName = classNames(
    "static shadow-lg bg-slate-900 max-w-full max-h-full",
    className
  );

  function handleCanPlay() {
    if (video.current) {
      video.current.play().catch(error => console.error("Error playing video:", error));
    }
  }

  useEffect(() => {
    if (srcObject && video.current) {
      video.current.srcObject = srcObject;
    }
  }, [srcObject]);

  return (
    <video
      id={id}
      style={style}
      ref={video}
      onCanPlay={handleCanPlay}
      playsInline
      className={combinedClassName}
      autoPlay={true}
      src={src}
      muted={muted}
    />
  );
}

export default VideoTag;