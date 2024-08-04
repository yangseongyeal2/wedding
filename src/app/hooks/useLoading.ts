// hooks/useLoading.ts
import { useSetAtom } from 'jotai';
import {isLoadingAtom} from "@/app/atom/atom";


export const useLoading = () => {
    const setIsLoading = useSetAtom(isLoadingAtom);

    const showLoading = () => setIsLoading(true);
    const hideLoading = () => setIsLoading(false);

    return { showLoading, hideLoading };
};