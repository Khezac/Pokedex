import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Logo } from '../Logo/index.jsx'
import { getUsers } from "../../services/jsonSv/index.jsx";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [apiUsers, setApiUsers] = useState();
    const [username, setUsername] = useState("");
    const [password, setPassaword] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [loggedIn, setLogged] = useState(false);
    const navigate = useNavigate();

    async function getUsersData() {
        try{
            const results = await getUsers();
            setApiUsers(results.data);
        } catch {
            console.log("Erro ao requisitar usuários!");
        }
    }

    const handleUserChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassaword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getUsersData();
        if(apiUsers){
            if(apiUsers.find((element) => element.id == username && element.senha == password)){
                setLogged(true);
                navigate('../pokedex')
            } else {
                setLogged(false);
                toast.error("Credenciais inválidas!!!")
            }
        }
        setUsername('');
        setPassaword('');
        setSubmitted(true);
    };

    useEffect(() => {
        if (submitted) {
            //console.log(loggedIn ? 'Usuário logado com sucesso.' : 'Falha no login do usuário.');
          setSubmitted(false);
        }
        getUsersData()
      }, [submitted, loggedIn]);


    return (
        <div className={styles.container}>
            <Logo />
            <div className={styles.containerlogin}>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <ToastContainer/>
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