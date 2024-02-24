function Cabecalho() {
    return (
        <header className="cabecalho shadow-sm w-[100%] h-[8vh] flex items-center justify-between">
            <div className="logo">
                <img class='hidden sm:hidden' src="./src/assets/png-logo.png" alt="" />

                <h1 class='font-bold hidden text-red-700'><span class='text-purple-700'>P</span>urple<span class='text-purple-700'>W</span>orld</h1>

            </div>  

            <nav className="navigation">
                <ul className="nav-list font-bold flex flex-row relative right-[20%] gap-[8%] hover:text-red-700 transition-[0.5s] ">
                    <li className="nav-item text-purple-800 hover:text-red-500 transition-[0.2s] cursor-pointer"><a href="#">Home</a></li>
                    <li className="nav-item text-purple-800 hover:text-red-500 transition-[0.2s] cursor-pointer"><a href="#">Menu</a></li>
                    <li className="nav-item text-purple-800 hover:text-red-500 transition-[0.2s] cursor-pointer"><a href="#">Promotions</a></li>
                    <li className="nav-item text-purple-800 hover:text-red-500 transition-[0.2s] cursor-pointer"><a href="#">Suport</a></li>
                </ul>
            </nav>

            <div className="icones flex relative right-[6%] top-[5%] text-md gap-[30%] text-purple-700 hover:text-red-700 transition-[0.5s]">
                <a href="#" className="car "><ion-icon name="search-outline"></ion-icon></a>
                <a href="#" className="search"><ion-icon name="lock-closed-outline"></ion-icon></a>
            </div>
        </header>
    )
}

export default Cabecalho