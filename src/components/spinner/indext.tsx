'use client'

import { ProgressBar } from "react-loader-spinner"

export default function Spinner() {
    return (
        <ProgressBar 
            height={'120'}
            width={'300'}
            ariaLabel="Common Loader"
            borderColor="#ffffff"
            barColor="#1d74e6"
            visible={true}
            wrapperStyle={{
                display: "block",
                margin: "auto",
            }} 
        />
    )
}