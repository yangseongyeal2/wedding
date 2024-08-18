// components/LoadingOverlay.tsx
import React from 'react';
import { useAtomValue } from 'jotai';
import {isLoadingAtom} from "@/app/atom/atom";
import {ClipLoader} from "react-spinners";


export const LoadingOverlay: React.FC = () => {
    const isLoading = useAtomValue(isLoadingAtom);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <ClipLoader color="#ffffff" size={50} />
        </div>
    );
};