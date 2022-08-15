import React from 'react';
import './login.css';

function Login() {
    return (
        <div className='login-content d-flex align-items-center'>
            <form className='mx-auto'>
                <h1 className="h3 mb-3 fw-normal text-center text-white fw-bold">Login</h1>

                <div className="form-floating my-2">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Email" />
                    <label for="floatingInput">Email</label>
                </div>

                <div className="form-floating my-2">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                    <label for="floatingPassword">Senha</label>
                </div>

                <button className="w-100 btn btn-lg btn-login" type="submit">Sign in</button>

                <div className='msg-login text-white text-center my-5'>
                    <span><strong>Login realizado.</strong> Você está conectado.</span>
                    <br/>
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