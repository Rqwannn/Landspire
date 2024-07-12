"use client"
import { Files, Laptop, Paperclip, PaperPlaneTilt, Scales, Wind } from "@phosphor-icons/react";

const Chatbox = () => {
    return (
        <div className="chatBox mx-4 h-full pt-10 md:h-[calc(100svh-64px)] flex flex-col justify-stretch items-stretch relative">
            <div className="menu_center h-full flex flex-col justify-center gap-14">
                <div className="logo flex justify-center gap-3">
                    <img src="/assets/logos/logo.png" alt="lanspire" width={42} height={42} />
                    <p className="title italic text-3xl ">Landspiree</p>
                </div> 
                <div className="menu_lis text-sm flex flex-wrap justify-center gap-4 px-8">
                    <div className="menu_item transition-all cursor-pointer hover:bg-gray-300 w-[15rem] flex flex-col border-[3px] border-gray-300 gap-5 p-4 rounded-md">
                        <Laptop size={32} color="#d22d74" weight="light" />
                        <p className="w-[80%]">Proses digitalisasi sertifikat tanah</p>
                    </div>
                    <div className="menu_item transition-all cursor-pointer hover:bg-gray-300 w-[15rem] flex flex-col border-[3px] border-gray-300 gap-5 p-4 rounded-md">
                        <Scales size={32} color="#2d64d2" weight="light" />
                        <p className="w-[80%]">Pelaporan kasus mafia tanah di desa</p>
                    </div>
                    <div className="menu_item transition-all cursor-pointer hover:bg-gray-300 w-[15rem] flex flex-col border-[3px] border-gray-300 gap-5 p-4 rounded-md">
                        <Files size={32} color="#21914c" weight="light" />
                        <p className="w-[80%]">Permohonan balik
                        nama sertipikat HAT</p>
                    </div>
                    <div className="menu_item transition-all cursor-pointer hover:bg-gray-300 w-[15rem] flex flex-col border-[3px] border-gray-300 gap-5 p-4 rounded-md">
                        <Wind size={32} color="#eae210" weight="light" />
                        <p className="w-[80%]">Cara membuat 
                        sertipikat tanah mandiri</p>
                    </div>
                </div>
            </div>
            <div className="text_box py-4 px-12 flex justify-stretch items-center">
                <div className="flex py-2 px-4 rounded-md border-2 border-gray-300 justify-center items-center w-full gap-3">
                    <button>
                        <Paperclip size={24} color="#4e4d46" weight="light" />
                    </button>
                    <input className="bg-transparent outline-none block w-full" type="text" />
                    <button>
                        <PaperPlaneTilt size={24} color="#4e4d46" weight="fill" />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Chatbox;