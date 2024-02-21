function Meio() {
    return (
        <main>
            <section className="hero w-[100%] h-[100%] block flex-col items-center justify-center mt-[2px] font-semibold pt-[70px] px-[10px] md:pt-[20%] lg:pt-[10%] lg:flex lg:flex-row lg:items-center ">
                <div className="hero-text w-[100%] lg:w-[70%]">
                    <h4 class=' text-red-700 text-center text-2xl md:text-4xl lg:text-5xl lg:relative lg:bottom-[30px]'>Welcome to the Purple World</h4>
                    <h1 class='text-center text-xl text-purple-900 md:text-3xl lg:text-3x1 lg:relative lg:bottom-[20px] '>Mais que um sabor</h1>
                    <h2 class='text-center text-2xl text-red-700 md:hidden lg:block lg:text-5xl lg:relative lg:bottom-[15px]'>Uma vida</h2>
                </div>

                <div className="hero-img w-[100%] h-[100vh] lg:w-100% lg:h-auto">
                    <img class='md:size-[90%] md:relative md:left-[8%] md:z-[-1]' src="./src/assets/png-meio.png" alt="" />
                    <button type="submit" className="btn-pedido absolute left-[36%] mt-[20px] py-[10px] px-[20px] md:relative md:left-[43%] md:mb-[30px] lg:relative lg:bottom-[150px] lg:left-[-45%] text-purple-900 font-bold bg-white border-2 border-purple-900 rounded-[10px] hover:scale-[1.1] transition-[0.5s] cursor-pointer" id="chamaform">Peça o seu</button>
                </div>
            </section>
        </main>
    )
}

export default Meio