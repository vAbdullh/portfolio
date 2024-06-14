import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import react from './assets/react.svg';
import tailwind from './assets/tailwind.svg';
import "./index.css"

const Footer = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className="relative z-[32] h-svh w-screen overflow-x-hidden bg-[#434a55]">
            <div className="container mx-auto flex px-5 flex-col items-center justify-center h-full gap-10">
                <div className="md:flex md:flex-row md:flex-nowrap flex-wrap justify-center items-start gap-20 w-full">
                    <p
                        data-aos="fade-right"
                        data-aos-delay='400'
                        className="text-white w-full text-center md:text-left md:text-2xl md:w-[500px]">This portfolio project is not just a showcase; it's a creative implementation of my skills, frameworks, libraries, and tools in real-world applications.</p>
                    <div
                        data-aos="flip-up"
                        data-aos-delay='100'
                        className="border-t-2 md:border-l-2 my-10 md:h-full"></div>
                    <div
                        data-aos="fade-left"
                        data-aos-delay='700'>
                        <p className="text-white text-center md:text-left md:text-2xl w-full md:w-[500px] mb-5">This webpage is built using a blend of innovative frameworks, versatile libraries, and powerful tools:</p>
                        <div className="flex flex-row items-center justify-center gap-10">
                            <a href="http://tailwindcss.com/">
                                <img src={tailwind} alt="" className="w-[50px]" />
                            </a>
                            <a href="http://https://michalsnik.github.io/aos/">
                                <span className='uppercase font-bold text-[#323961] text-4xl'>aos</span>
                            </a>
                            <a href="http://https://react.dev/">
                                <img src={react} alt="" className="w-[50px] react-circle" />
                            </a>
                        </div>
                    </div>
                </div>
                <p
                    data-aos="zoom-in-up"
                    data-aos-delay='1000'
                    className="text-center text-white">Crafted with passion and powered by creativity.</p>
            </div>
        </section>
    );
}
export default Footer;