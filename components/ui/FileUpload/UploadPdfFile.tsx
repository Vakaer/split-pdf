import React, { useState, ChangeEvent } from "react";
import "@styles/upload-file.css";
import Uploader from "./Uploader";
import ConvertNowBtn from "../Buttons/ConvertNowBtn";
import Image from "next/image";
import { useRouter } from "next/router";
import RenderPdf from "../RenderPdf/RenderPdf";

type UploadFileProps = {
	source: string;
};
export default function UploadPdfFile({ source }: UploadFileProps) {
	const [fileName, setFileName] = useState("");
	const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
	const [selectedPages, setSelectedPages] = useState<number[]>([]);

	console.log("selectedPages", selectedPages);
	console.log("pdfBlob", pdfBlob);
	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		console.log(file);
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setFileName(file.name);
				setPdfBlob(new Blob([reader.result as ArrayBuffer], { type: "application/pdf" }));
			};
			reader.readAsArrayBuffer(file);
		}
	};
	const handleFileChangeWithReset = (event: ChangeEvent<HTMLInputElement>) => {
		setSelectedPages([]); // Reset selectedPages when a new file is uploaded
		handleFileChange(event);
	};
	const router = useRouter();
	const { pathname } = router;
	console.log(pathname);
	return (
		<>
			{pdfBlob ? (
				<div className='col-sm-11 col-md-10 col-lg-10 m-auto '>
					<>
						<div className='d-flex flex-column gap-4 align-items-center'>
							<RenderPdf
								name={fileName}
								pdfBlob={pdfBlob}
								setPdfblob={setPdfBlob}
								// handleFileChange={handleFileChange}
								selectedPages={selectedPages}
								setSelectedPages={setSelectedPages}
								handleFileChangeWithReset={handleFileChangeWithReset}
							/>
						</div>
					</>
				</div>
			) : (
				<>
					<label htmlFor="file-selector" className='container-upload col-12'>
						<div className='header p-5'>
							<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
								<g id='SVGRepo_iconCarrier'>
									<path
										d='M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15'
										stroke='#000000'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									></path>
								</g>
							</svg>

							<p> Not selected file</p>
						</div>
						<input
							type='file'
							id='file-selector'
							accept='.pdf'
							className="d-none"
							onChange={handleFileChangeWithReset}
						/>
					</label>
				</>
			)}
		</>
	);
}
