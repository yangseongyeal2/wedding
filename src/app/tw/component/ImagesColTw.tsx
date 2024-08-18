'use client'
import Image from "next/image";
import React from "react";
import {useAtom} from "jotai/index";
import {floatingButtonOpenAtom} from "@/app/atom/atom";

export default function ImagesColTw() {
    const [isOpen, setIsOpen] = useAtom(floatingButtonOpenAtom);
    return (
        <div className={''}>
            <div className="relative w-full" style={{paddingBottom: '140.3%'}}>

                    <Image
                        src="/tw/1.png"
                        fill
                        style={{objectFit: 'cover'}}
                        alt=""
                        priority
                    />

            </div>
            <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
                    <Image
                        src="/tw/2.png"
                        fill
                        style={{objectFit: 'cover'}}
                        alt=""
                        priority
                    />
            </div>
            <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
                <button onClick={() => setIsOpen(!isOpen)}><Image
                    src="/tw/3.png"
                    fill
                    style={{objectFit: 'cover'}}
                    alt=""
                    priority
                /></button>
            </div>
        </div>
    )
}