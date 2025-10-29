import { useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authThunks";

const LogoutButton = () => {
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(logoutUser())}>Cerrar sesion</button>;
};

export default LogoutButton;
