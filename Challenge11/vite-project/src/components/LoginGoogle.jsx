import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../features/auth/authThunks";

const LoginGoogle = () => {
    const dispatch = useDispatch();

    const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
    };

    return <button onClick={handleGoogleLogin}>Login with Google</button>;
};

export default LoginGoogle;
