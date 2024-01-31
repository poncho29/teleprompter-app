import { useEffect, useRef, useState } from "react";
import { Buttom } from "..";

interface ISourceOptions {
  label: string;
  value: string;
}

export const VideoRecorder = () => {
  const chunks = useRef<Blob[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const streamRecorderRef = useRef<MediaRecorder | null>(null);

  const [downloadLink, setDownloadLink] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [audioSource, setAudioSource] = useState<string>('');
  const [videoSource, setVideoSource] = useState<string>('');
  const [audioSourceOptions, setAudioSourceOptions] = useState<ISourceOptions[]>([]);
  const [videoSourceOptions, setVideoSourceOptions] = useState<ISourceOptions[]>([]);

  useEffect(() => {
    const prepareStream = async () => {
      const gotStream = (stream: MediaStream) => {
        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }

      const getStream = async () => {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop);
        }

        const constraints = {
          audio: { deviceId: audioSource !== '' ? { exact: audioSource } : undefined },
          video: { deviceId: videoSource !== '' ? { exact: videoSource } : undefined },
        }

        try {
          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          gotStream(stream);
        } catch (error) {
          if (error instanceof Error) {
            setError(error);
          } else {
            const customError: Error = {
              name: 'custom error',
              message: 'Error getting media',
            }
            setError(customError);
          }
        }
      }

      const getDevices = () => {
        return navigator.mediaDevices.enumerateDevices();
      }

      const gotDevices = (devicesInfos: MediaDeviceInfo[]) => {
        const audioSourceOptions: ISourceOptions[] = [];
        const videoSourceOptions: ISourceOptions[] = [];

        for (const devicesInfo of devicesInfos) {
          if (devicesInfo.kind === 'audioinput') {
            audioSourceOptions.push({
              value: devicesInfo.deviceId,
              label: devicesInfo.label || `Microphone ${devicesInfo.deviceId}`,
            })
          }

          if (devicesInfo.kind === 'videoinput') {
            videoSourceOptions.push({
              value: devicesInfo.deviceId,
              label: devicesInfo.label || `Camera ${devicesInfo.deviceId}`,
            })
          }

          setAudioSourceOptions(audioSourceOptions);
          setVideoSourceOptions(videoSourceOptions);
        }
      }

      await getStream();

      const mediaDevices = await getDevices();
      gotDevices(mediaDevices);
    }

    prepareStream();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isRecording) return;

    if (chunks.current.length === 0) return;

    const blob = new Blob(chunks.current, {
      type: 'video/x-matroska;codecs=avc1,opus',
    });

    setDownloadLink(URL.createObjectURL(blob));
    chunks.current = [];
  }, [isRecording])

  const startRecording = () => {
    if (isRecording) return;

    if (!streamRef.current) return;

    streamRecorderRef.current = new MediaRecorder(streamRef.current);
    streamRecorderRef.current.start();
    streamRecorderRef.current.ondataavailable = (event: BlobEvent) => {
      if (chunks.current) {
        chunks.current.push(event.data);
      }
    }
    setIsRecording(true);
  }

  const stopRecording = () => {
    if (!streamRecorderRef.current) return;

    streamRecorderRef.current.stop();
    setIsRecording(false);
    console.log('STOP')
  }

  return (
    <div>
      <div className="w-full flex flex-col gap-2 mb-4">
        <select
          id="audioSource"
          name="audioSource"
          value={audioSource}
          onChange={e => setAudioSource(e.target.value)}
        >
          {audioSourceOptions.map(option =>
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          )}
        </select>

        <select
          id="videoSource"
          name="videoSource"
          value={videoSource}
          onChange={e => setVideoSource(e.target.value)}
        >
          {videoSourceOptions.map(option =>
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          )}
        </select>
      </div>

      <video muted autoPlay playsInline ref={videoRef}></video>

      <div className="flex gap-2 my-4">
        <Buttom disabled={isRecording} onClick={startRecording}>Grabar</Buttom>
        <Buttom disabled={!isRecording} onClick={stopRecording}>Detener</Buttom>
      </div>

      {error && <p>{error.message}</p>}

      <div>
        {downloadLink && <video src={downloadLink} controls></video>}
        {downloadLink && (
          <a href={downloadLink} download="file.mp4">
            Descargar
          </a>
        )}
      </div>
    </div>
  );
};