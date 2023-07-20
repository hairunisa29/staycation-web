import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useRegularHooks = () => {
    const dispatch = useDispatch();
    const reduxState = useSelector((state) => state);
    const navigate = useNavigate();
  
    return {
      dispatch,
      navigate,
      reduxState,
    };
  };
  
  export default useRegularHooks;