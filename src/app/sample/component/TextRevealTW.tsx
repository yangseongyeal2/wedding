import React from 'react';
import SizedBox from "@/app/lib/SizedBox";

interface TextRevealProps {
    text: string;
}

const TextRevealTW: React.FC<TextRevealProps> = ({text}) => {


    return (
        <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 z-10 min-h-screen">
            <div className={'flex flex-col items-center justify-center'}>
                <div className="text-5xl md:text-7xl font-normal leading-normal text-white font-MoonTime">
                    {text.match(/./gu)!.map((char, index) => (
                        <span
                            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                            key={`${char}-${index}`}
                            style={{animationDelay: `${index * 0.05}s`}}
                        >
                {char === " " ? "\u00A0" : char}
                </span>
                    ))}
                </div>
                <SizedBox height={500}/></div>
        </div>
    );
};

export default TextRevealTW;