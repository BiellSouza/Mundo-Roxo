function Cabecalho() {
    return (
        <header className="cabecalho shadow-sm w-[100%] h-[8vh] flex items-center justify-between sm:h-[9vh] ">
            <div className="logo md:flex md:flex-row md:items-center md:w-[10%]">
                <img class='hidden sm:hidden md:block md:w-[50%] md:ml-[10%] ' src="./src/assets/png-logo.png" alt="" />

                <h1 class='font-bold hidden sm:block sm:pl-[30%] text-xl text-red-700 md:pl-[5%]'><span class='text-purple-700'>P</span>urple<span class='text-purple-700'>W</span>orld</h1>

            </div>  

            <nav className="navigation">
                <ul className="nav-list font-bold flex flex-row relative right-[20%] gap-[8%] sm:text-[110%] sm:relative sm:left-[2%] md:relative hover:text-red-700 transition-[0.5s] ">
                    <li className="nav-item text-purple-800 hover:text-red-500 transition-[0.2s] cursor-pointer"><a href="#">Home</a></li>
                    <li className="nav-item text-purple-800 hover:text-red-500 transition-[0.2s] cursor-pointer"><a href="#">Menu</a></li>
                    <li className="nav-item text-purple-800 hover:text-red-500 transition-[0.2s] cursor-pointer"><a href="#">Promotions</a></li>
                    <li className="nav-item text-purple-800 hover:text-red-500 transition-[0.2s] cursor-pointer"><a href="#">Suport</a></li>
                </ul>
            </nav>

            <div className="icones flex relative right-[6%] top-[5%] text-md gap-[30%] sm:text-[110%] md:gap-[50%] text-purple-700">
                <a href="#" className="car  hover:text-red-700 transition-[0.5s] "><ion-icon name="search-outline"></ion-icon></a>
                <a href="#" className="search  hover:text-red-700 transition-[0.5s]"><ion-icon name="lock-closed-outline"></ion-icon></a>
            </div>
        </header>
    )
}

export default Cabecalho