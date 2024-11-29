'use client'

import React, {useState} from "react";
import {Input} from "antd";
import {InputProps} from "antd";
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";

export interface IPasswordInputProps extends InputProps {
    inputName: string;
    label: string;
    placeholder: string;
    fullWidth?: boolean;
    labelClass: string;
    disabled?: boolean;
    inputClass?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SmPasswordInput: React.FC<IPasswordInputProps> = ({
    inputName,
    label,
    placeholder,
    fullWidth = false,
    labelClass = "",
    size = "small",
    prefix,
    value = "",
    disabled = false,
    inputClass = "",
    onChange = () => {}
}) => {
    const [status, setStatus] = useState("password")
    return(
        <div className={`input-wrapper flex flex-col gap-2 ${fullWidth ? 'w-full' : ''}`}>
            <label className={labelClass} htmlFor={inputName}>
                {label}
            </label>
            <Input
                prefix={prefix}
                suffix={
                    status === "password"
                        ? <EyeOutlined onClick={() => {setStatus("text")}} />
                        : <EyeInvisibleOutlined onClick={() => {setStatus("password")}} />
                }
                size={size}
                value={value}
                id={inputName}
                placeholder={placeholder}
                disabled={disabled}
                type={status}
                onChange={(e) => onChange(e.target.value)}
                className={inputClass}
            />
        </div>
    )
}


export default SmPasswordInput;
