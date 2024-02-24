function Meio() {
    return (
        <main class='flex pt-[10%] w-[100%] h-[auto]'>
            <section className="hero">
                <div className="hero-text flex flex-col text-center">
                    <h4 class='font-bold text-purple-700 text-lg'>Welcome to the Purple World</h4>
                    <h1 class=' font-bold text-red-700 text-lg'>Mais que um sabor</h1>
                    <h2 class='font-bold text-purple-700 text-xl'>Uma vida</h2>
                </div>

                <div className="hero-img w-[100%] h-[100vh]">
                    <img class='flex w-[100%]' src="./src/assets/png-meio.png" alt="" />
                    <button class='flex  relative left-[37%] top-[5%] border-2 px-[3%] py-[3%] border-red-700 rounded-[10%] hover:scale-[1.2]' type="submit" className="btn-pedido" id="chamaform">Peça o seu</button>
                </div>
            </section>
        </main>
    )
}

export default Meio