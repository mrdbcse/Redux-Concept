import { useDispatch, useSelector } from "react-redux";
import { userAuthAction } from "../Actions/authActions";

const Auth = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const toggleAuthHandler = () => {
    dispatch(userAuthAction());
  };
  return (
    <div>
      <button className='btn btn-info' onClick={toggleAuthHandler}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Auth;
