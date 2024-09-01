import React, {useState} from "react";
import RSVPModalTW from "@/app/tw/component/RSVPModalTW";
import Image from "next/image";

export default function RSVPTW() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className={'py-0 '}>
            <div className="relative w-full" style={{paddingBottom: '140%'}}>
                <button onClick={() => setIsModalOpen(true)}>
                    <Image
                        src="/tw/4.png"
                        fill
                        style={{objectFit: 'cover'}}
                        alt=""
                        priority
                    /></button>
            </div>
            <RSVPModalTW isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </div>
    )
}