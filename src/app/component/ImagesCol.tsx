'use client'
import Image from "next/image";
import React, {useState} from "react";

export default function ImagesCol() {
    return (
        <div className={''}>
            <div className="relative w-full" style={{paddingBottom: '140.3%'}}>

                    <Image
                        src="/1.png"
                        fill
                        style={{objectFit: 'cover'}}
                        alt=""
                        priority
                    />

            </div>
            <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
                    <Image
                        src="/2-3.png"
                        fill
                        style={{objectFit: 'cover'}}
                        alt=""
                        priority
                    />
            </div>
            <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
                    <Image
                        src="/3noclick.png"
                        fill
                        style={{objectFit: 'cover'}}
                        alt=""
                        priority
                    />
            </div>
        </div>
    )
}