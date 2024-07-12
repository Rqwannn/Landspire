"use client"
import Image from "next/image";
import Header from "../components/Header";
import { useRef, useState } from "react";

const Formsertif = () => {
    const [change, isChange] = useState(false)

    function dataMasuk(e) {
        const file = e.target;
    
        // Check if any file selected
        for (let i = 0; i <= file.files.length - 1; i++) {
            const fileSize = file.files.item(i).size
            const actfileSize = Math.round((fileSize / 1024))
    
            if (actfileSize > 2096) {
                document.getElementById("warning").innerText = "File Terlalu Besar!"
                e.target.value = "";
            } else {
                document.getElementById("warning").innerText = ""
                isChange(!change)
            }
        }
    }        

    return (
        <div className=" my-8 mx-12">
            <Header textHeader="DIGITALISASI SERTIFIKAT HAT"/>
            <form className="form mt-8 grid grid-cols-1 lg:grid-cols-3 justify-center">
                <div className="uploadCertificate flex flex-col p-4 gap-4">
                    <p>UPLOAD CERTIFICATE</p>
                    <div className={`input gap-2 flex flex-col`}>
                        <label htmlFor="certificateUpload" className={`cursor-pointer ${change ? "hidden" : "visible"}`}>
                            <Image
                                src="/upload.png"
                                width={250}
                                height={250}
                                alt="Error"
                            />
                        </label>
                        <p id="warning" className="text-landspire_red"></p>
                        <input accept="application/pdf" className={change ? "visible" : "hidden"} type="file" name="certificateUpload" id="certificateUpload" onChange={dataMasuk}/>
                    </div>
                </div>
                <div className="form_input bg-white p-4">
                    <div className="flex flex-col gap-2">
                        <div className="input gap-2 flex flex-col">
                            <label htmlFor="name">Name<span className="text-landspire_red">*</span></label>
                            <input className="border-2 border-gray-300 rounded-md p-1" type="text" name="name" id="name"/>
                        </div>
                        <div className="input gap-2 flex flex-col">
                            <label htmlFor="nik">NIK<span className="text-landspire_red">*</span></label>
                            <input className="border-2 border-gray-300 rounded-md p-1" type="text" name="nik" id="nik"/>
                        </div>
                        <div className="input gap-2 flex flex-col">
                            <label htmlFor="certificateId">Certificate ID<span className="text-landspire_red">*</span></label>
                            <input className="border-2 border-gray-300 rounded-md p-1" type="text" name="certificateId" id="certificateId"/>
                        </div>
                        <div className="input gap-2 flex flex-col">
                            <label htmlFor="name">Ownership Rights<span className="text-landspire_red">*</span></label>
                            <select className="border-2 border-gray-300 rounded-md p-1" name="ownershipRights" id="ownershipRights">
                                <option value="test">Freehold, Leasehold, Land Use Rights, etc</option>
                            </select>
                        </div>
                        <div className="input gap-2 flex flex-col">
                            <label htmlFor="dateOfIssuance">Date of Issuance<span className="text-landspire_red">*</span></label>
                            <input className="border-2 border-gray-300 rounded-md p-1" type="date" name="dateOfIssuance" id="dateOfIssuance"/>
                        </div>
                        <div className="input gap-2 flex flex-col">
                            <label htmlFor="landAddress">Land Address<span className="text-landspire_red">*</span></label>
                            <input className="border-2 border-gray-300 rounded-md p-1" type="text" name="landAddress" id="landAddress"/>
                        </div>
                        <div className="input gap-2 flex flex-col">
                            <label htmlFor="landArea">Land Area<span className="text-landspire_red">*</span></label>
                            <input className="border-2 border-gray-300 rounded-md p-1" type="text" name="landArea" id="landArea"/>
                        </div>
                        <div className="submitbutton mt-2">
                            <button type="submit" className="block w-[100%] bg-landspire_blue text-white rounded-md p-2">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="previewCertificate p-4 pr-[5rem] lg:pl-[5rem] flex flex-col gap-4">
                    <p>PREVIEW CERTIFICATE</p>
                    <div className="preview h-[30rem] border-2 border-gray-400">

                    </div>
                </div>
            </form>
        </div>
    )
};

export default Formsertif;