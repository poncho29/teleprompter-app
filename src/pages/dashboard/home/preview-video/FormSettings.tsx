import { useState } from "react";

import { InputCheck } from "../../../../components";

export const FormSettings = () => {
  const [fontSize, setFontSize] = useState('normal');
  const [readingSpeed, setReadingSpeed] = useState('normalSpeed');

  return (
    <>
      <h3 className="text-2xl font-bold mb-4">Ajustes de Grabación</h3>

      <form className="flex flex-col gap-4">
        <div>
          <h5 className="font-semibold">Tamaño de fuente</h5>

          <div className="flex gap-4 pt-2">
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

          <div className="flex gap-4 pt-2">
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
      </form>
    </>
  );
};
