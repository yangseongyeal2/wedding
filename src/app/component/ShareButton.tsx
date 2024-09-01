import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ShareButton() {
    const [currentUrl, setCurrentUrl] = useState<string>('');

    useEffect(() => {
        // 클라이언트 사이드에서만 실행
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, []);

    const handleShare = () => {
        const title = '喜帖';
        const lineUrl = `line://msg/text/${encodeURIComponent(title + '\n' + currentUrl)}`;
        const webfallback = `https://line.me/R/share?text=${encodeURIComponent(title + '\n' + currentUrl)}`;

        // 먼저 Line 앱 열기 시도
        window.location.href = lineUrl;

        // Line 앱이 설치되어 있지 않은 경우를 대비해 타임아웃 설정
        setTimeout(() => {
            // 만약 Line 앱이 열리지 않았다면, 웹 버전으로 폴백
            window.location.href = webfallback;
        }, 500);
    };

    return (
        <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
            <button onClick={handleShare}>
                <Image
                    src="/sample/11.png"
                    fill
                    style={{objectFit: 'cover'}}
                    alt=""
                    priority
                />
            </button>
        </div>
    );
}