import Breadcrumb from "@/ui/BreadCrumb/BreadCrumb";
import UploadExcelFile from "@/ui/FileUpload/UploadExcelFile";
import React from "react";

export default function index() {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-12 mt-5'>
						<Breadcrumb />
						<h1 className='text-center mb-4'>EXCEL TO PDF</h1>
						<p className='text-center h6 mb-2'>
							Utilize an Excel to PDF converter to transform XLS files into PDF format, allowing you
							to save Excel documents as PDFs.
						</p>
						<UploadExcelFile source='/excel-to-pdf.svg' />
					</div>
				</div>
			</div>
		</>
	);
}
