function Header() {
    return (
        <header className="container-fluid d-flex row bg-color-gray">
            <nav className="d-flex navbar navbar-expand-lg">
                <button className="btn"><i className="bi bi-list">Menu</i></button>
                <form className="d-flex me-auto p-2 rounded-4" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-secondary rounded-4" type="submit">Search</button>
                </form>
                <a href={'#login'} className="btn btn-secondary rounded-4 d-md-flex me-3">Começar</a>
                <a href={'#login'} className="btn btn-secondary rounded-4 d-md-flex me-3">Entrar</a>
            </nav>
        </header>
    )

}
export default Header