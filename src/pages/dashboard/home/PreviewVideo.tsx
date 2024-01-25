
import { useNavigate } from "react-router-dom";

import { Buttom } from "../../../components";

export const PreviewVideo = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>PreviewVideo</h2>

      <Buttom
        customClass="w-32"
        onClick={() => navigate('/dashboard')}
      >
        Back
      </Buttom>
    </div >
  )
}
