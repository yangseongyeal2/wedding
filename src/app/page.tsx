'use client'
import Image from "next/image";
import React, {useState} from "react";
import {Box, Button, Fab, Modal, Zoom, useMediaQuery, createTheme, ThemeProvider} from '@mui/material';
import {FaCar, FaEnvelope, FaMap} from "react-icons/fa";
import {HiCursorClick} from "react-icons/hi";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const theme = createTheme();

    const handleActionClick = (action: string) => {
        if (action === "map") {
            window.open("https://maps.app.goo.gl/fC19gtJwWsQHwQWY6");
        } else if (action === "traffic") {
            window.open("https://www.sheratongrandtaipei.com/websev?lang=kr&ref=pages&cat=1&id=3");
        } else if (action === "money") {
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText("국민은행 778802-04-189882");
        alert("복사되었습니다.");
    };

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const fontSize = isSmallScreen ? 18 : 25; // 작은 화면에서는 18px, 큰 화면에서는 25px
    const fabSize = isSmallScreen ? 40 : 56; // 작은 화면에서는 40px, 큰 화면에서는 56px

    return (
        <ThemeProvider theme={theme}>
            <main className="max-w-xl mx-auto bg-white w-full h-screen overflow-auto no-scrollbar relative">
                <div className="flex flex-col overflow-auto w-full h-full no-scrollbar">
                    <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
                        <div className="absolute inset-0">
                            <Image
                                src="/1.png"
                                fill
                                style={{objectFit: 'cover'}}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
                        <div className="absolute inset-0">
                            <Image
                                src="/2-3.png"
                                fill
                                style={{objectFit: 'cover'}}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="relative w-full" style={{paddingBottom: '140.3%'}}>
                        <div className="absolute inset-0">
                            <Image
                                src="/3noclick.png"
                                fill
                                style={{objectFit: 'cover'}}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="absolute bottom-2 right-2 flex flex-col items-end space-y-4">
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
                                        <span className="text-[#4C6174]">마음 전하실곳</span>
                                    </div>
                                    <Fab
                                        aria-label="contact"
                                        onClick={() => handleActionClick('money')}
                                        style={{
                                            backgroundColor: '#3B5998',
                                            color: 'white',
                                            width: fabSize,
                                            height: fabSize
                                        }}
                                    >
                                        <FaEnvelope style={{fontSize}}/>
                                    </Fab>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className={'bg-white py-2 px-2'}>
                                        <span className="text-[#4C6174]">교통 안내</span>
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
                                        <span className="text-[#4C6174]">지도로 보기</span>
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
                </div>

                {/* 모달 팝업 */}
                <Modal
                    open={isModalOpen}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 'calc(100% * 2 / 3)',
                            maxWidth: 400, // 최대 너비 설정
                            //aspectRatio: '1 / 1', // 너비와 높이를 동일하게 설정
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div className={'flex flex-col h-full gap-2'}>
                            <video
                                width="100%"
                                height="auto"
                                muted
                                autoPlay
                                loop
                            >
                                <source src="/hi2.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <div className={'flex flex-col'}><p id="modal-description" className="text-center">국민은행</p>
                                <p id="modal-description" className="text-center">778802-04-189882</p>
                                <p id="modal-description" className="text-center">양성열</p>
                            </div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleCopy}
                                sx={{
                                    mt: 2,
                                    backgroundColor: '#FFC0CB', // 옅은 분홍색 러블리한 색상
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#FFB6C1', // 호버 색상
                                    },
                                }}
                            >
                                복사하기 🧡
                            </Button>
                        </div>

                    </Box>
                </Modal>
            </main>
        </ThemeProvider>
    );
}
