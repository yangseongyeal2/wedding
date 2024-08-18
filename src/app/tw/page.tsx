'use client'
import {ToastContainer} from "react-toastify";
import {LoadingOverlay} from "@/app/component/LoadingOverlay";
import {createTheme, ThemeProvider} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import ImagesColTw from "@/app/tw/component/ImagesColTw";
import RSVPTW from "@/app/tw/component/RSVPTW";
import FloatingModalTW from "@/app/tw/component/FloatingModalTW";
import FloatingButtonTW from "@/app/tw/component/FloatingButtonTW";
import AudioButtonTW from "@/app/tw/component/AudioButtonTW";
import TextRevealTW from "@/app/tw/component/TextRevealTW";
import Image from "next/image";


export default function TW() {

    const [showOverlay, setShowOverlay] = useState(true);
    //const [welcomeText, setWelcomeText] = useState("");
    const theme = createTheme();
    const containerRef = useRef(null);

    const fullWelcomeText = "We are getting married";
    const typingSpeed = 50; // ms per character
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOverlay(false);
        }, fullWelcomeText.length * typingSpeed + 2000); // 애니메이션 시간 + 추가 대기 시간

        return () => clearTimeout(timer);
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <main className="max-w-xl mx-auto bg-custom-beige w-full">
                <AudioButtonTW/>
                <div className="flex flex-col overflow-y-auto w-full h-full no-scrollbar bg-custom-beige">
                    <ImagesColTw/>
                    <RSVPTW/>
                    <div className="relative w-full bg-custom-beige" style={{paddingBottom: '140.3%'}}>
                        <Image
                            src="/tw/7.png"
                            fill
                            style={{objectFit: 'cover'}}
                            alt=""
                            priority
                        />
                    </div>
                    {showOverlay && (
                        <TextRevealTW text={fullWelcomeText}/>
                    )}
                    {/*<ScrollVideo src={'/tw/7-2.mp4'}/>*/}
                </div>
                <div ref={containerRef} className="relative w-full max-w-[your-max-width] mx-auto">
                    {/* Your other content */}
                    <FloatingButtonTW theme={theme} containerRef={containerRef}/>
                </div>
                <FloatingModalTW/>
            </main>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                closeOnClick={true}
                pauseOnHover={false}
                draggable={false}
            />
            <LoadingOverlay/>
        </ThemeProvider>
    )

}