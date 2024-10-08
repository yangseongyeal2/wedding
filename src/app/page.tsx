'use client'
import {ToastContainer} from "react-toastify";
import {LoadingOverlay} from "@/app/component/LoadingOverlay";
import {createTheme, ThemeProvider} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import FloatingModalTW from "@/app/tw/component/FloatingModalTW";
import FloatingButtonTW from "@/app/tw/component/FloatingButtonTW";
import AudioButtonTW from "@/app/tw/component/AudioButtonTW";
import TextRevealTW from "@/app/tw/component/TextRevealTW";
import SampleImagesColTw from "@/app/sample/component/SampleImagesColTw";
import ShareButton from "@/app/component/ShareButton";
import SampleImagesColTw2 from "@/app/sample/component/SampleImagesColTw2";
import CoverflowSwiper from "@/app/component/scrollable-gallery-component";
import RSVPSample from "@/app/sample/component/RSVPSample";


export default function TW() {

    const [showOverlay, setShowOverlay] = useState(true);
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
    const images = [
        { src: '/sample/gallery1.JPG', alt: 'Image 1' },
        { src: '/sample/gallery2.JPG', alt: 'Image 2' },
        { src: '/sample/gallery3.JPG', alt: 'Image 3' },
        // ... 더 많은 이미지 추가
    ];


    return (
        <ThemeProvider theme={theme}>
            <main className="max-w-xl mx-auto bg-custom-beige w-full">
                <AudioButtonTW/>
                <div className="flex flex-col overflow-y-auto w-full h-full no-scrollbar bg-custom-beige">
                    <SampleImagesColTw/>
                    <SampleImagesColTw2/>
                    <CoverflowSwiper images={images}/>
                    <RSVPSample/>
                    {/*<AddToCalendarButton/>*/}
                    <ShareButton/>
                    {showOverlay && (
                        <TextRevealTW text={fullWelcomeText}/>
                    )}
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