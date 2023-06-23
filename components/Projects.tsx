import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({ }: Props) {
    const slides = [
        {
            url: 'https://media.tenor.com/2uyENRmiUt0AAAAC/coding.gif',
            content: (
                <div className="w-full flex flex-col items-center space-x-5 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://media.tenor.com/2uyENRmiUt0AAAAC/coding.gif" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            ),
        },
        {
            url: 'https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif',
            content: (
                <div className="w-full flex flex-col items-center space-x-5 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">C++</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            ),
        },
        {
            url: 'https://miro.medium.com/v2/resize:fit:1400/1*L_QoAG863l8QvqxpNyBiqw.gif',
            content: (
                <div className="w-full flex flex-col items-center space-x-5 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg object-cover" src="https://cdn.dribbble.com/users/1670352/screenshots/6769857/main-illustration-800x600.gif" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SQL</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            ),
        },
        {
            url: 'https://cdn.dribbble.com/users/205136/screenshots/2582152/ae-fun.gif',
            content: (
                <div className="w-full flex flex-col items-center space-x-5 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://cdn.dribbble.com/users/205136/screenshots/2582152/ae-fun.gif" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Java</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            ),
        },
        {
            url: 'https://cdn.dribbble.com/users/6137922/screenshots/15162516/media/bc22317c4f871eb002d08e8d471e6592.gif',
            content: (
                <div className="w-full flex flex-col items-center space-x-5 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://cdn.dribbble.com/users/6137922/screenshots/15162516/media/bc22317c4f871eb002d08e8d471e6592.gif" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web Scrapping</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            ),
        },
    ];

    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleNextSlide = () => {
        if (!isHovered) {
            setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        }
    };

    const handlePrevSlide = () => {
        if (!isHovered) {
            setIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const currentSlide = slides[index];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                handleNextSlide();
            }
        }, 5000); // Cambia el valor de 3000 por el intervalo de tiempo deseado en milisegundos

        return () => {
            clearInterval(interval);
        };
    }, [isHovered]);

    return (
        <motion.div

            className="flex flex-col relative h-screen text-center md:text-left md:flex-col max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
                Animated
            </h3>
            <div className="flex rounded-lg items-center md:w-[600px] xl:w-[900px] w-full ">
                <motion.div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {currentSlide.content}
                </motion.div>
                {/** relative max-w-lg mx-auto bg-red-800   
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg dark:bg-gray-800"
                    onClick={handlePrevSlide}
                >
                    <svg
                        className="w-6 h-6 text-gray-700 dark:text-gray-200"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg dark:bg-gray-800"
                    onClick={handleNextSlide}
                >
                    <svg
                        className="w-6 h-6 text-gray-700 dark:text-gray-200"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>*/}
            </div>
        </motion.div>
    );
}

export default Projects;