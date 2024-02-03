
import { useState } from "react";

import { EditorScript } from "./EditorScript";
import { FormSettings } from "./FormSettings";
import { VideoRecorder, WindowPortal } from "../../../../components";

export const PreviewVideo = () => {
  const [audioSource, setAudioSource] = useState<string>('');
  const [videoSource, setVideoSource] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isOpenWindow, setIsOpenWindow] = useState(false)

  const handleAudioSource = (value: string) => {
    setAudioSource(value);
  }

  const handleVideoSource = (value: string) => {
    setVideoSource(value);
  }

  const handleOpenRecorder = () => {
    setIsOpenWindow(!isOpenWindow);
  };

  return (
    <section
      className="w-full h-full flex flex-col justify-between gap-4 p-4 rounded-2xl bg-gray-100
      lg:flex-row"
    >
      <div className="w-full lg:w-4/6">
        <EditorScript onOpenRecorder={handleOpenRecorder} />
      </div>

      <div className="hidden lg:block lg:w-4/12">
        <FormSettings
          audioSource={audioSource}
          videoSource={videoSource}
          onAudioSource={handleAudioSource}
          onVideoSource={handleVideoSource}
        />

        {isOpenWindow && (
          <WindowPortal onCloseWindow={(ref) => console.log(ref.current?.close())}>
            <VideoRecorder
              audioSource={audioSource}
              videoSource={videoSource}
              closePopup={() => setIsOpenWindow(false)}
              setVideoUrl={(url) => setVideoUrl(url)}
            />
          </WindowPortal>
        )}

        <div>
          {videoUrl && (
            <video src={videoUrl} controls></video>
          )}
        </div>
      </div>
    </section >
  )
}
