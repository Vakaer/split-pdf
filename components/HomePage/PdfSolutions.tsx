import { ToolItem } from "@/ui/ToolItem/ToolItem";
export function PdfSolutions() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 my-5 py-5">
                        <h1 className="text-center text-red fw-bold mb-5 pb-5">PDF SOLUTIONS</h1>
                        <div className="d-flex flex-wrap">
                            <ToolItem title="Excel to pdf"
                                description="Convert xls format to pdf format by using excel to pdf converter"
                                source="excel-to-pdf.svg"
                                url="/excel-to-pdf" />
                            <ToolItem title="Word to pdf"
                                description="Convert xls format to pdf format by using excel to pdf converter"
                                source="word-to-pdf.svg"
                                url="/word-to-pdf" />
                            <ToolItem title="Pdf Split"
                                description="Convert xls format to pdf format by using excel to pdf converter"
                                source="split-pdf.svg"
                                url="/split-pdf" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}