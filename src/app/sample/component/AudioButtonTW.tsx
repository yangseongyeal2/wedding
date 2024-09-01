'use client'
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { FaPlay } from "react-icons/fa";
import musicAnimation from "../../../..//public/music.json"; // Lottie JSON 파일 경로를 적절히 수정해주세요

export default function AudioButtonTW() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const lottieRef = useRef<any>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.5;
            const playAttempt = setInterval(() => {
                audio.play()
                    .then(() => {
                        setIsPlaying(true);
                        clearInterval(playAttempt);
                    })
                    .catch(error => {
                        console.log("Auto-play attempt failed", error);
                    });
            }, 1000);
            return () => clearInterval(playAttempt);
        }
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                lottieRef.current?.pause();
            } else {
                audioRef.current.play().then(() => {
                    lottieRef.current?.play();
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative">
            <audio ref={audioRef} src="/audio/99.mp3" loop />
            <button
                onClick={togglePlay}
                className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-50 flex items-center justify-center overflow-hidden"
                aria-label={isPlaying ? '음악 정지' : '음악 재생'}
            >
                {isPlaying ? (
                    <div className="w-full h-full">
                        <Lottie
                            lottieRef={lottieRef}
                            animationData={musicAnimation}
                            loop={true}
                            autoplay={true}
                            style={{
                                width: '200%',
                                height: '200%',
                                transform: 'translate(-25%, -25%)'
                            }}
                            // style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-full h-full pl-[2.5px]">
                        <FaPlay size={11} className="text-black"/>
                    </div>
                )}
            </button>
        </div>
    );
}