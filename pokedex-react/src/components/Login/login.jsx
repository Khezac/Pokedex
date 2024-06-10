import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassaword] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [loggedIn, setLogged] = useState(false);
    const navigate = useNavigate();

    const handleUserChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassaword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === 'lcs97' && password === '1234') {
            setLogged(true);
            console.log("Logado")
            navigate('../pokedex')
        } else {
            setLogged(false);
            console.log("erro ao logar");
        }
        setUsername('');
        setPassaword('');
        setSubmitted(true);
    };

    useEffect(() => {
        if (submitted) {
          //notificacao toastfy
            //console.log(loggedIn ? 'Usuário logado com sucesso.' : 'Falha no login do usuário.');
          setSubmitted(false);
        }
      }, [submitted, loggedIn]);


    return (
        <div className={styles.container}>
            <div className={styles.containerlogin}>
                <form className={styles.loginForm} onSubmit={handleSubmit}>

                    <h1>Acesse o sistema</h1>
                    <div>
                    <input
                        type="username"
                        name="username"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={handleUserChange}
                    />
                    </div>
                    <div>
                    <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*******"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <button type="submit" title="Login">Start</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Login