
import { useState } from "react";

import { EditorScript } from "./EditorScript";
import { FormSettings } from "./FormSettings";
import { VideoRecorder } from "../../../../components";

export const PreviewVideo = () => {
  const [audioSource, setAudioSource] = useState<string>('');
  const [videoSource, setVideoSource] = useState<string>('');

  const handleAudioSource = (value: string) => {
    setAudioSource(value);
  }

  const handleVideoSource = (value: string) => {
    setVideoSource(value);
  }

  return (
    <section
      className="w-full h-full flex flex-col justify-between gap-4 p-4 rounded-2xl bg-gray-100
      lg:flex-row"
    >
      <div className="w-full lg:w-4/6">
        <EditorScript />
      </div>

      <div className="hidden lg:block lg:w-4/12">
        <FormSettings
          audioSource={audioSource}
          videoSource={videoSource}
          onAudioSource={handleAudioSource}
          onVideoSource={handleVideoSource}
        />

        <div className="mt-6">
          <h5 className="font-semibold mb-2">Previsualización</h5>

          <VideoRecorder
            audioSource={audioSource}
            videoSource={videoSource}
          />
        </div>
      </div>
    </section >
  )
}
