import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from '../components/BackgroundCircles'
import Link from 'next/link';


type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My Name's Andrei",
            "Loading coffe...",
            "Let's start coding?",
        ], 
        loop: true,
        delaySpeed: 2000,
    });
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
            className='relative rounded-full h-32 w-32 object-cover'
            src='https://muyadictivo.com/wp-content/uploads/2022/07/significado-de-waifu-221.webp'
            alt=''
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pd-2 tracking-[15px]'> 
                Junior Back end
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>
            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#animated">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  );
}