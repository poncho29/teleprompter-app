import { useNavigate } from "react-router-dom";

import { Buttom } from "../../../components";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <h2>Home</h2>

      <Buttom
        customClass="w-32"
        onClick={() => navigate('/dashboard/preview')}
      >
        Record Video
      </Buttom>
    </div>
  )
}
