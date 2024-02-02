
import { useState } from "react";

import { EditorScript } from "./EditorScript";
import { FormSettings } from "./FormSettings";
import { VideoRecorder } from "../../../../components";

export const PreviewVideo = () => {
  const [audioSource, setAudioSource] = useState<string>('');
  const [videoSource, setVideoSource] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleAudioSource = (value: string) => {
    setAudioSource(value);
  }

  const handleVideoSource = (value: string) => {
    setVideoSource(value);
  }

  const handleOpenRecorder = () => {
    const popup = window.open('', '_blank', 'width=600,height=400');
    if (popup) {
      popup.document.title = 'Video Recorder';
      popup.document.body.innerHTML = '<div id="videoRecorderContainer"></div>';

      const closePopup = () => {
        popup.close();
      };

      // Renderizar el componente de grabación en la ventana emergente
      VideoRecorder({ audioSource, videoSource, closePopup, setVideoUrl });
    }
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

        {/* <div className="mt-6">
          <h5 className="font-semibold mb-2">Previsualización</h5>

          <VideoRecorder
            audioSource={audioSource}
            videoSource={videoSource}
          />
        </div> */}

        <div>
          {videoUrl && (
            <video src={videoUrl} controls></video>
          )}
        </div>
      </div>
    </section >
  )
}
