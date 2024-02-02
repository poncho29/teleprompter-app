import { useEffect, useRef } from "react";

import { useVideoRecorder } from "../../hooks";

import { Buttom } from "..";

interface Props {
  audioSource: string;
  videoSource: string;
  closePopup: () => void;
  setVideoUrl: (url: string) => void;
}

export const VideoRecorder: React.FC<Props> = ({ audioSource, videoSource, closePopup, setVideoUrl }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoRecorderContainerRef = useRef<HTMLDivElement | null>(null);

  const { error, urlVideo, isRecording, startRecording, stopRecording } = useVideoRecorder({
    videoRef, audioSource, videoSource
  });

  useEffect(() => {
    if (urlVideo) {
      setVideoUrl(urlVideo);
      closePopup();
    }
  }, [urlVideo, setVideoUrl, closePopup]);

  useEffect(() => {
    // Crear un nuevo contenedor en la ventana emergente
    const newContainer = document.createElement('div');
    videoRecorderContainerRef.current = newContainer;

    if (videoRef.current) {
      newContainer.appendChild(videoRef.current);
    }

    document.body.appendChild(newContainer);

    return () => {
      // Limpiar al desmontar
      if (videoRecorderContainerRef.current) {
        document.body.removeChild(videoRecorderContainerRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <video
        muted
        autoPlay
        playsInline
        ref={videoRef}
        className="w-full aspect-video rounded-2xl border border-indigo-600 bg-black"
      ></video>

      <div className="flex gap-2 my-4">
        <Buttom disabled={isRecording} onClick={startRecording}>Grabar</Buttom>
        <Buttom disabled={!isRecording} onClick={stopRecording}>Detener</Buttom>
      </div>

      <div>{error && <p>Error: {error.message}</p>}</div>
    </div>
  );
};