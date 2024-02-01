import { useEffect, useState } from 'react';

interface ISourceOptions {
  label: string;
  value: string;
}

export const useGetMediaDevices = () => {
  const [audioSourceOptions, setAudioSourceOptions] = useState<ISourceOptions[]>([]);
  const [videoSourceOptions, setVideoSourceOptions] = useState<ISourceOptions[]>([]);

  useEffect(() => {
    const getMediaDevices = async () => {
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

      const mediaDevices = await getDevices();
      gotDevices(mediaDevices);
    }

    getMediaDevices();
  }, []);


  return {
    audioSourceOptions,
    videoSourceOptions
  }
}
