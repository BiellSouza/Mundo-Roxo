function Cabecalho() {
    return (
        <header className="cabecalho flex justify-between items-center py-[5px] shadow-md w-[100%] fixed bg-white md:h-[8vh]">
            <div className="logo flex items-center ">
                <img class='hidden md:hidden' src="./src/assets/png-logo.png" alt="" />

                <h1 class='hidden md:block relative left-[10px] text-[25px] md:font-bold'><span class='text-purple-700'>P</span>urple<span class='md:text-purple-700'>W</span>orld</h1>

            </div>  

            <nav className="navigation flex gap-[90px]">
                <ul className="nav-list flex gap-[10px] md:gap-[30px] md:pl-[30px] text-[25px] cursor-pointer">
                    <li className="nav-item text-purple-800 hover:text-red-500 transition-[0.2s] cursor-pointer"><a href="#">Home</a></li>
                    <li className="nav-item text-purple-800 hover:text-red-500 transition-[0.2s] cursor-pointer"><a href="#">Menu</a></li>
                    <li className="nav-item text-purple-800 hover:text-red-500 transition-[0.2s] cursor-pointer"><a href="#">Promotions</a></li>
                    <li className="nav-item text-purple-800 hover:text-red-500 transition-[0.2s] cursor-pointer"><a href="#">Suport</a></li>
                </ul>
            </nav>

            <div className="icones flex mr-[20px] pt-[6px] pl-[5px] text-purple-800">
                <a href="#" className="car ml-[5px] relative left-[2px] md:mr-[20px] md:text-[25px] hover:text-red-800 transition-[0.2s] cursor-pointer"><ion-icon name="search-outline"></ion-icon></a>
                <a href="#" className="search ml-[5px] relative left-[10px] md:text-[25px] hover:text-red-800 transition-[0.2s] cursor-pointer"><ion-icon name="lock-closed-outline"></ion-icon></a>
            </div>
        </header>
    )
}

export default Cabecalho