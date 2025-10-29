import { useSelector } from "react-redux";
import LogoutButton from "../components/LogoutButton";

const HomePage = () => {
    const { user } = useSelector((state) => state.auth);

    if (!user) {
    return <p>Por favor inicia sesion primero</p>;
    }

    return (
    <div>
        <h2>Bienvenido, {user.email || user.displayName}</h2>
        <LogoutButton />
    </div>
    );
};

export default HomePage;
