import { useNavigate } from 'react-router-dom';

import { Buttom } from '../../../../components';

import { IoSettings } from 'react-icons/io5';

interface Props {
  onOpenRecorder: () => void;
}

export const EditorScript = ({ onOpenRecorder }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex items-center justify-between mb-4'>
        <h3 className="text-2xl font-bold">Titulo del Guion</h3>
        <IoSettings size={24} className='cursor-pointer lg:hidden' />
      </div>

      <p className="h-[380px] p-4 mb-4 border border-indigo-600 rounded-xl overflow-y-auto no-scrollbar bg-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis aliquam rem totam, doloremque ducimus,
        a voluptatibus error nostrum repudiandae dolores voluptatum? Expeditaesse soluta, ab eius repellendus enim ipsam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis aliquam rem totam, doloremque ducimus,
        a voluptatibus error nostrum repudiandae dolores voluptatum? Expeditaesse soluta, ab eius repellendus enim ipsam!

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis aliquam rem totam, doloremque ducimus,
        a voluptatibus error nostrum repudiandae dolores voluptatum? Expeditaesse soluta, ab eius repellendus enim ipsam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis aliquam rem totam, doloremque ducimus,
        a voluptatibus error nostrum repudiandae dolores voluptatum? Expeditaesse soluta, ab eius repellendus enim ipsam!

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis aliquam rem totam, doloremque ducimus,
        a voluptatibus error nostrum repudiandae dolores voluptatum? Expeditaesse soluta, ab eius repellendus enim ipsam!

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis aliquam rem totam, doloremque ducimus,
        a voluptatibus error nostrum repudiandae dolores voluptatum? Expeditaesse soluta, ab eius repellendus enim ipsam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis aliquam rem totam, doloremque ducimus,
        a voluptatibus error nostrum repudiandae dolores voluptatum? Expeditaesse soluta, ab eius repellendus enim ipsam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis aliquam rem totam, doloremque ducimus,
        a voluptatibus error nostrum repudiandae dolores voluptatum? Expeditaesse soluta, ab eius repellendus enim ipsam!
      </p>

      <div className="flex gap-4">
        <Buttom customClass="w-32" onClick={() => navigate('/dashboard')}>Volver</Buttom>
        <Buttom customClass="w-32" onClick={onOpenRecorder}>Grabar</Buttom>
      </div>
    </>
  )
}
