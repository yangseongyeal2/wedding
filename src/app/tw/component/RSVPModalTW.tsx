import React, {useState} from 'react';
import {toast} from "react-toastify";
import {useLoading} from "@/app/hooks/useLoading";
import {guestRepository} from "@/app/repository/r_guest";
import {GuestModel} from "@/app/model/guest";
import {generateRandomId} from "@/app/lib/utils";
import {Timestamp} from "firebase/firestore";

interface RSVPModalProps {
    isOpen: boolean;
    onClose: () => void;
}


export default function RSVPModalTW({isOpen, onClose}: RSVPModalProps) {
    const [side, setSide] = useState('');
    const [attendance, setAttendance] = useState<boolean | null>(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [companion, setCompanion] = useState<number>(0);
    const [children, setChildren] = useState<number>(0);
    const [childrenSeat, setChildrenSeat] = useState<number>(0);
    const [vegetarian, setVegetarian] = useState<number>(0);
    //const [isModalOpen, setIsModalOpen] = useState(false);
    const {showLoading, hideLoading} = useLoading()

    if (!isOpen) return null;

    const onClickSend = async () => {
        showLoading();
        if (side === '') {
            toast.error("與新人的關係", {
                position: "bottom-center",
            });
            hideLoading()
            return;
        }
        if (attendance === null) {
            toast.error("참석하실 수 있나요?", {
                position: "bottom-center",
            });
            hideLoading()
            return;
        }
        if (name === '') {
            toast.error("성함을 알려주세요", {
                position: "bottom-center",
            });
            hideLoading()
            return;
        }
        if (phone === '') {
            toast.error("확인 연락처를 알려주세요.", {
                position: "bottom-center",
            });
            hideLoading()
            return;
        }
        console.log("toast!")
        const guest = new GuestModel({
            id: generateRandomId(),
            name: name,
            phoneNumber: phone,
            side: side,
            attendance: attendance,
            createdAt: Timestamp.now(),
            companion: companion,
            children:children,
            childrenSeat: childrenSeat,
            vegetarian:vegetarian,
        })
        await guestRepository.uploadGuest(guest)
        toast.success("참석 의사가 전달되었습니다.", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
        hideLoading()
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-[#f8f8f8] w-full max-w-lg mx-4 p-6 rounded-md max-h-[90vh] overflow-y-auto">
                <div className="text-center mb-6">
                    <div className={'flex flex-row justify-between'}>
                        <div className={'w-6 h-6'}></div>
                        <h2 className="text-2xl font-normal leading-snug opacity-90">婚禮出席統計回函</h2>
                        <button
                            className=" right-4 top-4 text-gray-500 hover:text-gray-700"
                            onClick={onClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>

                    <p className="text-sm text-[#9b8d82] mt-2 px-6">
                        為了讓您在參加我們婚禮時能留下美好回憶，請提供以下資訊給我們，
                        無論您能不能來現場祝福我們，都請別有壓力。 ：）
                    </p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="text-sm font-medium text-[#666666] flex items-center mb-2">
                            與新人的關係
                            <span className="ml-1 w-1 h-1 bg-[#E9CBCF] rounded-full"></span>
                        </label>
                        <div className="flex gap-x-2">
                            <button
                                className={`w-1/2 py-3 rounded-lg ${
                                    side === '女方家人' ? 'bg-[#c2b0a2] text-white' : 'bg-white text-[#999999]'
                                }`}
                                onClick={() => setSide('女方家人')}
                            >
                                女方家人
                            </button>
                            <button
                                className={`w-1/2 py-3 rounded-lg ${
                                    side === '女方親友' ? 'bg-[#c2b0a2] text-white' : 'bg-white text-[#999999]'
                                }`}
                                onClick={() => setSide('女方親友')}
                            >
                                女方親友
                            </button>
                            <button
                                className={`w-1/2 py-3 rounded-lg ${
                                    side === '女方同事' ? 'bg-[#c2b0a2] text-white' : 'bg-white text-[#999999]'
                                }`}
                                onClick={() => setSide('女方同事')}
                            >
                                女方同事
                            </button>
                            <button
                                className={`w-1/2 py-3 rounded-lg ${
                                    side === '其他' ? 'bg-[#c2b0a2] text-white' : 'bg-white text-[#999999]'
                                }`}
                                onClick={() => setSide('其他')}
                            >
                                其他
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-[#666666] flex items-center mb-2">
                            是否出席
                            <span className="ml-1 w-1 h-1 bg-[#E9CBCF] rounded-full"></span>
                        </label>
                        <div className="flex gap-x-2">
                            <button
                                className={`w-1/2 py-3 rounded-lg ${
                                    attendance === true ? 'bg-[#c2b0a2] text-white' : 'bg-white text-[#999999]'
                                }`}
                                onClick={() => setAttendance(true)}
                            >
                                出席
                            </button>
                            <button
                                className={`w-1/2 py-3 rounded-lg ${
                                    attendance === false ? 'bg-[#c2b0a2] text-white' : 'bg-white text-[#999999]'
                                }`}
                                onClick={() => setAttendance(false)}
                            >
                                無法出席，但祝福滿滿
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-[#666666] flex items-center mb-2">
                            姓名
                            <span className="ml-1 w-1 h-1 bg-[#E9CBCF] rounded-full"></span>
                        </label>
                        <input
                            className="w-full px-3 py-2 h-12 rounded-md shadow-md placeholder-[#999999]"
                            placeholder="姓名"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-[#666666] flex items-center mb-2">
                            Line ID
                            {/*<span className="ml-1 w-1 h-1 bg-[#E9CBCF] rounded-full"></span>*/}
                        </label>

                        <input
                            className="w-full px-3 py-2 h-12 rounded-md shadow-md placeholder-[#999999]"
                            placeholder="Line ID"
                            // maxLength={4}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-[#666666] flex items-center mb-2">
                            預計幾位大人出席呢
                            <span className="ml-1 w-1 h-1 bg-[#E9CBCF] rounded-full"></span>
                        </label>
                        <input
                            className="w-full px-3 py-2 h-12 rounded-md shadow-md placeholder-[#999999]"
                            placeholder="0"
                            maxLength={2}
                            value={companion}
                            type={"number"}
                            onChange={(e) => setCompanion(parseInt(e.target.value))}
                        />
                    </div>
                    <div>

                        <label className="text-sm font-medium text-[#666666] flex items-center mb-2">
                            預計幾位小孩同行呢
                            <span className="ml-1 w-1 h-1 bg-[#E9CBCF] rounded-full"></span>
                        </label>
                        <input
                            className="w-full px-3 py-2 h-12 rounded-md shadow-md placeholder-[#999999]"
                            placeholder="0"
                            maxLength={2}
                            value={children}
                            type={"number"}
                            onChange={(e) => setChildren(parseInt(e.target.value))}
                        />
                    </div>
                    <div>
                        {/*<label*/}
                        {/*    className="text-sm font-medium text-[#666666] mb-2">需要幾張嬰兒椅（小朋友需要單獨座位的話請輸入0）</label>*/}
                        <label className="text-sm font-medium text-[#666666] flex items-center mb-2">
                            需要幾張嬰兒椅（小朋友需要單獨座位的話請輸入0）
                            <span className="ml-1 w-1 h-1 bg-[#E9CBCF] rounded-full"></span>
                        </label>
                        <input
                            className="w-full px-3 py-2 h-12 rounded-md shadow-md placeholder-[#999999]"
                            placeholder="0"
                            maxLength={2}
                            value={childrenSeat}
                            type={"number"}
                            onChange={(e) => setChildrenSeat(parseInt(e.target.value))}
                        />
                    </div>
                    <div>
                        {/*<label className="text-sm font-medium text-[#666666] mb-2">我們的素食人數  （若無請輸入0）</label>*/}
                        <label className="text-sm font-medium text-[#666666] flex items-center mb-2">
                            我們的素食人數  （若無請輸入0）
                            <span className="ml-1 w-1 h-1 bg-[#E9CBCF] rounded-full"></span>
                        </label>
                        <input
                            className="w-full px-3 py-2 h-12 rounded-md shadow-md placeholder-[#999999]"
                            placeholder="0"
                            maxLength={2}
                            value={vegetarian}
                            type={"number"}
                            onChange={(e) => setVegetarian(parseInt(e.target.value))}
                        />
                    </div>
                </div>

                <button
                    className="w-full bg-[#c2b0a2] text-white rounded-lg h-12 mt-6"
                    onClick={onClickSend}
                >
                    按鍵回覆
                </button>
            </div>
        </div>
    );
}