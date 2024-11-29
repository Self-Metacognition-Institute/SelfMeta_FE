'use client'

import React, {ChangeEvent, useState} from "react";
import {Input, Tooltip} from "antd";
import {InputProps} from "antd";


export interface IInputProps extends InputProps {
    inputName: string;
    label: string;
    placeholder: string;
    fullWidth?: boolean;
    labelClass: string;
    toolTipForSuffix?: boolean;
    suffixToolTipTitle?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string
    inputClass?: string;
}

const SmInput: React.FC<IInputProps> = ({
    inputName,
    label,
    placeholder,
    fullWidth = false,
    labelClass = "",
    size = "small",
    prefix,
    toolTipForSuffix = false,
    suffixToolTipTitle = "",
    suffix,
    disabled = false,
    type,
    value = "",
    inputClass = "",
    onChange= () => {}
}) => {
    return(
        <div className={`input-wrapper flex flex-col gap-2 ${fullWidth ? 'w-full' : ''}`}>
            <label className={labelClass} htmlFor={inputName}>
                {label}
            </label>
            <Input
                prefix={prefix}
                suffix={
                    toolTipForSuffix
                        ? <Tooltip title={suffixToolTipTitle}>{suffix}</Tooltip>
                        : suffix
                }
                size={size}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                id={inputName}
                placeholder={placeholder}
                disabled={disabled}
                type={type}
                className={inputClass}
            />
        </div>
    )
}


export default SmInput;
