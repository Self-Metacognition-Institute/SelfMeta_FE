'use client'
import React from "react";
import {GetProps, Input} from "antd";

export interface SmOTPInputProps extends GetProps<typeof Input.OTP>{
    label: string;
}

const SmOTPInput: React.FC<SmOTPInputProps> = ({
    label
}) => {
    return(
        <div className={"w-screen flex flex-col items-start"}>
            <div >{label}</div>
            <Input.OTP></Input.OTP>
        </div>
    )
}

export default SmOTPInput;
