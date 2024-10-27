import React, { useState } from 'react';
import {Card} from "@mui/material";

const AccountSection = () => {
    const [copied, setCopied] = useState(false);
    const [copied2, setCopied2] = useState(false);
    const accountInfo = {
        bank: '국민',
        number: '778802-04-189882',
        holder: '양성열'
    };

    const accountInfoDad = {
        bank: '국민',
        number: '778801-04-465518',
        holder: '양기탁'
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(accountInfo.number);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };
    const handleCopy2 = async () => {
        try {
            await navigator.clipboard.writeText(accountInfoDad.number);
            setCopied2(true);
            setTimeout(() => setCopied2(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className={'flex flex-col justify-center items-center p-5 gap-3'}>
            <h2 className="text-lg font-semibold text-sky-500">마음 전하실 곳</h2>
            <Card className="max-w-md w-full mx-auto bg-slate-50">
                <div className="p-4">
                    <div className="flex items-center justify-between mb-4">

                        <h2 className="text-lg font-semibold text-gray-800">신랑측 계좌번호</h2>
                        <button
                            onClick={handleCopy}
                            className="px-3 py-1 rounded-lg hover:bg-slate-200 transition-colors text-sm"
                            aria-label="계좌번호 복사"
                        >
                            {copied ? '복사됨' : '복사'}
                        </button>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center text-gray-700">
                            <span className="font-medium">{accountInfo.bank}</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="font-medium">{accountInfo.number}</span>
                        </div>
                        <div className="text-gray-700">
                            <span className="font-medium">{accountInfo.holder}</span>
                        </div>
                    </div>
                </div>
            </Card>
            <Card className="max-w-md w-full mx-auto bg-slate-50">
                <div className="p-4">
                    <div className="flex items-center justify-between mb-4">

                        <h2 className="text-lg font-semibold text-gray-800">신랑측 계좌번호</h2>
                        <button
                            onClick={handleCopy2}
                            className="px-3 py-1 rounded-lg hover:bg-slate-200 transition-colors text-sm"
                            aria-label="계좌번호 복사"
                        >
                            {copied2 ? '복사됨' : '복사'}
                        </button>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center text-gray-700">
                            <span className="font-medium">{accountInfoDad.bank}</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="font-medium">{accountInfoDad.number}</span>
                        </div>
                        <div className="text-gray-700">
                            <span className="font-medium">{accountInfoDad.holder}</span>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default AccountSection;