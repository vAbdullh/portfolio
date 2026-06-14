"use client";

import React from "react";
import Container from "@/components/Container";
import Typewriter from "@/components/Typewriter";
import Slider from "@/components/Slider";
import { GrTechnology } from "react-icons/gr";
import { LiaLaptopCodeSolid, LiaCodeSolid, LiaGlobeAmericasSolid } from "react-icons/lia";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BsLinkedin, BsFillFileEarmarkCodeFill, BsTwitterX } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { FaTools, FaCloud, FaShieldAlt, FaAward, FaUniversity, FaGoogle, FaAws, FaRobot } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { SiReact, SiNextdotjs, SiExpress, SiPostgresql, SiGit, SiGithub, SiMysql, SiRedis, SiDocker, SiGithubactions } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import Tags from "@/components/Tags";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PortfolioGrid() {
  const SKILLS = [
    { name: "React.js", icon: <SiReact className="text-primary w-4 h-4" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-primary w-4 h-4" /> },
    { name: "Express.js", icon: <SiExpress className="text-primary w-4 h-4" /> },

    { name: "SQL", icon: <SiMysql className="text-primary w-4 h-4" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-primary w-4 h-4" /> },
    { name: "Redis", icon: <SiRedis className="text-primary w-4 h-4" /> },

    { name: "Docker", icon: <SiDocker className="text-primary w-4 h-4" /> },
    { name: "CI/CD", icon: <SiGithubactions className="text-primary w-4 h-4" /> },
    { name: "Azure Cloud", icon: <VscAzure className="text-primary w-4 h-4" /> },

    { name: "Git", icon: <SiGit className="text-primary w-4 h-4" /> },
    { name: "GitHub", icon: <SiGithub className="text-primary w-4 h-4" /> },
  ];
  const PROJECTS = [
    { id: 1, name: "Protothon", link: "https://protothon.info/" },
    { id: 2, name: "RoboCup Website", link: "https://robocup.abdullh.tech/" },
  ];
  const LEARNING = [
    { name: "Cloud Engineering", icon: <FaCloud className="text-primary w-4 h-4" /> },
    { name: "Cybersecurity", icon: <FaShieldAlt className="text-primary w-4 h-4" /> },
    { name: "AWS", icon: <FaAws className="text-primary w-4 h-4" /> },
    { name: "Agentic AI", icon: <FaRobot className="text-primary w-4 h-4" /> }
  ];
  const COURSES = [
    { name: "Cybersecurity Specialization", company: "KAUST", year: "2026", logo: "/logos/kaust.png" },
    { name: "Introduction to Cybersecurity Essentials", company: "IBM", year: "2026", logo: "/logos/ibm.png" },
    { name: "Agile Project Management", company: "Google", year: "2026", logo: "/logos/google.png" },
    { name: "JavaScript Essentials", company: "Cisco", year: "2024", logo: "/logos/cisco.png" }
  ];
  const EXPERIENCES = [
    {
      role: "Research Assistant",
      company: "King Abdulaziz Univ. - Contract",
      date: "09/2024 - 05/2025",
      tech: ["Express.js", "PostgreSQL", "Docker", "RabbitMQ"]
    },
    {
      role: "Team Leader & Frontend Dev",
      company: "Baserakt - Intern",
      date: "07/2024 - 11/2025",
      tech: ["React.js", "FastAPI", "Tailwind", "ClickUp"]
    },
    {
      role: "Software Engineer Intern",
      company: "WAKI - Intern",
      date: "06/2025 - 08/2025",
      tech: ["NestJS", "Jira", "Bitbucket", "Zoho"]
    },
    {
      role: "Fullstack Web Developer",
      company: "Protothon KAU - Contract",
      date: "07/2025 - 01/2026",
      tech: ["Next.js", "PostgreSQL", "Supabase"]
    },
    {
      role: "Web Developer",
      company: "RoboCup 2025 Event - Volunteering",
      date: "2024 - 2025",
      tech: ["React.js", "NoSQL", "Tailwind", "Firebase"]
    }
  ];
  return (
    <div className="grid justify-center items-center grid-cols-home-sm sm:grid-cols-home-md xl:grid-cols-home-lg auto-rows-home xl:auto-rows-home-lg gap-2.5 md:gap-4 py-5 md:pb-10 md:pt-2 text-mint-white">

      {/* Major — sm:order-1  lg:order-1 */}
      <Container className="order-1 lg:order-1 entry-card-2">
        <div className="flex flex-col items-center justify-center gap-2 h-full py-2">
          <span className="text-center min-w-full grid place-items-center uppercase h-14 text-4xl font-extrabold tracking-wider text-white">
            it
          </span>
          <div className="w-28 flex gap-2 justify-center items-center border border-white/10 bg-white/5 py-1 px-2.5 rounded-full">
            <GrTechnology className="text-primary" size={14} />
            <span className="text-[10px] uppercase font-bold tracking-wider text-white/70">Major</span>
          </div>
        </div>
      </Container>

      {/* GIF — sm:order-2  lg:order-2  (hidden on xs) */}
      <Container className="order-2 lg:order-2 overflow-hidden p-0 hidden sm:inline-block entry-card-3">
        <iframe
          title="gif-t-rex-jump"
          src="https://giphy.com/embed/5Akl9i8YiMbl5RFvGO"
          className="w-full h-full border-0 pointer-events-none opacity-80 hover:opacity-100 transition-opacity duration-300"
        ></iframe>
      </Container>

      {/* Field — sm:order-3  lg:order-3 */}
      <Container className="order-3 lg:order-3 entry-card-4">
        <div className="flex flex-col items-center justify-center gap-2 h-full py-2">
          <span className="text-center min-w-full grid place-items-center uppercase h-14 text-[13px] md:text-sm font-extrabold tracking-wider leading-tight px-1 text-white">
            software developer
          </span>
          <div className="w-28 flex gap-2 justify-center items-center border border-white/10 bg-white/5 py-1 px-2.5 rounded-full">
            <LiaLaptopCodeSolid className="text-primary" size={14} />
            <span className="text-[10px] uppercase font-bold tracking-wider text-white/70">Field</span>
          </div>
        </div>
      </Container>

      {/* Profile — sm:order-4  lg:order-6 */}
      <Container className="col-span-2 sm:col-span-3 row-span-2 order-4 lg:order-6 flex flex-col justify-center sm:justify-evenly gap-3">
        <div className="flex flex-col gap-2">
          <h1 className="capitalize lg:text-3xl">Abdullah Alhalwani</h1>
          <p className="text-sm lg:text-base min-h-[24px]">
            I'm a <Typewriter
              words={["Full-Stack Web Developer", "Backend Developer", "Software Engineer", "Technical Lead"]}
              className="text-primary font-bold"
            />
          </p>
          <Badge variant="outline" className="w-fit gap-2 border-white/10 bg-white/5 text-white/80 capitalize text-[10px] sm:text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            available
          </Badge>
        </div>
        <Tags />
        <div className="w-full flex flex-col gap-2 mt-1">
          <div className="flex items-center gap-3 w-full mt-2 mb-1 px-1">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-grow"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Let's work together
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-grow"></div>
          </div>
          <div className="w-full grid grid-cols-2 xl:grid-cols-1 gap-2">
            <a href="mailto:contact@abdullh.tech" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full h-10 lg:h-12 gap-1.5 bg-primary text-white hover:bg-primary/85 rounded-10 transition-all duration-300">
                <BiSolidMessageSquareDetail />
                Message me
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/abdullah-alhalawani/" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full h-10 lg:h-12 gap-1.5 border-white/10 bg-white/5 text-white hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 rounded-10 transition-all duration-300">
                <BsLinkedin />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </Container>
      {/* Experiences — sm:order-8  lg:order-8 */}
      <Container
        divider
        label={<><GoProjectRoadmap className="text-primary" /> experiences</>}
        sublabel="my professional journey"
        className="col-span-2 row-span-2 order-8 lg:order-8 flex flex-col"
        scrollable={true}
      >
        <div className="w-full mt-2 flex flex-col gap-3 pb-2">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="flex flex-col gap-1.5 p-3 rounded-10 bg-black/40 border border-white/5 hover:bg-white/5 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-2">
                <span className="font-medium text-[11px] lg:text-sm text-white leading-tight">{exp.role}</span>
                <span className="text-[9px] lg:text-[11px] text-gray-400 text-left sm:text-right shrink-0">{exp.company}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-1 gap-2">
                <div className="flex flex-wrap gap-1 flex-1">
                  {exp.tech.map(t => (
                    <span key={t} className="text-[8px] lg:text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70 whitespace-nowrap">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[9px] lg:text-[10px] text-primary/80 shrink-0 font-medium whitespace-nowrap mt-1 sm:mt-0">{exp.date}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Skills — sm:order-6  lg:order-5 */}
      <Container
        divider
        label={<><FaTools className="text-primary" /> tech stack</>}
        sublabel="what I excel at"
        className="row-span-2 order-6 lg:order-5"
      >
        <div className="relative h-full w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] group">
          <ul className="flex flex-col gap-2 capitalize text-[10px] lg:text-base animate-[marquee-vertical_15s_linear_infinite] group-hover:[animation-play-state:paused] mt-2">
            {[...SKILLS, ...SKILLS].map(({ name, icon }, idx) => (
              <li key={`${name}-${idx}`} className="flex-grow flex items-center gap-2 border border-white/5 bg-black/40 p-1 md:p-2 rounded-10 transition-colors duration-200 hover:bg-white/2 hover:border-white/10 shrink-0">
                <div className="bg-black1 p-1.5 rounded-md border border-light-black shrink-0">
                  {icon}
                </div>
                <span className="truncate text-[10px] lg:text-xs">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Learning — sm:order-7  lg:order-7 */}
      <Container
        divider
        label={<><GiProgression className="text-primary" /> learning</>}
        sublabel="currently exploring"
        className="row-span-2 order-7 lg:order-7"
      >
        <ul className="flex flex-col gap-2 justify-end h-full capitalize text-[10px] lg:text-base pt-5">
          {LEARNING.map(({ name, icon }) => (
            <li key={name} className="flex-grow flex items-center gap-2 border border-white/5 bg-black/40 p-1 md:p-2 rounded-10 transition-colors duration-200 hover:bg-white/2 hover:border-white/10 shrink-0">
              <div className="bg-black1 p-1.5 rounded-md border border-light-black shrink-0">
                {icon}
              </div>
              <span className="truncate text-[8.5px] lg:text-xs">{name}</span>
            </li>
          ))}
        </ul>
      </Container>

      {/* Courses — sm:order-5  lg:order-4 */}
      <Container
        divider
        label={<><FaAward className="text-primary" /> courses & programs</>}
        sublabel="certifications & education"
        className="col-span-2 row-span-2 order-5 lg:order-4"
      >
        <ul className="flex flex-col gap-2 justify-end h-full text-[10px] lg:text-base pt-5">
          {COURSES.map(({ name, company, year, logo }) => (
            <li key={name} className="grow flex items-center gap-3 border border-white/5 bg-black/40 p-1.5 lg:p-2 lg:px-3 rounded-10 transition-colors duration-200 hover:bg-white/2 hover:border-white/10 shrink-0">
              <div className="rounded-md overflow-hidden grid place-items-center size-10">
                <img
                  src={logo}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-[10px] lg:text-sm text-white leading-snug">
                <span>{name}</span>
                <span className="text-white/90">{company} {year}</span>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      {/* Projects Slider — sm:order-9  lg:order-9 */}
      <Container
        divider
        label={<><GoProjectRoadmap className="text-primary" /> projects</>}
        sublabel="visual portfolio"
        className="col-span-2 sm:col-span-3 order-9 lg:order-9 flex flex-col"
      >
        <div className="flex-1 w-full mt-2 flex flex-col justify-center overflow-hidden">
          <Slider items={PROJECTS} />
        </div>
      </Container>

    </div>
  );
}
