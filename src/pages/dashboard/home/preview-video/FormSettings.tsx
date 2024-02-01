import { useState } from "react";

import { useGetMediaDevices } from "../../../../hooks";

import { InputCheck } from "../../../../components";

interface Props {
  audioSource: string;
  videoSource: string;
  onAudioSource: (value: string) => void;
  onVideoSource: (value: string) => void;
}

export const FormSettings = ({
  audioSource,
  videoSource,
  onAudioSource,
  onVideoSource
}: Props) => {
  const [fontSize, setFontSize] = useState('normal');
  const [readingSpeed, setReadingSpeed] = useState('normalSpeed');

  const { audioSourceOptions, videoSourceOptions } = useGetMediaDevices();

  return (
    <>
      <h3 className="text-2xl font-bold mb-4">Ajustes de Grabación</h3>

      <form className="flex flex-col gap-4">
        <div>
          <h5 className="font-semibold">Tamaño de fuente</h5>

          <div className="flex gap-4 mt-2 overflow-x-auto">
            <InputCheck
              id="small"
              name="size"
              label="Pequeña"
              value="small"
              checked={fontSize === 'small'}
              onChange={(e) => setFontSize(e.target.value)}
            />

            <InputCheck
              id="normal"
              name="size"
              label="Normal"
              value="normal"
              checked={fontSize === 'normal'}
              onChange={(e) => setFontSize(e.target.value)}
            />

            <InputCheck
              id="big"
              name="size"
              label="Grande"
              value="big"
              checked={fontSize === 'big'}
              onChange={(e) => setFontSize(e.target.value)}
            />
          </div>
        </div>


        <div>
          <h5 className="font-semibold">Velocidad de lectura</h5>

          <div className="flex gap-4 mt-2 overflow-x-auto">
            <InputCheck
              id="slow"
              name="speed"
              label="Despacio"
              value="slow"
              checked={readingSpeed === 'slow'}
              onChange={(e) => setReadingSpeed(e.target.value)}
            />

            <InputCheck
              id="normalSpeed"
              name="speed"
              label="Normal"
              value="normalSpeed"
              checked={readingSpeed === 'normalSpeed'}
              onChange={(e) => setReadingSpeed(e.target.value)}
            />

            <InputCheck
              id="fast"
              name="speed"
              label="Rapido"
              value="fast"
              checked={readingSpeed === 'fast'}
              onChange={(e) => setReadingSpeed(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h5 className="font-semibold">Fuentes de audio</h5>

          <select
            id="audioSource"
            name="audioSource"
            className="w-full h-11 p-2 mt-2 border-2 border-indigo-800 rounded-xl"
            value={audioSource}
            onChange={e => onAudioSource(e.target.value)}
          >
            {audioSourceOptions.map(option =>
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            )}
          </select>
        </div>

        <div>
          <h5 className="font-semibold">Fuentes de video</h5>

          <select
            id="videoSource"
            name="videoSource"
            className="w-full h-11 p-2 mt-2 border-2 border-indigo-800 rounded-xl"
            value={videoSource}
            onChange={e => onVideoSource(e.target.value)}
          >
            {videoSourceOptions.map(option =>
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            )}
          </select>
        </div>
      </form>
    </>
  );
};
