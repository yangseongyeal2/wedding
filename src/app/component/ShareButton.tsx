import Image from "next/image";
import React from "react";

export default function ShareButton() {
    const url = window.location.href;
    const title = '타이틀';
    const handleShare = () => {
        const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        window.open(lineUrl, '_blank');
    };
    return <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
        <button onClick={handleShare}><Image
            src="/sample/11.png"
            fill
            style={{objectFit: 'cover'}}
            alt=""
            priority
        /></button>
    </div>
}