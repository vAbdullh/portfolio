import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import curve from './assets/curveTalents.png';
import html from './assets/html.svg';
import css from './assets/css.svg';
import js from './assets/js.svg';
import react from './assets/react.svg';
import nodejs from './assets/nodejs.svg';
import git from './assets/git.svg';
import linux from './assets/linux.svg';
import vscode from './assets/vscode.svg';
import nginx from './assets/nginx.svg';
import apache from './assets/apache.svg';
import github from './assets/github.svg';
import shapes from './assets/shapesTalents.png';
import arrow from './assets/doubleArrow.svg';



function Talents() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (<>
        <section id='talents' className="relative h-svh w-screen bg-[#161a34]">
            <img className='absolute z-[16] bottom-0 w-screen' src={shapes} alt="" />
            <img className='relative  z-[16] w-screen' src={curve} alt="curve" />
            <div className="container mx-auto md:translate-y-[-100px]">

                <div className="flex flex-col items-center gap-10 h-full relative -top-30">
                    <div>
                        <div className="flex flex-col">
                            <h2 className='relative capitalize text-white text-3xl lg:text-7xl font-bold w-fit'
                                data-aos="fade-right"
                                data-aos-delay="100"
                            >
                                <span className="absolute top-0 left-0 transform -translate-x-[50%] translate-y-[-10%] -rotate-[45deg] capitalize text-xl lg:text-3xl font-[sacramento] text-[#d7746c]">
                                    Talents
                                </span>
                                what I excel at</h2>
                            <ul className="grid grid-cols-4 md:grid-cols-7 flex-row flex-wrap gap-10 w-fit  pt-5">
                                <li><img
                                    data-aos="fade-down-right"
                                    data-aos-delay="500"
                                    className='h-[50px] md:h-[75px]' src={html} alt="" /></li>
                                <li><img
                                    data-aos="fade-down-right"
                                    data-aos-delay="600"
                                    className='h-[50px] md:h-[75px]' src={css} alt="" /></li>
                                <li><img
                                    data-aos="fade-down-right"
                                    data-aos-delay="700"
                                    className='h-[50px] md:h-[75px]' src={js} alt="" /></li>
                                <li><img
                                    data-aos="fade-down-right"
                                    data-aos-delay="800"
                                    className='h-[50px] md:h-[75px]' src={react} alt="" /></li>
                                <li><img
                                    data-aos="fade-down-right"
                                    data-aos-delay="900"
                                    className='h-[50px] md:h-[75px]' src={nodejs} alt="" /></li>
                                <li><img
                                    data-aos="fade-down-right"
                                    data-aos-delay="1000"
                                    className='h-[50px] md:h-[75px]' src={git} alt="" /></li>
                                <li><img
                                    data-aos="fade-down-right"
                                    data-aos-delay="1100"
                                    className='h-[50px] md:h-[75px]' src={linux} alt="" /></li>
                            </ul>
                        </div>

                        <div className="flex flex-col ">
                            <h2
                                data-aos="fade-right"
                                data-aos-delay="1200"
                                className='relative capitalize text-white text-3xl lg:text-7xl font-bold w-fit'>
                                <span className="absolute top-0 left-0 transform -translate-x-[50%] translate-y-[-10%] -rotate-[45deg] capitalize text-xl lg:text-3xl font-[sacramento] text-[#d7746c]">
                                    Tools
                                </span>
                                what I work with</h2>
                            <ul className="flex flex-wrap gap-10 w-full pt-5">
                                <li><img
                                    data-aos="fade-down-right"
                                    data-aos-delay="1300"
                                    className='h-[50px] md:h-[75px]' src={vscode} alt="" /></li>
                                <li><img
                                    data-aos="fade-down-right"
                                    data-aos-delay="1400"
                                    className='h-[50px] md:h-[75px]' src={nginx} alt="" /></li>
                                <li><img
                                    data-aos="fade-down-right"
                                    data-aos-delay="1500"
                                    className='h-[50px] md:h-[75px]' src={apache} alt="" /></li>
                                <li><img
                                    data-aos="fade-down-right"
                                    data-aos-delay="1600"
                                    className='h-[50px] md:h-[75px]' src={github} alt="" /></li>
                            </ul>

                            <p className="text-[#faea97] text-2xl md:text-3xl "
                                data-aos="fade-right"
                                data-aos-delay="2000"
                            >
                                Skills in constant growth mode.
                            </p>
                            <img
                                data-aos="zoom-in-up"
                                data-aos-delay='2100'
                                className='hidden lg:inline absolute bottom-0 right-[15%]'
                                src={arrow} alt="arrow icon" />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    </>);
}
export default Talents;