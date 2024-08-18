import React from 'react'
import Container from "../Components/Container";
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';

export default function Footer() {
    return (
        <footer className="w-screen">
            <Container className="rounded-b-none border-b-0 p-2 px-5 w-fit h-fit mx-auto">
                <ul className="flex gap-3">
                    <li className="rounded-full p-1 bg-light-black border border-black1 w-9 h-9 grid place-items-center"><a href="https://x.com/devabdullh" target="_blank" rel="noopener noreferrer"><BsTwitterX className="text-primary" /></a></li>
                    <li className="rounded-full p-1 bg-light-black border border-black1 w-9 h-9 grid place-items-center"><a href="https://www.linkedin.com/in/devabdullah" target="_blank" rel="noopener noreferrer"><BsLinkedin className="text-primary" /></a></li>
                    <li className="rounded-full p-1 bg-light-black border border-black1 w-9 h-9 grid place-items-center"><a href="https://github.com/vAbdullh" target="_blank" rel="noopener noreferrer"><BsGithub className="text-primary" /></a></li>
                </ul>
            </Container>
        </footer>
    )
}
