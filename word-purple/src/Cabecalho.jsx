function Cabecalho() {
    return (
        <header>
            <div className="logo">
                <img src="" alt="" />

                <h1><span>P</span>urple<span>W</span>orld</h1>

            </div>

            <nav className="navigation">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#">Menu</a></li>
                    <li className="nav-item"><a href="#">Promotions</a></li>
                    <li className="nav-item"><a href="#">Suport</a></li>
                </ul>
            </nav>

            <div className="icones">
                <a href="#" className="car"><ion-icon name="search-outline"></ion-icon></a>
                <a href="#" className="search"><ion-icon name="lock-closed-outline"></ion-icon></a>
            </div>
        </header>
    )
}

export default Cabecalho