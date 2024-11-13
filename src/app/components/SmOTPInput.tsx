'use client'
import React, {useEffect, useState} from "react";
import {GetProps, Input} from "antd";

export interface SmOTPInputProps extends GetProps<typeof Input.OTP> {
    withTimer?: boolean
    time: number;
    timerTextClassName?: string
}

const SmOTPInput: React.FC<SmOTPInputProps> = ({
    withTimer = true,
    size = "middle",
    time = 1,
    className = "",
    rootClassName = "",
    length = 6,
    timerTextClassName = ""
}) => {
    const [_timer, setTimer] = useState<string>()
    useEffect(() => {
        let totalSeconds: number = time * 60;
        const timerInterval = setInterval(() => {
            totalSeconds--;

            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                console.log("Timer finished!");
            } else {
                setTimer(formatTime(totalSeconds))
            }
        }, 1000);
    }, []);
    const formatTime = (seconds: number): string => {
        const mm = Math.floor(seconds / 60).toString().padStart(2, "0");
        const ss = (seconds % 60).toString().padStart(2, "0");
        return `${mm}:${ss}`;
    };

    return(
        <div className={"w-screen flex flex-col items-start"}>
            {withTimer && (
                <p className={timerTextClassName}>{_timer}</p>
            )}
            <Input.OTP length={length} className={className} rootClassName={rootClassName} size={size}></Input.OTP>
        </div>
    )
}

export default SmOTPInput;
