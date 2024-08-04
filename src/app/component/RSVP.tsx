import SizedBox from "@/app/lib/SizedBox";
import React, {useState} from "react";
import RSVPModal from "@/app/component/RSVPModal";

export default function RSVP() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className={'bg-custom-beige flex flex-col items-center py-20'}>
            <span className={'text-4xl font-normal text-dark-blue'}> RSVP </span>
            <div className={'flex flex-col py-[24px]'}>
                <span className={'text-center font-normal'}>참석 의사</span>
                <SizedBox height={20}/>
                <span className={'text-center font-normal text-sub-gray opacity-50'}>모든 분들을 소중히 모실 수 있도록 전해주세요</span>
            </div>
            <div className={'my-6 w-full px-10'}>
                <div className="p-8 rounded-md w-full text-center bg-[#f8f8f8]">
                    <div className="flex justify-center items-center gap-x-4">
                        <span>신랑 양성열</span>
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.17077 4.73241L5.56178 8.75149C5.81006 8.97873 6.19078 8.97873 6.43905 8.75149L10.8301 4.73241C11.3937 4.21651 11.7147 3.48755 11.7147 2.72344C11.7147 1.21933 10.4954 0 8.99126 0H8.62825C7.85684 0 7.11339 0.288871 6.54435 0.809709L6.0333 1.27747C6.01469 1.29451 5.98615 1.29451 5.96754 1.27747L5.45649 0.80971C4.88745 0.288871 4.144 0 3.37259 0H3.00958C1.50546 0 0.286133 1.21933 0.286133 2.72344C0.286133 3.48755 0.607127 4.21651 1.17077 4.73241Z"
                                fill="#444444"/>
                        </svg>
                        <span>신부 챈얜팡</span>
                    </div>
                    <div className="shrink-0 bg-[#e7dfda] h-[1px] w-full my-8"/>
                    <div className="text-[#666666] space-y-2">
                        <p>2024년 12월 14일</p>
                        <p>토요일 저녁 6시 </p>
                        <p className="py-6 text-pretty break-keep">쉐라톤 그랜드 타이베이 호텔 1 층</p>
                        <button
                            className="w-full h-12 text-white rounded-lg border-none focus:outline-none focus:ring-0 bg-[#c2b0a2]"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <span> 전달하기 </span>
                        </button>
                    </div>
                </div>
            </div>
            {/*<div className={'flex flex-col py-[32px] bg-custom-beige items-center'}>*/}
            {/*    <div className={'inline-flex '}>*/}
            {/*        <span className={'text-center text-dark-gray'}>신랑 양성열 ❤️ 신부 챈얜팡</span>*/}
            {/*    </div>*/}
            {/*    <span className={'text-center font-normal'}>참석 의사</span>*/}
            {/*    <SizedBox height={20}/>*/}
            {/*    <span className={'text-center font-normal text-sub-gray opacity-50'}>모든 분들을 소중히 모실 수 있도록 전해주세요</span>*/}
            {/*</div>*/}

            <RSVPModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}