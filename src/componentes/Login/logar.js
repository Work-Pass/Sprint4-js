// Função para fazer login
function logar() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var savedUsername = localStorage.getItem("username");
    var savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
        localStorage.setItem("logado", "true");
        alert("Index bem sucedido!");
    } else {
        alert("Nome de usuário ou senha incorretos!");
    }
}
export default logar