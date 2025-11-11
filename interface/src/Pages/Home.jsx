import React, { useEffect, useState } from "react";

import Container from "../Components/Container";
import Footer from "../Components/Footer";
import Tags from "../Components/Tags";

import { AiFillTool, AiOutlineDocker, AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight, BiSolidMessageSquareDetail } from "react-icons/bi";
import { BsFillFileEarmarkCodeFill, BsTwitterX } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { GiProgression } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
// import { ImDatabase } from "react-icons/im";
import { GrInsecure } from "react-icons/gr";
import { LiaCodeSolid, LiaGlobeAmericasSolid, LiaLaptopCodeSolid } from "react-icons/lia";
import { TbBrandReact } from "react-icons/tb";
import { WiStars } from "react-icons/wi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaServer } from "react-icons/fa6";
import { PiCodeDuotone } from "react-icons/pi";

export default function Home() {
    const slides = [
        {
            title: "Technical Member in AI Club",
            description:
                "A club at KAU under FCIT",
            link: "https://x.com/fcit_aiclub",
        },
        {
            title: "Technical Member and Website Development leader with Protothon",
            description:
                "Prototyping hackathon",
            link: "https://x.com/Protothon_sa",
        },
    ];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <p className="text-2xl pt-5 text-center text-primary">
                &lt;
                <span className="font-pixel px-1 text-3xl  text-white">Abdullah </span>
                &#47;&gt;
            </p>
            <div className="grid justify-center items-center grid-cols-home-sm sm:grid-cols-home-md lg:grid-cols-home-lg auto-rows-home lg:auto-rows-home-lg gap-2.5 md:gap-4 py-5 md:pb-10 md:pt-2  text-mint-white">
                <Header />
                <Profile />
                <Projects />
                <Skills />
                <Learning />
                <Contact />

                <Container divider={true} className="col-span-2 sm:col-span-3 order-2 relative grd place-items-center">
                    {/* Header */}
                    <div className="absolute top-0 left-0 p-1 w-full text-center capitalize">
                        <span className="flex gap-1 justify-center items-center text-xs text-gray-400">
                            <IoSettingsOutline size={16} className="text-primary animate-spin" />
                            Working on
                        </span>
                        <p className="text-sm">I'm working on</p>
                    </div>

                    {/* Slider content */}
                    <div className="my-11 w-full flex flex-col text-center transition-all duration-500 pb-5">
                        <p className="text-[10px] lg:text-xl">{slides[current].title}</p>
                        <p className="font-thin text-white/50 text-[10px] lg:text-base">
                            {slides[current].description}
                        </p>
                        <a
                            href={slides[current].link}
                            className="text-primary flex gap-2 justify-center items-center mt-1 text-xs"
                        >
                            <BsTwitterX className="text-primary" /> more info
                        </a>
                    </div>

                    <div className="flex items-center flex-row gap-4 absolute bottom-0 mx-auto left-1/2 -translate-x-1/2">
                        <button
                            onClick={prev}
                            className="bg-white/10 hover:bg-white/20 p-1 rounded-full"
                        >
                            <BiChevronLeft size={20} />
                        </button>
                        <div className="flex justify-center gap-2">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${current === i ? "bg-primary" : "bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="bg-white/10 hover:bg-white/20 p-1 rounded-full"
                        >
                            <BiChevronRight size={20} />
                        </button>
                    </div>
                </Container>

            </div >
            <Footer />
        </div>
    );
}
const Header = () => {
    return (
        <>
            <Container>
                <div className="flex flex-col items-center justify-center gap-1 h-full">
                    <span className="text-center min-w-full grid place-items-center uppercase h-16 text-4xl">
                        it
                    </span>
                    <div className="w-32 flex gap-3 justify-center items-center border2 border-2 py-1 px-3 rounded-full border-light-black">
                        <GrTechnology className="text-primary" size={16} />
                        <span className="text-xs capitalize">Major</span>
                    </div>
                </div>
            </Container>
            <Container className="overflow-hidden p-0 hidden sm:inline-block">
                <iframe
                    title="gif-t-rex-jump"
                    src="https://giphy.com/embed/5Akl9i8YiMbl5RFvGO"
                    className="giphy-embed w-full h-full"
                ></iframe>
            </Container>
            <Container>
                <div className="flex flex-col items-center justify-center gap-1 h-full">
                    <span className="text-center min-w-full grid place-items-center uppercase h-16 text-xl md:text-2xl">
                        web developer
                    </span>
                    <div className="w-32 flex gap-3 justify-center items-center border2 border-2 py-1 px-3 rounded-full border-light-black">
                        <LiaLaptopCodeSolid className="text-primary" size={16} />
                        <span className="text-xs capitalize">field</span>
                    </div>
                </div>
            </Container>
        </>
    )
}
const Profile = () => {
    return (
        <Container className="p-[1.5px] relative border- lg:order-1 col-span-2 sm:col-span-3 flex flex-col justify-center sm:justify-evenly  gap-3 row-span-2">

            <span className=" animate-flip before:animate-rotate absolute inset-0 overflow-hidden rounded-10 [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,#483d8b_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%] w-full h-full" />
            <span className="absolute inset-[1px] rounded-10 bg-black transition-colors duration-200" />

            <div className="bg-black2 p-2 z-10 flex flex-col justify-center sm:justify-evenly gap-3 h-full rounded-[8px] ">
                <div className="flex flex-col gap-1">
                    <div className="w-fit flex gap-3 justify-center items-center border2 border-2 py-1 px-3 rounded-full border-light-black capitalize text-xs">
                        <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.7)]"></span>
                        available
                    </div>
                    <h1 className="capitalize lg:text-3xl">Abdullah Manssour</h1>
                    <p className="text-sm lg:text-base">
                        I'm a<span className="text-primary"> developer</span>
                    </p>
                </div>
                <Tags />
                <div className="z-10 w-full grid grid-cols-2 lg:grid-cols-1 gap-2">
                    <a href="mailto:contact@abdullh.tech" target="_blank" rel="noopener noreferrer" >
                        <button className="bg-primary flex justify-center items-center gap-1 text-sm w-full rounded-10 h-10 lg:h-12">
                            <BiSolidMessageSquareDetail />
                            Message me
                        </button>
                    </ a>
                    <a href="https://x.com/devabdullh" target="_blank" rel="noopener noreferrer">
                        <button className="bg-primary flex justify-center items-center gap-1 text-sm w-full rounded-10 h-10 lg:h-12">
                            <BsTwitterX />
                            Tweet Me
                        </button>
                    </a>
                </div>
            </div>
        </Container>
    )
}
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch data here inside try catch

        setProjects(
            [
                {
                    "id": 1,
                    "name": "Protothon",
                    "link": "https://protothon.info/",
                },
                {
                    "id": 2,
                    "name": "RoboCup Website",
                    "link": "https://robo-cup-ecec.web.app/",
                },
                {
                    "id": 3,
                    "name": "Baseratk website",
                    "link": "http://baseratk.com",
                },
            ]

        )
        setLoading(false);
    }, []);

    return (
        <Container className='row-span-2 col-span-2' divider={true}>
            <div className="absolute top-0 left-0 p-1 w-full text-center capitalize">
                <span className="flex gap-1 justify-center items-center text-xs  text-gray-400"><GoProjectRoadmap className="text-primary" />projects</span>
                <p className="text-sm">visual portfolio</p>
            </div>
            <ul className="flex flex-col justify-end h-full mt-1 pt-11 capitalize text-[10px] lg:text-base">
                {loading ? (
                    <div className="flex justify-center items-center gap-2 flex-grow">
                        <span className="text-lg">loading</span>
                        <AiOutlineLoading3Quarters className="text-primary animate-spin duration-75" />
                    </div>
                ) : (
                    projects.map((project) => (
                        <ProjectBox
                            key={project.id}
                            name={project.name}
                            link={project.link}
                            repo={project.repo}
                        />
                    ))
                )}
            </ul>
        </Container>
    )

}
const ProjectBox = ({ name, link, repo }) => {
    return (
        <li className="flex-grow flex items-center justify-between gap-3 border mt-2 border-light-black bg-black2 p-1 md:p-2 rounded-10">
            <div className='flex items-center gap-3 '>
                <div className="bg-black1 p-2 rounded-md border border-light-black ">
                    <LiaCodeSolid className="text-primary h-full w-full" />
                </div>
                <span className="max-w-36">{name}</span>
            </div>
            <div className='flex gap-3 min-w-20'>
                <div className='flex gap-3 justify-end items-end flex-1'>
                    {repo &&
                        <a href={repo} className="bg-black1 p-2 rounded-md border border-light-black flex items-center justify-center" target="_blank" rel="noopener noreferrer" title="repo">
                            <BsFillFileEarmarkCodeFill className='text-primary h-full w-full' />
                        </a>
                    }
                    <a href={link} className="bg-black1 p-2 rounded-md border border-light-black flex items-center justify-center">
                        <LiaGlobeAmericasSolid className='text-primary h-full w-full' />
                    </a>
                </div>

            </div>
        </li>

    )
}

