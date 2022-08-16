import React, { useState } from 'react';
import './login.css';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function logar() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert('DEU CERTO');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('NÃO DEU CERTO');
            });
    }

    return (
        <div className='login-content d-flex align-items-center'>
            <form className='mx-auto'>
                <h1 className="h3 mb-3 fw-normal text-center text-white fw-bold">Login</h1>

                <div className="form-floating my-2">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="Email" />
                    <label for="floatingInput">Email</label>
                </div>

                <div className="form-floating my-2">
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                    <label for="floatingPassword">Senha</label>
                </div>

                <button onClick={logar} className="w-100 btn btn-lg btn-login" type="button">Logar</button>

                <div className='msg-login text-white text-center my-5'>
                    <span><strong>Login realizado.</strong> Você está conectado.</span>
                    <br />
                    <span><strong>Ocorreu um erro.</strong> Verifique se a senha ou o usuário está correto.</span>
                </div>

                <div className='opcoes-login mt-5 text-center'>
                    <a href="#" className='mx-2'>Recuperar Senha</a>
                    <a href="#" className='mx-2'>Cadastre-se</a>
                </div>
            </form>
        </div>
    );
}

export default Login;