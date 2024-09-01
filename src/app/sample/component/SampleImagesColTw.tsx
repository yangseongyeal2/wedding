'use client'
import Image from "next/image";
import React from "react";

export default function SampleImagesColTw() {
    return (
        <div className={''}>
            <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
                <Image
                    src="/sample/1.png"
                    fill
                    style={{objectFit: 'cover'}}
                    alt=""
                    priority
                />
            </div>
            <div className="relative w-full" style={{paddingBottom: '100%'}}>
                <Image
                    src="/sample/2.png"
                    fill
                    style={{objectFit: 'cover'}}
                    alt=""
                    priority
                />
            </div>
            <div className="relative w-full" style={{paddingBottom: '140%'}}>
                <button><Image
                    src="/sample/3.png"
                    fill
                    style={{objectFit: 'cover'}}
                    alt=""
                    priority
                /></button>
            </div>
            <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
                <button><Image
                    src="/sample/4.png"
                    fill
                    style={{objectFit: 'cover'}}
                    alt=""
                    priority
                /></button>
            </div>
        </div>
    )
}