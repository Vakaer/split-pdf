import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "@styles/render-pdf.css";
import { motion } from "framer-motion";
const FileSaver = require("file-saver");
import JSZip from "jszip";
import { PDFDocument } from "pdf-lib";
import ConvertNowBtn from "../Buttons/ConvertNowBtn";
import DownloadPdfButton from "../Buttons/downloadPdfBtn";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type PdfViewerProps = {
	pdfBlob: Blob | null;
	setPdfblob: (pdfBlob: Blob) => void;
	selectedPages: number[];
	setSelectedPages: React.Dispatch<React.SetStateAction<number[]>>;
	handleFileChangeWithReset: (event: ChangeEvent<HTMLInputElement>) => void;
	name: string;
};

const PdfViewer = ({
	pdfBlob,
	selectedPages,
	setSelectedPages,
	setPdfblob,
	handleFileChangeWithReset,
	name,
}: PdfViewerProps) => {
	const [numPages, setNumPages] = useState<number>(0);
	const [splitType, setSplitType] = useState<"range" | "page">("range");
	const [startPage, setStartPage] = useState<number>(1);
	const [endPage, setEndPage] = useState<number>(1);
	const [pageSplitType, setPageSplitType] = useState<"separate" | "one">("separate");
	const [isLoading, setIsLoading] = useState(false);
	const [fileName, setFileName] = useState("");
	const horizontalScrollContainerRef = useRef<HTMLDivElement>(null);
	const handleSplitTypeChange = (newSplitType: "range" | "page") => {
		setSplitType(newSplitType);
	};

	const handlePageClick = (pageIndex: number) => {
		setSelectedPages((prevPages) =>
			prevPages.includes(pageIndex)
				? prevPages.filter((page) => page !== pageIndex)
				: [...prevPages, pageIndex]
		);
	};

	const onDocumentLoadSuccess = (document: any) => {
		setNumPages(document.numPages);
		setSelectedPages(Array.from({ length: document.numPages }, (_, index) => index + 1));
	};

	const handleDownload = async (blob: Blob, fileType: string) => {
		const fileNameToUse = fileType === "pdf" ? `${name}.pdf` : `${name}-${Date.now()}.zip`;
		setFileName(fileNameToUse);
		FileSaver.saveAs(blob, fileNameToUse);
	};

	const handleDownloadforSplitPage = async () => {
		if (!pdfBlob) return;

		setIsLoading(true);

		if (pageSplitType === "separate") {
			const zip = new JSZip();
			const pdfBytes = await pdfBlob.arrayBuffer();
			const pdfDoc = await PDFDocument.load(pdfBytes);

			for (const pageIndex of selectedPages) {
				const newPdfDoc = await PDFDocument.create();
				const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageIndex - 1]);
				newPdfDoc.addPage(copiedPage);

				const pdfBytes = await newPdfDoc.save();
				zip.file(`page-${pageIndex}.pdf`, pdfBytes);
			}

			await zip.generateAsync({ type: "blob" }).then((content) => {
				handleDownload(content, "zip");
			});
		} else if (pageSplitType === "one") {
			const pdfBytes = await pdfBlob.arrayBuffer();
			const pdfDoc = await PDFDocument.load(pdfBytes);

			const newPdfDoc = await PDFDocument.create();
			for (const pageIndex of selectedPages) {
				const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageIndex - 1]);
				newPdfDoc.addPage(copiedPage);
			}

			const pdfBytesMerged = await newPdfDoc.save();
			const mergedBlob = new Blob([pdfBytesMerged], { type: "application/pdf" });
			handleDownload(mergedBlob, "pdf");
		}

		setIsLoading(false);
	};

	const handleDownloadForSplitByRange = async () => {
		if (!pdfBlob) return;

		const pdfBytes = await pdfBlob.arrayBuffer();
		const pdfDoc = await PDFDocument.load(pdfBytes);

		const newPdfDoc = await PDFDocument.create();
		for (let pageIndex = startPage - 1; pageIndex < endPage; pageIndex++) {
			const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageIndex]);
			newPdfDoc.addPage(copiedPage);
		}

		const pdfBytesMerged = await newPdfDoc.save();
		const blob = new Blob([pdfBytesMerged], { type: "application/pdf" });
		await FileSaver.saveAs(blob, `${name}-merged.pdf`);
	};

	const handleHorizontalScroll = (event: WheelEvent) => {
		if (event.deltaX !== 0) {
			event.preventDefault();
			const element = document.getElementById("horizontal-scroll-container");
			if (element) {
			  element.scrollLeft += event.deltaX;
			}
		  }
	};

	useEffect(() => {
		const element = horizontalScrollContainerRef.current;
		if (element) {
			element.addEventListener("wheel", handleHorizontalScroll, {
				passive: false,
			});

			return () => {
				element.removeEventListener("wheel", handleHorizontalScroll);
			};
		}
	}, []);

	return (
		<>
			{pdfBlob ? (
				<p>PDF file uploaded</p>
			) : (
				<input type='file' id='file-selector' accept='.pdf' onChange={handleFileChangeWithReset} />
			)}

			{pdfBlob && (
				<div
				id="horizontal-scroll-container"
					ref={horizontalScrollContainerRef}
					className='col-lg-12 overflow-hidden d-flex flex-row document'
				>
					<Document
						className='col-lg-12 overflowX-scroll overflowY-hidden d-flex flex-row document '
						file={pdfBlob}
						onLoadSuccess={onDocumentLoadSuccess}
						loading='pdf loading...'
					>
						{Array.from(new Array(numPages), (_, index) => (
							<motion.div
								key={index}
								transition={{ duration: 0.5 }}
								className='position-relative h-100 text-center'
							>
								<Page
									onClick={() => {
										handlePageClick(index + 1);
									}}
									width={250}
									className='page-style'
									key={`page_${index + 1}`}
									pageNumber={index + 1}
									renderAnnotationLayer={false}
								/>
								<span>Page {index + 1}</span>
								{selectedPages.includes(index + 1) && (
									<img src='check-mark.svg' className='icon' alt='check mark' />
								)}
							</motion.div>
						))}
					</Document>
				</div>
			)}

			{pdfBlob && (
				<>
					<form className='d-flex flex-column gap-3'>
						<div className='d-flex justify-content-center gap-5'>
							<div className='form-check'>
								<label className='form-check-label'>Split by Range</label>
								<input
									className='form-check-input'
									name='splitByRangeRadio'
									id='splitByRangeRadioId'
									type='radio'
									value='range'
									checked={splitType === "range"}
									onChange={() => handleSplitTypeChange("range")}
								/>
							</div>
							<div className='form-check'>
								<label className='form-check-label'> Split by Page</label>
								<input
									className='form-check-input'
									name='splitByPageRadioDefault'
									id='splitByPageRadioDefaultId'
									type='radio'
									value='page'
									checked={splitType === "page"}
									onChange={() => handleSplitTypeChange("page")}
								/>
							</div>
						</div>

						<div className='d-flex justify-content-center gap-3'>
							{splitType === "range" && (
								<div className='d-flex'>
									<div className='input-group input-group-sm mb-3'>
										<span className='input-group-text' id='inputGroup-from-number'>
											From
										</span>
										<input
											className='form-control'
											aria-label='enter number from where you want to split pdf'
											aria-describedby='inputGroup-from-number'
											type='number'
											placeholder='From'
											value={startPage}
											onChange={(e) => setStartPage(Number(e.target.value))}
										/>
									</div>
									<div className='input-group input-group-sm mb-3'>
										<span className='input-group-text' id='inputGroup-to-number'>
											to:
										</span>
										<input
											className='form-control'
											aria-label='enter number  where you want to end splitting pdf'
											aria-describedby='inputGroup-to-number'
											type='number'
											placeholder='To'
											value={endPage}
											onChange={(e) => setEndPage(Number(e.target.value))}
										/>
									</div>
								</div>
							)}

							{splitType === "page" && (
								<>
									<div className='form-check'>
										<label className='form-check-label' htmlFor='separateFilesRadioDefault'>
											Separate Files
										</label>
										<input
											className='form-check-input'
											name='separateFilesRadioDefault'
											id='separateFilesRadioDefaultId'
											type='radio'
											value='separate'
											checked={pageSplitType === "separate"}
											onChange={() => setPageSplitType("separate")}
										/>
									</div>
									<div className='form-check'>
										<label className='form-check-label' htmlFor='oneFileRadioDefault'>
											One File
										</label>
										<input
											className='form-check-input'
											name='oneFileRadioDefault'
											id='oneFileRadioDefaultId'
											type='radio'
											value='one'
											checked={pageSplitType === "one"}
											onChange={() => setPageSplitType("one")}
										/>
									</div>
								</>
							)}
						</div>
					</form>

					{splitType === "range" ? (
						isLoading ? (
							<div>Loading...</div>
						) : (
							<DownloadPdfButton
								handleOnClick={handleDownloadForSplitByRange}
								text='Download Split by Range'
							/>
						)
					) : isLoading ? (
						<div>Loading...</div>
					) : (
						<DownloadPdfButton
							handleOnClick={handleDownloadforSplitPage}
							text='Download Split by Pages'
						/>
					)}
				</>
			)}
		</>
	);
};

export default PdfViewer;
