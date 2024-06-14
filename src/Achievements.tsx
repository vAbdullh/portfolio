import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import jsCertificate from '../public/jsCertificate.jpg'
import Excellence from '../public/Excellence.jpg'


const Achievements = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <section id='achievements' className="relative z-[32] h-svh w-screen bg-[#434a55]">
                <div className="container mx-auto h-full">
                    <div className="flex flex-col items-center justify-center gap-10 h-full">
                        <h2
                            data-aos="fade-right"
                            data-aos-delay="100"
                            className="relative capitalize text-white text-3xl lg:text-7xl font-bold">
                            Certified Achievements
                            <span className="absolute top-0 left-0 transform -translate-x-[50%] translate-y-[-10%] -rotate-[45deg] capitalize text-xl lg:text-3xl font-[sacramento] text-[#d7746c]">
                                Certificates
                            </span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-2 md:gap-20">
                            <div>
                                <img
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    className='md:mb-5 w-[300px] md:w-fit' src={jsCertificate} alt="JavaScript by Cisco Network Academy" />
                                <p
                                    data-aos="fade-down"
                                    data-aos-delay="500"
                                    className='text-[#faea97] text-[10px] text-center md:text-2xl capitalize'
                                >JavaScript by Cisco Network Academy </p>
                            </div>
                            <div>
                                <img
                                    data-aos="fade-up"
                                    data-aos-delay="1000"
                                    className='md:mb-5 w-[300px] md:w-fit' src={Excellence} alt="Certificate of Excellence by King Abdulaziz University" />
                                <p
                                    data-aos="fade-down"
                                    data-aos-delay="1000"
                                    className='text-[#faea97] text-[10px] text-center md:text-2xl capitalize'
                                >Certificate of Excellence by King Abdulaziz University </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Achievements;