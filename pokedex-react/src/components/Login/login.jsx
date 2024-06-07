import { FaLock, FaUser } from "react-icons/fa"
import { useState } from "react"
import styles from "./styles.module.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassaword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerlogin}>
                <form className={styles.loginForm} onSubmit={handleSubmit}>

                    <h1>Acesse o sistema</h1>
                    <div>
                        <input type="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)} />
                        <FaUser className="icon" />
                    </div>
                    <div>
                        <input type="password" placeholder="Senha" onChange={(e) => setPassaword(e.target.value)} />
                        <FaLock className="icon" />
                    </div>

                    <button>Start</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Login