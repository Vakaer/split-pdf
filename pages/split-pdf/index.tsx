import React from "react";
import Breadcrumb from "@/ui/BreadCrumb/BreadCrumb";
import UploadFile from "@/ui/FileUpload/UploadPdfFile";
import UploadPdfFile from "@/ui/FileUpload/UploadPdfFile";

export default function index() {
	return (
		<>
			<>
				<div className='container'>
					<div className='row'>
						<div className='col-12 mt-5'>
							<Breadcrumb />
							<h1 className='text-center mb-4 text-uppercase'>split pdf</h1>
							<p className='text-center h6 mb-2'>
								Utilize an Excel to PDF converter to transform XLS files into PDF format, allowing
								you to save Excel documents as PDFs.
							</p>
							<UploadPdfFile source='/split-pdf.svg' />
						</div>
					</div>
				</div>
			</>
		</>
	);
}
