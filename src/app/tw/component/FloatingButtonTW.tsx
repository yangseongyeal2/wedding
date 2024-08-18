import {Fab, useMediaQuery, Zoom} from "@mui/material";
import {HiCursorClick} from "react-icons/hi";
import {FaCar, FaMap} from "react-icons/fa";
import React from "react";
import {useAtom} from "jotai/index";
import {floatingButtonOpenAtom, showModalMoneyAtom} from "@/app/atom/atom";

export default function FloatingButtonTW({theme}: { theme: any }) {
    //const [isOpen, setIsOpen] = useState(false);
    const [isOpen, setIsOpen] = useAtom(floatingButtonOpenAtom);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const fontSize = isSmallScreen ? 18 : 25; // 작은 화면에서는 18px, 큰 화면에서는 25px
    const fabSize = isSmallScreen ? 40 : 56;
    const [isModalOpen, setIsModalOpen] = useAtom(showModalMoneyAtom);

    const handleActionClick = (action: string) => {
        if (action === "map") {
            window.open("https://maps.app.goo.gl/6Hdn7r3EUbVBdxh38");
        } else if (action === "traffic") {
            window.open("https://www.sheratongrandtaipei.com/websev?lang=zh-tw&ref=pages&cat=5&id=35");
        } else if (action === "money") {
            setIsModalOpen(true);
        }
    };// 작은 화면에서는 40px, 큰 화면에서는 56px
    return (
        <div className="sticky bottom-4 pr-4 flex flex-col items-end space-y-4">
            <Fab
                aria-label="add"
                onClick={() => setIsOpen(!isOpen)}
                style={{backgroundColor: '#3B5998', color: 'white', width: fabSize, height: fabSize}}
            >
                <HiCursorClick style={{fontSize}}/>
            </Fab>

            <Zoom in={isOpen} unmountOnExit>
                <div className="flex flex-col items-end space-y-2">
                    {/*<div className="flex items-center space-x-2">*/}
                    {/*    <div className={'bg-white py-2 px-2'}>*/}
                    {/*        <span className="text-[#4C6174]">마음 전하실곳</span>*/}
                    {/*    </div>*/}
                    {/*    <Fab*/}
                    {/*        aria-label="contact"*/}
                    {/*        onClick={() => handleActionClick('money')}*/}
                    {/*        style={{*/}
                    {/*            backgroundColor: '#3B5998',*/}
                    {/*            color: 'white',*/}
                    {/*            width: fabSize,*/}
                    {/*            height: fabSize*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <FaEnvelope style={{fontSize}}/>*/}
                    {/*    </Fab>*/}
                    {/*</div>*/}
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