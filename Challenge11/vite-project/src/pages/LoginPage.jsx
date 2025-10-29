import LoginEmail from "../components/LoginEmail";
import LoginGoogle from "../components/LoginGoogle";

const LoginPage = () => {
    return (
    <div>
        <h2>Iniciar Sesion</h2>
        <LoginEmail />
        <LoginGoogle />
    </div>
    );
};

export default LoginPage;
