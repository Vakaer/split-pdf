import React, { useState } from 'react'
import '@styles/upload-file.css'
import Uploader from './Uploader';
import ConvertNowBtn from '../Buttons/ConvertNowBtn';
import Image from 'next/image'
import { useRouter } from 'next/router';

type UploadFileProps = {
    source: string
}
export default function UploadFile({ source }: UploadFileProps) {
    const [fileName, setFileName] = useState('')
    const handleFileUpload = (file: File) => {
        // Handle the file upload logic here
        setFileName(file.name);
        console.log("Uploaded file:", file);
    };
    const router = useRouter()
    const { pathname } = router;
    console.log(pathname);
    return (
        <>
            <div className='col-sm-11 col-md-10 col-lg-6 m-auto '>
                {fileName !== '' ? (
                    <>
                        <div className='d-flex flex-column gap-43 align-items-center'>
                            <div className='col-4 text-center p-2' >
                                <Image src={source} alt='upload-icon' width={130} height={130} />
                                <p>{fileName}</p>
                            </div>
                            <ConvertNowBtn text="Convert Now" />
                        </div>
                    </>
                ) : (<Uploader onFileUpload={handleFileUpload} name={fileName} />)}
            </div>
        </>
    )
}
