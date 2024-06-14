import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'
import projectImg from '../public/project1Img.jpg';
import project2Img from '../public/project2img.jpg';
import project3Img from '../public/project3img.jpg';
import arrow from './assets/btnArrow.svg';
import loading from './assets/loadingIcon.svg';
import curve from './assets/curveGallery.svg';

const Gallery = () => {
    const poject1link: string = "https://vabdullh.github.io/project1-ip-track/"

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section id='gallery' className="relative z-[32] h-svh w-screen bg-[#161a34]">
            <img className='absolute scale-[-1] -bottom-20' src={curve} alt="curve" />

            <div className="container mx-auto pt-[5em] grid gap-10 px-10">
                <h2
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="relative capitalize text-white text-3xl lg:text-7xl  font-bold">
                    visual porfolio
                    <span className="absolute top-0 left-0 transform -translate-x-[50%] translate-y-[-10%] -rotate-[45deg] capitalize text-xl lg:text-3xl font-[sacramento] text-[#d7746c]">
                        projects
                    </span>
                </h2>

                <div className="inline-grid md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-10">

                    <a href={poject1link}>
                        <div
                            data-aos="zoom-in-right"
                            data-aos-delay="500"

                            className="grid grid-cols-1 gap-5 w-[300px] md:w-[350px] ">
                            <div className="w-[300px] md:w-[350px] h-[180px]">
                                <img className="w-[350px] h-[180px]" src={projectImg} alt="" />
                            </div>
                            <h3 className='capitalize text-[#cfd8dc] text-xl font-bold'>IP Address Tracker</h3>
                            <p className='text-[#cfd8dc]'>
                                This project uses two APIs to create an IP Address Tracking app. Enter an IP address to get detailed location information, including city, region, and coordinates.
                            </p>
                        </div>
                    </a>
                    <a className='hidden md:inline' href={poject1link}>
                        <div
                            data-aos="zoom-in-right"
                            data-aos-delay="600"
                            className="grid grid-cols-1 gap-5 w-[350px] ">
                            <div className="w-[350px] h-[180px]">
                                <img className="w-[350px] h-[180px]" src={project2Img} alt="" />
                            </div>
                            <h3 className='capitalize text-[#cfd8dc] text-xl font-bold'>Weather template</h3>
                            <p className='text-[#cfd8dc]'>
                                This project provides a template for a Weather Tracking app. Enter a city name to get detailed weather information, including temperature, humidity, and rain percentage. The design includes a simple form to input the city name and a section to display the weather details.  </p>
                        </div>
                    </a> <a className='hidden 2xl:inline' href={poject1link}>
                        <div
                            data-aos="zoom-in-right"
                            data-aos-delay="700"
                            className="grid grid-cols-1 gap-5 w-[350px] ">
                            <div className="w-[350px] h-[180px]">
                                <img className="w-[350px] h-[180px]" src={project3Img} alt="" />
                            </div>
                            <h3 className='capitalize text-[#cfd8dc] text-xl font-bold'>WhatsApp Link Generator</h3>
                            <p className='text-[#cfd8dc]'>
                                This project allows you to create a WhatsApp link easily. Enter a phone number and a message to generate a link that opens a chat with the specified number and pre-filled message using a free WhatsApp API. </p>
                        </div>
                    </a>
                    <div className="flex items-center justify-center">
                        <a href="https://github.com/vAbdullh">
                            <button
                                data-aos="fade-right"
                                data-aos-delay="800"
                                className='text-2xl text-white bg-[#3e4651] hover:bg-[#353744] w-[200px] h-[50px] rounded-full'>Explore All
                                <img className='inline h-[25px] ml-2' src={arrow} alt="button arrow icon" /></button>
                        </a>
                    </div>
                </div>
                <div className="flex items-end gap-5">
                    <img
                        data-aos="zoom-in"
                        data-aos-delay="1000"
                        className='h-5 md:h-10 shadow-2xl loading-circle'
                        src={loading} alt="" />
                    <p
                        data-aos="fade-right"
                        data-aos-delay="1300"
                        className="text-[#faea97] capitalize text-[10px] md:text-3xl">
                        This section is under construction; database enhancements in progress.
                    </p>

                </div>


            </div>
        </section>
    );
}

export default Gallery;