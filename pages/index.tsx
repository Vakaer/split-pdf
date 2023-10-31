import React from "react";
import "@styles/globals.css";
import '@styles/common-styles.css'

import { UploadSection } from "@/HomePage/UploadSection";
import { WhyChooseUs } from "@/HomePage/WhyChooseUs";
import { PdfSolutions } from "@/HomePage/PdfSolutions";


export default function index() {
    return (
        <>
            <UploadSection/>
            <WhyChooseUs />
            <PdfSolutions />
        </>
    );
}
