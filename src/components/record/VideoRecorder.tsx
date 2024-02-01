import { useRef } from "react";

import { useVideoRecorder } from "../../hooks";

import { Buttom } from "..";

interface Props {
  audioSource: string;
  videoSource: string;
}

export const VideoRecorder = ({ audioSource, videoSource }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { isRecording, urlVideo, startRecording, stopRecording } = useVideoRecorder({
    videoRef, audioSource, videoSource
  });

  console.log(urlVideo);

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
    </div>
  );
};