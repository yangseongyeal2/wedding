import React, {useState} from "react";
import RSVPModalTW from "@/app/tw/component/RSVPModalTW";
import Image from "next/image";
import RSVPModalSample from "@/app/sample/component/RSVPModalSmaple";

export default function RSVPSample() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className={'py-0 '}>
            <div className="relative w-full" style={{paddingBottom: '140%'}}>
                <button onClick={() => setIsModalOpen(true)}>
                    <Image
                        src="/sample/10.png"
                        fill
                        style={{objectFit: 'cover'}}
                        alt=""
                        priority
                    /></button>
            </div>
            <RSVPModalSample isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </div>
    )
}