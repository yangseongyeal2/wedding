'use client'

import React from 'react';
import { GuestModel } from "@/app/model/guest";
import {useGuests} from "@/app/excel/use-guests-hook";
import {Button} from "@mui/material";
import * as XLSX from 'xlsx';

const GuestTablePage: React.FC = () => {
    const { data: guests, isLoading, error } = useGuests();

    const downloadExcel = () => {
        if (!guests) return;

        const worksheet = XLSX.utils.json_to_sheet(guests.map(guest => ({
            이름: guest.name,
            전화번호: guest.phoneNumber,
            측: guest.side,
            참석여부: guest.attendance ? '예' : '아니오',
            동반자수: guest.companion,
            어린이수: guest.children,
            어린이좌석수: guest.childrenSeat,
            채식주의자수: guest.vegetarian
        })));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "게스트 목록");

        XLSX.writeFile(workbook, "게스트_목록.xlsx");
    }


    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>에러가 발생했습니다: {error.message}</div>;

    return (
        <div className="container mx-auto p-4">
            <div className={'inline-flex'}>
                <h1 className="text-2xl font-bold mb-4">게스트 목록</h1>
                <Button onClick={downloadExcel}>
                    다운로드
                </Button>
            </div>

            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">이름</th>
                    <th className="py-2 px-4 border-b">전화번호</th>
                    <th className="py-2 px-4 border-b">측</th>
                    <th className="py-2 px-4 border-b">참석 여부</th>
                    <th className="py-2 px-4 border-b">동반자 수</th>
                    <th className="py-2 px-4 border-b">어린이 수</th>
                    <th className="py-2 px-4 border-b">어린이 좌석 수</th>
                    <th className="py-2 px-4 border-b">채식주의자 수</th>
                </tr>
                </thead>
                <tbody>
                {guests?.map((guest: GuestModel) => (
                    <tr key={guest.id}>
                        <td className="py-2 px-4 border-b">{guest.name}</td>
                        <td className="py-2 px-4 border-b">{guest.phoneNumber}</td>
                        <td className="py-2 px-4 border-b">{guest.side}</td>
                        <td className="py-2 px-4 border-b">{guest.attendance ? '예' : '아니오'}</td>
                        <td className="py-2 px-4 border-b">{guest.companion}</td>
                        <td className="py-2 px-4 border-b">{guest.children}</td>
                        <td className="py-2 px-4 border-b">{guest.childrenSeat}</td>
                        <td className="py-2 px-4 border-b">{guest.vegetarian}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default GuestTablePage;