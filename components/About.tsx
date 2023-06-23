import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

type Props = {}

export default function About({ }: Props) {
    const [language, setLanguage] = useState('en'); // Estado para controlar el idioma

    const handleLanguageChange = (selectedLanguage: string) => {
        setLanguage(selectedLanguage); // Actualizar el idioma cuando se hace clic en un botón
    };

    let textToShow = '';
    let textToTitleShow = '';
    // Determinar el texto según el idioma seleccionado
    if (language === 'en') {
        textToTitleShow = `Here a little background...`
        textToShow = `I'm Andrei Constantin Apostol, an experienced programmer with expertise in Python, web scraping, and Java with a focus on database integration. I have a versatile skill set that allows me to tackle a wide range of programming tasks effectively. Despite limited professional experience, my passion for learning and enthusiasm for new challenges drive me to continually expand my knowledge and skills. I'm excited to share my experiences, engage in fruitful discussions, and learn from others. Thank you.`;
    } else if (language === 'es') {
        textToTitleShow = `Acerca de mí...`
        textToShow = `Soy Andrei Constantin Apostol, un programador experimentado con conocimientos en Python, web scraping y Java con un enfoque en integración de bases de datos. Tengo un conjunto de habilidades versátil que me permite abordar una amplia gama de tareas de programación de manera efectiva. A pesar de tener una experiencia profesional limitada, mi pasión por el aprendizaje y entusiasmo por nuevos desafíos me impulsan a expandir continuamente mis conocimientos y habilidades. Estoy emocionado de compartir mis experiencias, participar en discusiones fructíferas y aprender de los demás. Gracias.`;
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
        max-w-7xl px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/09Engineering-670x375%402x.gif"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
            md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[600px]"

            />
            {/**-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        *md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[600px] https://www.bbva.com/wp-content/uploads/2020/09/DevOps-1024x629.jpg*/}
            <motion.div
                initial={{
                    x: 200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>{textToTitleShow}</h4>

                <p className="text-base">{textToShow}</p>

                <div className="flex justify-center">
                    <button
                        className={`mr-2 ${language === 'en' ? 'bg-[#F7AB0A] text-white' : 'bg-[#363636]'
                            } px-4 py-2 rounded`}
                        onClick={() => handleLanguageChange('en')}
                    >
                        English
                    </button>
                    <button
                        className={`mr-2 ${language === 'es' ? 'bg-[#F7AB0A] text-white' : 'bg-[#363636]'
                            } px-4 py-2 rounded`}
                        onClick={() => handleLanguageChange('es')}
                    >
                        Español
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}