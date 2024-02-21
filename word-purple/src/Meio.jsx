function Meio() {
    return (
        <main>
            <section className="hero w-[100%] h-[100%] block flex-col items-center justify-center mt-[2px] font-semibold pt-[70px] px-[10px] md:pt-[20%] ">
                <div className="hero-text w-[100%]">
                    <h4 class=' text-red-700 text-center text-2xl md:text-4xl'>Welcome to the Purple World</h4>
                    <h1 class='text-center text-xl text-purple-900 md:text-3xl '>Mais que um sabor</h1>
                    <h2 class='text-center text-2xl text-red-700 md:hidden'>Uma vida</h2>
                </div>

                <div className="hero-img w-[100%] h-[100vh]">
                    <img class='md:size-[90%] md:relative md:left-[8%] md:z-[-1]' src="./src/assets/png-meio.png" alt="" />
                    <button type="submit" className="btn-pedido absolute left-[36%] mt-[20px] py-[10px] px-[20px] md:relative md:left-[43%] md:mb-[30px] text-purple-900 font-bold bg-white border-2 border-purple-900 rounded-[10px] hover:scale-[1.1] transition-[0.5s] cursor-pointer" id="chamaform">Peça o seu</button>
                </div>
            </section>
        </main>
    )
}

export default Meio