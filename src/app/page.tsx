'use client'

import React, {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from '@mui/material';
import FloatingModal from "@/app/component/FloatingModal";
import ImagesCol from "@/app/component/ImagesCol";
import TextReveal from "@/app/component/TextReveal";
import {ToastContainer} from "react-toastify";
import {LoadingOverlay} from "@/app/component/LoadingOverlay";
import AudioButton from "@/app/component/AudioButton";
import RSVP from "@/app/component/RSVP";
import FloatingButton from "@/app/component/FloatingButton";
import AccountSection from "@/app/component/AccountSection";

export default function Home() {
    const [showOverlay, setShowOverlay] = useState(true);
    //const [welcomeText, setWelcomeText] = useState("");
    const theme = createTheme();

    const fullWelcomeText = "소중한 분들을 초대합니다";
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
                <AudioButton/>
                <div className="flex flex-col overflow-y-auto w-full h-full no-scrollbar">
                    <ImagesCol />
                    {showOverlay && (
                        <TextReveal text={fullWelcomeText}/>
                    )}

                    <AccountSection/>
                    <RSVP/>
                </div>
                <FloatingButton theme={theme}/>
                <FloatingModal/>
            </main>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                closeOnClick={true}
                pauseOnHover={false}
                draggable={false}
            />
            <LoadingOverlay />
        </ThemeProvider>
    );
}