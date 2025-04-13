// hooks/useHandleLogout.js
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../redux/userSlice";
import { BASE_URL } from "../constants/constant";
import { toast } from "react-toastify";

const useHandleLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(`${BASE_URL}auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        dispatch(clearUser());
        toast.success("Logout Successful");
        navigate("/login");
      } else {
        toast.error("Logout Failed");
      }
    } catch (error) {
      toast.error("Logout Failed: " + error.message);
    }
  };

  return handleLogout;
};

export default useHandleLogout;
