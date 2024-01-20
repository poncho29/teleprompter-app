import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const WrapperLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('teleprompterToken');

    if (!token) {
      navigate('/auth/login', { replace: true });
      return;
    }

  }, [location.pathname, navigate]);

  return (
    <Outlet />
  );
};
