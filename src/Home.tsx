import astronautProgrammer from "./assets/astronautProgrammer.svg";
import colorSplash from "./assets/colorSplash.svg";
import shapes from "./assets/homeMiniShapes.svg";

function Home() {
    return (
        <>
            <section className="h-svh w-screen relative bg-[#2a3362] z-[32]">
                <img
                    className="animate__animated animate__fadeIn absolute bottom-[10%] md:bottom-5 left-0 w-full"
                    src={shapes}
                    alt=""
                />
                <div className="container relative mx-auto pt-5 ">
                    <header className="flex flex-row justify-between p-3">
                        <div className="animate__animated animate__fadeInLeft">
                            <p className="text-[#d7746c] text-4xl">
                                &lt;<span className="text-[#ffffff]">Abdullah</span>/&gt;
                            </p>
                        </div>
                        <nav className="hidden lg:block">
                            <ul className="flex flex-row gap-5 text-[#ffffff] animate__animated animate__fadeInRight">
                                <li>
                                    <a className="text-xl hover:underline" href="#talents">
                                        Talents
                                    </a>
                                </li>
                                <li>
                                    <a className="text-xl hover:underline" href="#gallery">
                                        Gallery</a>
                                </li>
                                <li>
                                    <a className="text-xl hover:underline" href="#achievements">
                                        Achievements
                                    </a>
                                </li>
                                <li>

                                    <a className="text-xl hover:underline" href="#contact">
                                        Reach Out
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className="flex flex-row justify-between items-center gap-0 px-20 pl-10 min-h-[700px] w-full">

                        <div className="h-full flex flex-col justify-center items-start lg: w-[900px] gap-5 animate__animated animate__fadeInLeft">

                            <h1 className="font-black text-[#ffffff] text-6xl lg:text-9xl tracking-wider w-fit">

                                <span className="absolute top-0 left-0 transform -translate-x-[35%] translate-y-[5%] -rotate-[45deg] capitalize text-2xl lg:text-3xl font-[sacramento] text-[#d7746c]">
                                    m
                                </span>
                                Hi, I'm <br /> Abdullah
                            </h1>
                            <p className="text-[#d8d355] text-3xl lg:text-6xl w-full">

                                Creative frontend developer meets passionate IT student,
                                building beautiful interfaces.
                            </p>
                            <a href="#talents">
                                <button className="bg-[#141c32] hover:bg-[#192032] text-white py-4 px-5 rounded-full w-40">

                                    Explore more
                                </button>
                            </a>
                        </div>
                        <div className="relative svg-render h-full">

                            <img
                                className="animate__animated animate__fadeInRight absolute z-[32]"
                                src={colorSplash}
                                alt="color splash"
                            />
                            <img
                                className="hidden 2xl:inline animate__animated animate__fadeInRight w-[450px] relative z-[64]"
                                src={astronautProgrammer}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;
