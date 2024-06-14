import curve from './assets/curveGallery.svg';
import mail from './assets/mail.svg';
import github from './assets/githubIcon2.svg';
import externalLink from './assets/externalLink.svg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Contact() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <section id='contact' className="relative h-svh w-screen bg-[#bed3e7]">
                <img className='absolute w-screen md:-top-[120px] ' src={curve} alt="" />
                <div className="container mx-auto pt-20 px-10 flex items-start justify-center flex-col h-full gap-10">
                    <h2
                        data-aos="fade-right"
                        data-aos-delay="100"
                        className="relative capitalize text-[#2a3362] text-2xl lg:text-7xl font-bold">
                        Whether it's a project or just friendly chat, let's connect.
                        <span className="absolute top-0 left-0 transform -translate-x-[50%] translate-y-[-10%] -rotate-[45deg] capitalize text-xl lg:text-3xl font-[sacramento] text-[#3e4651]">
                            Say Hello
                        </span>
                    </h2>

                    <div
                        data-aos="fade-right"
                        data-aos-delay="200">
                        <a href="https://github.com/vAbdullh/" className='md:text-5xl flex flex-row items-center'>

                            <img className='w-[50px] md:w-[100px]' src={github} alt="" />
                            <p className=' text-[#353744]'>@vabdullh
                                <img src={externalLink} alt="External Link logo" className="w-[15px] md:w-[20px] ml-1 md:ml-5 inline" />

                            </p>

                        </a>
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-delay="300">
                        <a href="mailto:Abdullah.mansour2@icloud.com" className='text-[15px] md:text-5xl flex flex-row items-center'>

                            <img className='w-[50px] md:w-[90px] mr-1 md:mr-5' src={mail} alt="" />
                            <p className='text-[#353744]'>Abdullah.mansour2@icloud.com
                                <img src={externalLink} alt="External Link logo" className="w-[15px] md:w-[20px] ml-1 md:ml-5 inline" />

                            </p>

                        </a>
                    </div>

                </div >

                <img className='absolute bottom-0 md:-bottom-20 scale-[-1]' src={curve} alt="" />
            </section>

        </>
    );
}
export default Contact;