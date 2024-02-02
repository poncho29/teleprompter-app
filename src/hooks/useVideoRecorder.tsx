import { useEffect, useRef, useState } from 'react';

interface Props {
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
  audioSource: string;
  videoSource: string;
}

export const useVideoRecorder = ({
  videoRef,
  audioSource,
  videoSource
}: Props) => {
  const chunks = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const streamRecorderRef = useRef<MediaRecorder | null>(null);

  const [urlVideo, setUrlVideo] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const startRecording = () => {
    if (isRecording) return;

    if (!streamRef.current) return;

    chunks.current = [];
    streamRecorderRef.current = new MediaRecorder(streamRef.current);

    streamRecorderRef.current.ondataavailable = (event: BlobEvent) => {
      if (chunks.current) {
        chunks.current.push(event.data);
      }
    }

    streamRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks.current, {
        type: 'video/x-matroska;codecs=avc1,opus',
      });

      setUrlVideo(URL.createObjectURL(blob));
    };

    streamRecorderRef.current.start();

    setIsRecording(true);
  }

  const stopRecording = () => {
    if (!streamRecorderRef.current) return;

    streamRecorderRef.current.stream.getVideoTracks()[0].stop();
    streamRecorderRef.current.stream.getAudioTracks()[0].stop();
    setIsRecording(false);
  }

  useEffect(() => {
    if (isRecording) return;

    if (chunks.current.length === 0) return;

    const blob = new Blob(chunks.current, {
      type: 'video/x-matroska;codecs=avc1,opus',
    });

    setUrlVideo(URL.createObjectURL(blob));
    chunks.current = [];
  }, [isRecording]);

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

      await getStream();
    }

    prepareStream();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    error,
    urlVideo,
    isRecording,
    startRecording,
    stopRecording,
  }
}
