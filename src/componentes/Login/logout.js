// Função para fazer logout
function logout() {
    localStorage.setItem("logado", "false");
    alert("Logout bem sucedido!");
}
export default logout