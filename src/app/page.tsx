'use client'

import React, {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from '@mui/material';
import FloatingModal from "@/app/component/FloatingModal";
import ImagesCol from "@/app/component/ImagesCol";
import TextReveal from "@/app/component/TextReveal";

export default function Home() {
    const [showOverlay, setShowOverlay] = useState(true);
    const [welcomeText, setWelcomeText] = useState("");
    const theme = createTheme();

    const fullWelcomeText = "소중한 분들을 초대합니다";
    const typingSpeed = 200; // ms per character

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOverlay(false);
        }, fullWelcomeText.length * 50 + 2000); // 애니메이션 시간 + 추가 대기 시간

        return () => clearTimeout(timer);
    }, []);

    // useEffect(() => {
    //     let index = 0;
    //
    //     const typingInterval = setInterval(() => {
    //         if (index <= fullWelcomeText.length) {
    //             setWelcomeText(fullWelcomeText.slice(0, index));
    //             index++;
    //         } else {
    //             clearInterval(typingInterval);
    //             setTimeout(() => setShowOverlay(false), 2000); // 1초 후 오버레이 제거
    //         }
    //     }, typingSpeed);
    //
    //     return () => clearInterval(typingInterval);
    // }, []);

    // @ts-ignore
    return (
        <ThemeProvider theme={theme}>
            <main className="max-w-xl mx-auto bg-white w-full h-screen overflow-auto no-scrollbar relative">
                <div className="flex flex-col overflow-auto w-full h-full no-scrollbar">
                    <ImagesCol theme={theme}/>
                    {showOverlay && (
                        <TextReveal text={fullWelcomeText}/>

                        // <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 z-10">
                        //     <div className="text-white text-4xl animate-fade-in-left-to-right">
                        //         {welcomeText}
                        //     </div>
                        // </div>
                    )}
                </div>
                <FloatingModal/>
            </main>
        </ThemeProvider>
    );
}