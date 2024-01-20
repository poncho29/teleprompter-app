import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const WrapperLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('teleprompterToken');

    if (token) navigate('/dashboard');
    else navigate('/auth/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Outlet />
  )
}
