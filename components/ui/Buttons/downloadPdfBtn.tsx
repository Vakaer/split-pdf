import React,{MouseEventHandler} from "react";
import '@styles/downloadPdf.css'

type downloadPdfButtonProps = {
    text: string,
    handleOnClick?:MouseEventHandler<HTMLButtonElement>;
}
export default function DownloadPdfButton({text, handleOnClick}:downloadPdfButtonProps) {
	return (
		<button className="download-pdf-button"> 
			<span className='text-uppercase' onClick={handleOnClick}>{text}</span>
		</button>
	);
}
