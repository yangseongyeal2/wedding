import {Fab, useMediaQuery, Zoom} from "@mui/material";
import {HiCursorClick} from "react-icons/hi";
import {FaCar, FaMap} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {useAtom} from "jotai/index";
import {floatingButtonOpenAtom, showModalMoneyAtom} from "@/app/atom/atom";

export default function FloatingButtonTW({theme, containerRef}: { theme: any, containerRef: React.RefObject<HTMLDivElement> }) {
    const [isOpen, setIsOpen] = useAtom(floatingButtonOpenAtom);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const fontSize = isSmallScreen ? 18 : 25;
    const fabSize = isSmallScreen ? 40 : 56;
    const [isModalOpen, setIsModalOpen] = useAtom(showModalMoneyAtom);
    const [rightOffset, setRightOffset] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            if (containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const newRightOffset = window.innerWidth - containerRect.right;
                setRightOffset(newRightOffset + 16); // 16px is equivalent to right-4
            }
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
    }, [containerRef]);

    const handleActionClick = (action: string) => {
        if (action === "map") {
            window.open("https://maps.app.goo.gl/6Hdn7r3EUbVBdxh38");
        } else if (action === "traffic") {
            window.open("https://www.sheratongrandtaipei.com/websev?lang=zh-tw&ref=pages&cat=5&id=35");
        } else if (action === "money") {
            setIsModalOpen(true);
        }
    };

    return (
        <div className="fixed bottom-4 flex flex-col items-end space-y-4 bg-transparent border-none" style={{right: `${rightOffset}px`}}>
            <Fab
                aria-label="add"
                onClick={() => setIsOpen(!isOpen)}
                style={{backgroundColor: '#3B5998', color: 'white', width: fabSize, height: fabSize}}
            >
                <HiCursorClick style={{fontSize}}/>
            </Fab>

            <Zoom in={isOpen} unmountOnExit>
                <div className="flex flex-col items-end space-y-2">
                    <div className="flex items-center space-x-2">
                        <div className={'bg-white py-2 px-2'}>
                            <span className="text-[#4C6174]">交通資訊</span>
                        </div>
                        <Fab
                            aria-label="info"
                            onClick={() => handleActionClick('traffic')}
                            style={{
                                backgroundColor: '#3B5998',
                                color: 'white',
                                width: fabSize,
                                height: fabSize
                            }}
                        >
                            <FaCar style={{fontSize}}/>
                        </Fab>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className={'bg-white py-2 px-2'}>
                            <span className="text-[#4C6174]">Google 地圖</span>
                        </div>
                        <Fab
                            aria-label="contact"
                            onClick={() => handleActionClick('map')}
                            style={{
                                backgroundColor: '#3B5998',
                                color: 'white',
                                width: fabSize,
                                height: fabSize
                            }}
                        >
                            <FaMap style={{fontSize}}/>
                        </Fab>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}