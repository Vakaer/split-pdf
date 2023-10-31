import React,{MouseEventHandler} from 'react'
import '@styles/convert-now-btn.css'
type convertNowButtonProps = {
    text: string,
    handleOnClick?:MouseEventHandler<HTMLButtonElement>;
}

export default function ConvertNowBtn({text, handleOnClick}: convertNowButtonProps) {
    return (
        <button onClick={handleOnClick} className="button">
            <svg className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
            <div className="text">
                {text}
            </div>
        </button>
    )
}
