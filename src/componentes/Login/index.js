import CampoTexto from '../CampoTexto'
import registrar from './registrar'
import {LoginContainer, LoginForm} from "./LoginStyles";
import logout from "./logout";
import logar from "./logar";
const Login = () => {
    return (
        <LoginContainer id="login">
            <LoginForm>
                <h2>Preencha os dados para criar uma conta</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" id="username" name="username" />
                <CampoTexto label="Senha" placeholder="Digite sua senha" type="password" id="password" />
                <CampoTexto label="Email" placeholder="Digite o endereço de email" />
                <button type="button" onClick={() => registrar()} className="btn btn-dark rounded-4 text-light">
                    Criar uma Conta
                </button>
            </LoginForm>

            <LoginForm>
                <h2>Ou faça Login</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" id="login-username" name="login-username" />
                <CampoTexto label="Senha" placeholder="Digite sua senha" id="login-password" name="login-password" />
                <button type="button" onClick={() => logar()} className="btn btn-dark rounded-4 text-light">
                    Logar
                </button>
                <button type="button" onClick={() => logout()} className="btn btn-dark rounded-4 text-light">
                    Logout
                </button>
            </LoginForm>
        </LoginContainer>
    );
};
export default Login