import React from 'react';
import {addToCalendar} from "@/app/calendar/addToCalendar";


export default function AddToCalendarButton() {


    const handleClick = () => {
        const weddingDate = new Date('2024-09-15T14:00:00');
        const location = '서울시 강남구 테헤란로 123';
        const event = {
            title: '우리의 결혼식',
            description: '소중한 날에 함께해 주세요.',
            start: [weddingDate.getFullYear(), weddingDate.getMonth() + 1, weddingDate.getDate()] as [number, number, number],
            duration: {hours: 2, minutes: 0},
            location: location
        };

        addToCalendar(event);
    };

    return (
        <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            캘린더에 저장하기
        </button>
    );
};
