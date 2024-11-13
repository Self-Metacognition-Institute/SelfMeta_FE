'use client'

import React from "react"
import {Checkbox} from "antd";
import { CheckboxProps } from "antd";

export interface ICheckboxProps extends CheckboxProps {
    text: string,
    rootClass?: string
}

const SmCheckbox: React.FC<ICheckboxProps> = ({
    text,
    rootClass = "",
    onChange = () => {}
}) => {

    return(
        <Checkbox onChange={(e) => onChange(e.target.checked)} className={rootClass}>
            {text}
        </Checkbox>
    )
}

export default SmCheckbox;
