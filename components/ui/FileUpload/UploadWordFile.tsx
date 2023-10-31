import React, { useState, ChangeEvent } from 'react'
import '@styles/upload-file.css'
import Uploader from './Uploader';
import ConvertNowBtn from '../Buttons/ConvertNowBtn';
import Image from 'next/image'
import { useRouter } from 'next/router';
import RenderPdf from '../RenderPdf/RenderPdf';

type UploadFileProps = {
    source: string
}
export default function UploadWordFile({ source }: UploadFileProps) {
    const [fileName, setFileName] = useState('')
	const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);

    const handleFileUpload = (file: File) => {
        // Handle the file upload logic here
        setFileName(file.name);
        console.log("Uploaded file:", file);
    };
    console.log("pdfBlob", pdfBlob)
    
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		console.log(file);
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setPdfBlob(new Blob([reader.result as ArrayBuffer], { type: "application/pdf" })); 
			};
			reader.readAsArrayBuffer(file);
		}
	};
    const router = useRouter()
    const { pathname } = router;
    console.log(pathname);
    return (
        <>
            <div className='col-sm-11 col-md-10 col-lg-10 m-auto '>
                {fileName !== '' ? (
                    <>
                        <div className='d-flex flex-column gap-4 align-items-center'>
                            <div className='col-4 text-center p-2' >
                                <img src={source} width={130} height={130} />
                                <p>{fileName}</p>
                            </div>
                            <ConvertNowBtn text="Convert Now" />
                        </div>
                    </>
                ) : (<Uploader onFileChange={handleFileChange} onFileUpload={handleFileUpload} name={fileName} />)}
            </div>
        </>
    )
}
