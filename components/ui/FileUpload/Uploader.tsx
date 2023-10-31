import React, { useCallback, useState, ChangeEvent } from "react";
import { useDropzone } from "react-dropzone";
import '@styles/upload-file.css'

interface FileUploaderProps {
    onFileUpload?: (file: File) => void,
    onFileChange?: (event: ChangeEvent<HTMLInputElement>) => void, 
    name?: string,
    file?: File
}

function UploadFileComponent(props: any) {
    return (
        <div className='container-upload col-12'>
            <div className='header p-5'>
                <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                    <g
                        id='SVGRepo_tracerCarrier'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    ></g>
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
                <p>{props.text}</p>
            <p>{props.name ? props.name : "Not selected file"}</p>
            </div>
        
        </div>
    )
}
const Uploader = ({ onFileUpload, name,onFileChange }: FileUploaderProps) => {
    const [files, setFiles] = useState([]);
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            setFiles((prevFiles): any => [...prevFiles, ...acceptedFiles]);
            if (acceptedFiles && acceptedFiles.length > 0) {
                {onFileUpload && onFileUpload(acceptedFiles[0])}
            }
        },
        [onFileUpload]
    );
    const handleDelete = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
      };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} onChange={onFileChange} />
                {isDragActive ? (
                    <UploadFileComponent text="Drop files here!" name={name} />
                ) : (
                    <UploadFileComponent text="Browse File to upload!" name={name} />
                )}
            </div>
        </>
    );
};

export default Uploader;
