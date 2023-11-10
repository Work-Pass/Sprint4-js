import CampoTexto from '../CampoTexto'
import './Login.css'
import { logar, registrar, logout } from './registrar'

const Login = () => {
    return (
        <section className="Login" id={"login"}>
            <form>
                <h2>Preencha os dados para criar uma conta</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" id="username" name="username" />
                <CampoTexto label="Senha" placeholder="Digite sua senha" type="password" id="password" />
                <CampoTexto label="Email" placeholder="Digite o endereço de email" />
                <button type="button" onclick="registrar()" className="btn btn-dark rounded-4 text-light">Criar uma Conta</button>
            </form>

            <form>
                <h2>Ou faça Login</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" id="login-username" name="login-username" />
                <CampoTexto label="Senha" placeholder="Digite sua senha" id="login-password" name="login-password" />
                <button type="button" onclick="logar()" className="btn btn-dark rounded-4 text-light">Logar</button>
                <button type="button" onclick="logout()" className="btn btn-dark rounded-4 text-light">Logout</button>
            </form>

        </section>
    )
}

export default Login