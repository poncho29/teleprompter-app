import { useNavigate } from "react-router-dom";

import { Navbar } from "..";

import Logo from '../../assets/images/telepromte-logo.png';

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('teleprompterToken');
    localStorage.removeItem('TelepromterUser');

    navigate('/auth/login');
  }

  return (
    <section className='w-full h-full min-w-[200px] max-w-[300px] flex flex-col px-4 pb-4 bg-sky-800 overflow-y-auto'>
      {/* <span className='block sticky top-0 right-0 text-3xl text-slate-200 font-semibold py-6 bg-sky-800'>Mi Teleprompter</span> */}
      <img src={Logo} alt="logo teleprompter" className="block sticky top-0 right-0 w-full h-16 object-cover" />

      <Navbar />

      <button
        className="w-full h-10 min-h-10 flex items-center px-4 rounded-lg hover:bg-sky-500/50"
        onClick={handleLogout}
      >
        <span className="block w-full text-start text-slate-200 font-medium">Cerrar sesion</span>
      </button>
    </section>
  )
}
