import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function Animated({ }: Props) {
  const [tooltipText, setTooltipText] = useState('English');

  const handleEnglishClick = () => {
    setTooltipText('English');
  };

  const handleSpanishClick = () => {
    setTooltipText('Español');
  };

  const handleLearnMoreClick = () => {
    // Redirigir al usuario a la página externa cuando se hace clic en "Learn more"
    window.location.href = 'https://www.deustoformacion.com/cursos/programacion-tecnologia/curso-superior-programacion-con-python?_gl=1*148xq2n*_up*MQ..&gclid=CjwKCAjws7WkBhBFEiwAIi168wv5LBJPNxKXgO0jVB0JW2uir2Oz0r1n9Es2OhPtlJmJb7EHbVRlnhoCXAEQAvD_BwE';
  };

  const getTranslatedText = (language: string) => {
    if (language === 'Español') {
      return {
        title: 'Desarrollo de PPY - Python',
        description: 'Obtén acceso a más de 20 páginas que incluyen un diseño de panel de control, gráficos, tablero Kanban, calendario y páginas de preventa de comercio electrónico y marketing.',
        learnMore: 'Saber más',
        courseTitle: 'CPP - Curso superior de programación C++ con CPA',
        courseDescription: 'Todas las páginas y componentes se diseñan primero en Figma y mantenemos una paridad entre las dos versiones incluso cuando actualizamos el proyecto.',
        degreeTitle: 'DAM - Desarrollo de Aplicaciones Multiplataforma',
        degreeDescription: 'Comienza con docenas de componentes web y elementos interactivos construidos sobre Tailwind CSS.',
        smrTitle: 'SMR - Sistemas Microinformáticos y Redes',
        smrDescription: 'Comienza con docenas de componentes web y elementos interactivos construidos sobre Tailwind CSS.'
      };
    } else {
      // Default to English
      return {
        title: 'PPY - Python development',
        description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
        learnMore: 'Learn more',
        courseTitle: 'CPP - Curso superior de programación C++ con CPA',
        courseDescription: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
        degreeTitle: 'DAM - Desarrollo de Aplicaciones Multiplataforma',
        degreeDescription: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.',
        smrTitle: 'SMR - Sistemas Microinformáticos y Redes',
        smrDescription: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.'
      };
    }
  };

  const translatedText = getTranslatedText(tooltipText);

  return (

    <motion.div

      className="flex flex-col relative h-screen text-center md:text-left md:flex-col max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Animated
      </h3>
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
      >
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2023 - </time>
            <h3 className="text-lg font-semibold text-[#F7AB0A] dark:text-white">{translatedText.title}</h3>
            <p className="mb-4 text-base font-normal text-[#f7f5f0] dark:text-gray-400">{translatedText.description}</p>
            <a
              href="https://www.deustoformacion.com/cursos/programacion-tecnologia/curso-superior-programacion-con-python?_gl=1*148xq2n*_up*MQ..&gclid=CjwKCAjws7WkBhBFEiwAIi168wv5LBJPNxKXgO0jVB0JW2uir2Oz0r1n9Es2OhPtlJmJb7EHbVRlnhoCXAEQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">{translatedText.learnMore}
              <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd">
                </path>
              </svg>
            </a>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May. 2021 - Ene. 2023</time>
            <h3 className="text-lg font-semibold text-[#F7AB0A] dark:text-white">{translatedText.courseTitle}</h3>
            <p className="text-base font-normal text-[#f7f5f0] dark:text-gray-400">{translatedText.courseDescription}</p>
            <div className="inline-flex items-center px-4 py-2 text-sm space-x-5">
              <span className="flex items-center text-sm font-medium text-[#F7AB0A] dark:text-white"><span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>c++</span>
            </div>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sep. 2020 - Jul. 2022</time>
            <h3 className="text-lg font-semibold text-[#F7AB0A] dark:text-white">{translatedText.degreeTitle}</h3>
            <p className="text-base font-normal text-[#f7f5f0] dark:text-gray-400">{translatedText.degreeDescription}</p>
            <div className="inline-flex items-center px-4 py-2 text-sm space-x-5">
              <span className="flex items-center text-sm font-medium text-[#F7AB0A] dark:text-white"><span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>Java</span>
              <span className="flex items-center text-sm font-medium text-[#F7AB0A] dark:text-white"><span className="flex w-2.5 h-2.5 bg-purple-500 rounded-full mr-1.5 flex-shrink-0"></span>SQL</span>
              <span className="flex items-center text-sm font-medium text-[#F7AB0A] dark:text-white"><span className="flex w-2.5 h-2.5 bg-indigo-500 rounded-full mr-1.5 flex-shrink-0"></span>C#, C</span>
              <span className="flex items-center text-sm font-medium text-[#F7AB0A] dark:text-white"><span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0"></span>HTML5, CSS3, JS</span>
            </div>

          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sept 2015 - Jul 2018</time>
            <h3 className="text-lg font-semibold text-[#F7AB0A] dark:text-white">{translatedText.smrTitle}</h3>
            <p className="text-base font-normal text-[#f7f5f0] dark:text-gray-400">{translatedText.smrDescription}</p>
            <div className="inline-flex items-center px-4 py-2 text-sm space-x-5">
              <span className="flex items-center text-sm font-medium text-[#F7AB0A] dark:text-white"><span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>Java</span>
              <span className="flex items-center text-sm font-medium text-[#F7AB0A] dark:text-white"><span className="flex w-2.5 h-2.5 bg-purple-500 rounded-full mr-1.5 flex-shrink-0"></span>SQL</span>
              <span className="flex items-center text-sm font-medium text-[#F7AB0A] dark:text-white"><span className="flex w-2.5 h-2.5 bg-indigo-500 rounded-full mr-1.5 flex-shrink-0"></span>C#, C</span>
              <span className="flex items-center text-sm font-medium text-[#F7AB0A] dark:text-white"><span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0"></span>HTML5, CSS3, JS</span>
            </div>
          </li>
        </ol>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-2">
        <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-[#F7AB0A] border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          onClick={handleEnglishClick}
        >
          English
        </button>
        <button
          className="inline-flex items-center px-4 py-2 ml-2 text-sm font-medium text-gray-900 bg-[#F7AB0A] border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          onClick={handleSpanishClick}
        >
          Español
        </button>
      </motion.div>
      {/**<span class="flex w-3 h-3 bg-gray-200 rounded-full"></span>
          <span class="flex w-3 h-3 bg-gray-900 rounded-full dark:bg-gray-700"></span>
          <span class="flex w-3 h-3 bg-blue-600 rounded-full"></span>
          <span class="flex w-3 h-3 bg-green-500 rounded-full"></span>
          <span class="flex w-3 h-3 bg-red-500 rounded-full"></span>
          <span class="flex w-3 h-3 bg-purple-500 rounded-full"></span>
          <span class="flex w-3 h-3 bg-indigo-500 rounded-full"></span>
          <span class="flex w-3 h-3 bg-yellow-300 rounded-full"></span>
          <span class="flex w-3 h-3 bg-teal-500 rounded-full"></span>

          ---

          
<span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Default</span>
<span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Dark</span>
<span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Red</span>
<span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Green</span>
<span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
<span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Indigo</span>
<span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Purple</span>
<span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">Pink</span>

          */
      }
    </motion.div>
  );
}