const Skills = () => {
    const skills = ["react", "tailwindCSS", "firebase", "expressJS", "git"]

    return <Container className='row-span-2' divider={true}>
        <div className="absolute top-0 left-0 p-1 w-full text-center capitalize">
            <span className="flex gap-1 justify-center items-center text-xs  text-gray-400"><FaTools className="text-primary" />tech stack</span>
            <p className="text-sm">what I excel at</p>
        </div>
        <ul className="flex flex-col justify-end h-full mt-1 pt-11 capitalize text-[10px] lg:text-base">
            {skills.map((skill) => (
                <li className="flex-grow flex items-center gap-3 border mt-2 border-light-black bg-black2 p-1 md:p-2 rounded-10">
                    <div className="bg-black1 p-2 rounded-md border border-light-black ">
                        <AiFillTool className="text-primary h-full w-full" />
                    </div>
                    <span>{skill}</span>
                </li>
            ))}

        </ul>
    </Container>
}
const Learning = () => {

    return (
        <Container className='order-2 row-span-2' divider={true}>
            <div className="absolute top-0 left-0 p-1 w-full text-center capitalize">
                <span className="flex gap-1 justify-center items-center text-xs  text-gray-400"><GiProgression className="text-primary" />on progress</span>
                <p className="text-sm"> i'm learning now</p>
            </div>
            <ul className="flex flex-col justify-end h-full mt-1 pt-11 capitalize text-[10px] lg:text-base">
                <li className="flex-grow flex items-center gap-3 border  border-light-black bg-black2 p-1 md:p-2 rounded-10">
                    <div className="bg-black1 p-2 rounded-md border border-light-black ">
                        <PiCodeDuotone className="h-full w-full text-primary" />
                    </div>
                    <span>NextJS</span>
                </li>
                <li className="flex-grow flex items-center gap-3 border mt-2 border-light-black bg-black2 p-1 md:p-2 rounded-10">
                    <div className="bg-black1 p-2 rounded-md border border-light-black ">
                        <AiOutlineDocker className="h-full w-full text-primary" />
                    </div>
                    <span>Docker</span>
                </li>
                <li className="flex-grow flex items-center gap-3 border mt-2 border-light-black bg-black2 p-1 md:p-2 rounded-10">
                    <div className="bg-black1 p-2 rounded-md border border-light-black ">
                        <FaServer className="h-full w-full text-primary" />
                    </div>
                    <span>Cloud</span>
                </li>
                <li className="flex-grow flex items-center gap-3 border  border-light-black bg-black2 p-1 md:p-2 rounded-10">
                    <div className="bg-black1 p-2 rounded-md border border-light-black ">
                        <PiCodeDuotone className="h-full w-full text-primary" />
                    </div>
                    <span>Backend</span>
                </li>
            </ul>
        </Container>
    )
}
const Contact = () =>
(<Container className="order-2 capitalize flex flex-col justify-center items-center gap-4 col-span-2 row-span-2 text-center">
    <span className="rounded-full p-1 grid place-items-center h-16 w-16 bg-light-black">
        <WiStars className="text-primary h-full w-full" />
    </span>
    <h2>let's work together</h2>
    <p className="text-gray-400 text-xs lg:text-base">let's transform your ideas into reality</p>
    <div className="w-full flex flex-col gap-2">
        <a href="mailto:contact@abdullh.tech" target="_blank" rel="noopener noreferrer">
            <button className="bg-light-black border border-black1 flex justify-center items-center gap-1 text-sm w-full rounded-10 h-12">
                <BiSolidMessageSquareDetail />
                Contact me
            </button>
        </ a>
        <a href="https://x.com/devabdullh" target="_blank" rel="noopener noreferrer">
            <button className="bg-light-black border border-black1 flex justify-center items-center gap-1 text-sm w-full rounded-10 h-12">
                <BsTwitterX />
                Tweet Me
            </button>
        </a>
    </div>
</Container>)