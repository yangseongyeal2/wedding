'use client'
import Image from "next/image";
import React, { useState } from "react";
import {Box, Button, Fab, Modal, Zoom} from '@mui/material';
import {FaCar, FaEnvelope, FaInfo, FaMap, FaPhone} from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import {FaC} from "react-icons/fa6";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAction, setSelectedAction] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleActionClick = (action: string) => {
        console.log(`Action ${action} clicked`);
        //setSelectedAction(action);
        if(action === "map"){
            window.open("https://maps.app.goo.gl/fC19gtJwWsQHwQWY6", '_blank');
        }else if(action === "traffic"){
            window.open("https://www.sheratongrandtaipei.com/websev?lang=kr&ref=pages&cat=1&id=3", '_blank');
        }else if(action === "money"){
            setIsModalOpen(true)
        }
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleCopy = () => {
        navigator.clipboard.writeText("국민은행 778802-04-189882 양성열");
        alert("복사되었습니다.");
    }

    return (
        <main className="max-w-xl mx-auto bg-white w-full h-screen overflow-auto no-scrollbar relative">
            <div className="flex flex-col overflow-auto w-full h-full no-scrollbar">
                <div className="relative w-full" style={{ paddingBottom: '140.3%' }}>
                    <div className="absolute inset-0">
                        <Image
                            src="/1.png"
                            fill
                            style={{ objectFit: 'cover' }}
                            alt=""
                        />
                    </div>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '140.3%' }}>
                    <div className="absolute inset-0">
                        <Image
                            src="/2.png"
                            fill
                            style={{ objectFit: 'cover' }}
                            alt=""
                        />
                    </div>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '140.3%' }}>
                    <div className="absolute inset-0">
                        <Image
                            src="/3noclick.png"
                            fill
                            style={{ objectFit: 'cover' }}
                            alt=""
                        />
                    </div>
                </div>
                <div className="absolute bottom-1 right-1 flex flex-col items-end space-y-4">
                    <Fab
                        aria-label="add"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ backgroundColor: '#3B5998', color: 'white' }}
                    >
                        <HiCursorClick style={{ fontSize: 25 }} />
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
                                    style={{backgroundColor: '#3B5998', color: 'white'}}
                                >
                                    <FaEnvelope style={{fontSize: 25}}/>
                                </Fab>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className={'bg-white py-2 px-2'}>
                                    <span className="text-[#4C6174]">교통 안내</span>
                                </div>
                                <Fab
                                    aria-label="info"
                                    onClick={() => handleActionClick('traffic')}
                                    style={{backgroundColor: '#3B5998', color: 'white'}}
                                >
                                    <FaCar style={{fontSize: 25}}/>
                                </Fab>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className={'bg-white py-2 px-2'}>
                                    <span className="text-[#4C6174]">지도로 보기</span>
                                </div>
                                <Fab
                                    aria-label="contact"
                                    onClick={() => handleActionClick('map')}
                                    style={{backgroundColor: '#3B5998', color: 'white'}}
                                >
                                    <FaMap style={{fontSize: 25}}/>
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
                        height: 'calc(100% * 2 / 3)',
                        maxHeight: 400, // 최대 높이 설정
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
                    <h2 id="modal-title" className="text-center">마음 전하실곳</h2>
                    <p id="modal-description" className="text-center">국민은행 778802-04-189882 양성열</p>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleCopy}
                        sx={{ mt: 2 }}
                    >
                        복사하기
                    </Button>
                </Box>
            </Modal>
        </main>
    );
}
