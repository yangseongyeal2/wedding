import React, {useState} from 'react';
import {toast, ToastContainer} from "react-toastify";
import {useLoading} from "@/app/hooks/useLoading";
import {guestRepository} from "@/app/repository/r_guest";
import {GuestModel} from "@/app/model/guest";
import {generateRandomId} from "@/app/lib/utils";
import {Timestamp} from "firebase/firestore";

interface RSVPModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RSVPModal: React.FC<RSVPModalProps> = ({isOpen, onClose}) => {
    const [side, setSide] = useState('');
    const [attendance, setAttendance] = useState<boolean | null>(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [companion, setCompanion] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {showLoading, hideLoading} = useLoading()

    if (!isOpen) return null;

    const onClickSend = async () => {
        showLoading();
        if (side === '') {
            toast.error("어느 분의 하객이신가요?", {
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
            companion: companion
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
                        <h2 className="text-2xl font-normal leading-snug opacity-90">참석의사 전달</h2>
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
                        축하해 주시는 한 분 한 분을 소중히 모실 수 있도록 참석 의사를 사전에 전달해 주시길 부탁드립니다.
                    </p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="text-sm font-medium text-[#666666] flex items-center mb-2">
                            어느 분의 하객이신가요?
                            <span className="ml-1 w-1 h-1 bg-[#E9CBCF] rounded-full"></span>
                        </label>
                        <div className="flex gap-x-2">
                            <button
                                className={`w-1/2 py-3 rounded-lg ${
                                    side === '신랑' ? 'bg-[#c2b0a2] text-white' : 'bg-white text-[#999999]'
                                }`}
                                onClick={() => setSide('신랑')}
                            >
                                신랑
                            </button>
                            <button
                                className={`w-1/2 py-3 rounded-lg ${
                                    side === '신부' ? 'bg-[#c2b0a2] text-white' : 'bg-white text-[#999999]'
                                }`}
                                onClick={() => setSide('신부')}
                            >
                                신부
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-[#666666] flex items-center mb-2">
                            참석하실 수 있나요?
                            <span className="ml-1 w-1 h-1 bg-[#E9CBCF] rounded-full"></span>
                        </label>
                        <div className="flex gap-x-2">
                            <button
                                className={`w-1/2 py-3 rounded-lg ${
                                    attendance === true ? 'bg-[#c2b0a2] text-white' : 'bg-white text-[#999999]'
                                }`}
                                onClick={() => setAttendance(true)}
                            >
                                참석할게요
                            </button>
                            <button
                                className={`w-1/2 py-3 rounded-lg ${
                                    attendance === false ? 'bg-[#c2b0a2] text-white' : 'bg-white text-[#999999]'
                                }`}
                                onClick={() => setAttendance(false)}
                            >
                                참석이 어려워요
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-[#666666] flex items-center mb-2">
                            성함을 알려주세요
                            <span className="ml-1 w-1 h-1 bg-[#E9CBCF] rounded-full"></span>
                        </label>
                        <input
                            className="w-full px-3 py-2 h-12 rounded-md shadow-md placeholder-[#999999]"
                            placeholder="참석자 본인 성함"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-[#666666] mb-2">확인 연락처</label>
                        <input
                            className="w-full px-3 py-2 h-12 rounded-md shadow-md placeholder-[#999999]"
                            placeholder="핸드폰 번호 뒤 4자리"
                            maxLength={4}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-[#666666] mb-2">동행 인원을 알려주세요</label>
                        <input
                            className="w-full px-3 py-2 h-12 rounded-md shadow-md placeholder-[#999999]"
                            placeholder="0"
                            maxLength={2}
                            value={companion}
                            type={"number"}
                            onChange={(e) => setCompanion(parseInt(e.target.value))}
                        />
                    </div>
                </div>

                <button
                    className="w-full bg-[#c2b0a2] text-white rounded-lg h-12 mt-6"
                    onClick={onClickSend}
                >
                    전달하기
                </button>
            </div>

        </div>
    );
};

export default RSVPModal;