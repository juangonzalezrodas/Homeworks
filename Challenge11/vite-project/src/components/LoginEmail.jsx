import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmail } from "../features/auth/authThunks";

const LoginEmail = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginWithEmail({ email, password }));
    };

    return (
    <form onSubmit={handleSubmit}>
        <h3>Iniciar sesion con email</h3>
        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Loading..." : "Iniciar sesion"}
        </button>
        {error && <p>{error}</p>}
    </form>
    );
};

export default LoginEmail;
