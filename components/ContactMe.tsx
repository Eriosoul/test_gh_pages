import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {}

export default function ContactMe
    ({ }: Props) {
    return (
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-col 
        max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">ContactMe</h3>

            <div className="flex flex-col sapace-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    I have got just what you need. {" "}
                    <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
                </h4>

                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+34 642 11 10 52</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">Castilla La Mancha, Toledo</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">tboss1780@gmail.com</p>
                    </div>
                </div>
                <form className="flex flex-col space-y-4 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input placeholder="Name" className="contactInput" type="text" />
                        <input placeholder="Last Name" className="contactInput" type="text" />
                    </div>
                    <input placeholder="Messages" className="contactInput" type="text" />

                    <textarea placeholder="Message" className="contactInput"></textarea>
                    <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}
