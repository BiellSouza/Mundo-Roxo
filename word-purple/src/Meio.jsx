function Meio() {
    return (
        <main class='flex pt-[10%] w-[100%] h-[auto] lg:pt-[0%]'>
            <section className="hero lg:flex flex-row items-center">
                <div className="hero-text flex flex-col text-center lg:relative lg:bottom-[10%]">
                    <h4 class='font-bold text-purple-700 text-lg sm:text-[200%] lg:text-[300%] lg:leading-[100%]'>Welcome to the Purple World</h4>
                    <h1 class=' font-bold text-red-700 text-lg sm:text-[190%] sm:pt-[3%]'>Mais que um sabor</h1>
                    <h2 class='font-bold text-purple-700 text-xl sm:pt-[3%] sm:text-[190%]'>Uma vida</h2>
                </div>

                <div className="hero-img w-[100%] h-[100vh] sm:h-[110vh] md:h-[130vh] lg:">
                    <img class='flex w-[100%] lg:w-[100%]' src="./src/assets/png-meio.png" alt="" />
                    <button class='flex relative left-[37%] top-[5%] border-2 px-[3%] py-[3%] sm:relative sm:left-[40%] md:left-[43%] lg:pr-[10%] lg:pl-[10%] lg:left-[30%] lg:rounded-[0%] border-red-700 rounded-[10%] hover:scale-[1.2] lg:hover:scale-[1.1]' type="submit" className="btn-pedido" id="chamaform">Peça o seu</button>
                </div>
            </section>
        </main>
    )
}

export default Meio