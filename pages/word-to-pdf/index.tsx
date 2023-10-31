import React from "react";
import Breadcrumb from "@/ui/BreadCrumb/BreadCrumb";
import UploadFile from "@/ui/FileUpload/UploadPdfFile";
import UploadWordFile from "@/ui/FileUpload/UploadWordFile";

export default function index() {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-12 mt-5'>
						<Breadcrumb />
						<h1 className='text-center mb-4 text-uppercase'>word TO PDF</h1>
						<p className='text-center h6 mb-2'>
							Utilize an Excel to PDF converter to transform XLS files into PDF format, allowing you
							to save Excel documents as PDFs.
						</p>
						<UploadWordFile source='/word-to-pdf.svg' />
					</div>
				</div>
			</div>
		</>
	);
}
