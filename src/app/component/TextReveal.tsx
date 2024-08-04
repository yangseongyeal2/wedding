import React, { useEffect, useRef } from 'react';

interface TextRevealProps {
    text: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ text}) => {


    return (
        <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 z-10 min-h-screen">
            <div className="text-5xl font-normal leading-normal text-white font-ink-lipquid">
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
        </div>
    );
};

export default TextReveal;