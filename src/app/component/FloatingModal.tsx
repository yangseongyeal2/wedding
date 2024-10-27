import {Box, Button, Modal} from "@mui/material";
import React, {useState} from "react";
import { useAtom } from 'jotai';
import {showModalMoneyAtom} from "@/app/atom/atom";
import AccountSection from "@/app/component/AccountSection";

export default function FloatingModal() {
    const [isModalOpen, setIsModalOpen] = useAtom(showModalMoneyAtom);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleCopy = () => {
        navigator.clipboard.writeText("국민은행 778802-04-189882");
        alert("복사되었습니다.");
    };

    return (
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
                <AccountSection/>
                {/*<div className={'flex flex-col'}><p id="modal-description" className="text-center">국민은행</p>*/}
                {/*    <p id="modal-description" className="text-center">778802-04-189882</p>*/}
                {/*    <p id="modal-description" className="text-center">양성열</p>*/}
                {/*</div>*/}
                {/*<Button*/}
                {/*    variant="contained"*/}
                {/*    color="primary"*/}
                {/*    onClick={handleCopy}*/}
                {/*    sx={{*/}
                {/*        mt: 2,*/}
                {/*        backgroundColor: '#FFC0CB', // 옅은 분홍색 러블리한 색상*/}
                {/*        color: 'white',*/}
                {/*        '&:hover': {*/}
                {/*            backgroundColor: '#FFB6C1', // 호버 색상*/}
                {/*        },*/}
                {/*    }}*/}
                {/*>*/}
                {/*    복사하기 🧡*/}
                {/*</Button>*/}
            </div>
        </Box>
    </Modal>)
}