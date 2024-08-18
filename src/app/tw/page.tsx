'use client'

import TextReveal from "@/app/component/TextReveal";
import {ToastContainer} from "react-toastify";
import {LoadingOverlay} from "@/app/component/LoadingOverlay";
import {createTheme, ThemeProvider} from "@mui/material";
import {useEffect, useState} from "react";
import ImagesColTw from "@/app/tw/component/ImagesColTw";
import RSVPTW from "@/app/tw/component/RSVPTW";
import FloatingModalTW from "@/app/tw/component/FloatingModalTW";
import FloatingButtonTW from "@/app/tw/component/FloatingButtonTW";
import AudioButtonTW from "@/app/tw/component/AudioButtonTW";
import ScrollVideo from "@/app/tw/component/scroll-video-component";


export default function TW() {

    const [showOverlay, setShowOverlay] = useState(true);
    //const [welcomeText, setWelcomeText] = useState("");
    const theme = createTheme();

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
                <div className="flex flex-col overflow-y-auto w-full h-full no-scrollbar">
                    <ImagesColTw/>
                    <RSVPTW/>
                    {showOverlay && (
                        <TextReveal text={fullWelcomeText}/>
                    )}
                    <ScrollVideo src={'/tw/7-2.mp4'}/>
                </div>
                <FloatingButtonTW theme={theme}/>
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