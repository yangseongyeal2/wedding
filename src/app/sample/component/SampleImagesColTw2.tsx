'use client'
import Image from "next/image";
import React from "react";

export default function SampleImagesColTw2() {
    //const [isOpen, setIsOpen] = useAtom(floatingButtonOpenAtom);

    const moveGoogleMap = () => {
        window.open("https://maps.app.goo.gl/fC19gtJwWsQHwQWY6");
    }
    const showMessage = () => {
        console.log("moveMessage");
        //window.open("https://maps.app.goo.gl/fC19gtJwWsQHwQWY6");
    }
    return (
        <div className={''}>


            {/*<div className="relative w-full" style={{paddingBottom: '140.3%'}}>*/}
            {/*    <button><Image*/}
            {/*        src="/sample/5.png"*/}
            {/*        fill*/}
            {/*        style={{objectFit: 'cover'}}*/}
            {/*        alt=""*/}
            {/*        priority*/}
            {/*    /></button>*/}
            {/*</div>*/}
            <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
                <button><Image
                    src="/sample/6.png"
                    fill
                    style={{objectFit: 'cover'}}
                    alt=""
                    priority
                /></button>
            </div>
            <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
                <button onClick={moveGoogleMap}><Image
                    src="/sample/7.png"
                    fill
                    style={{objectFit: 'cover'}}
                    alt=""
                    priority
                /></button>
            </div>
            <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
                <button onClick={showMessage}><Image
                    src="/sample/8.png"
                    fill
                    style={{objectFit: 'cover'}}
                    alt=""
                    priority
                /></button>
            </div>
            <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
                <button><Image
                    src="/sample/9.png"
                    fill
                    style={{objectFit: 'cover'}}
                    alt=""
                    priority
                /></button>
            </div>
        </div>
    )
}