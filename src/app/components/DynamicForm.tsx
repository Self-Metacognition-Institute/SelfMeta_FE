'use client'
import React, {useState} from "react";
import {IInputProps} from "@/app/components/SmInput";
import {ICheckboxProps} from "@/app/components/SmCheckbox";
import {IPasswordInputProps} from "@/app/components/SmPasswordInput";
import {ButtonProps} from "@/app/components/SmButton";
import {ButtonType} from "antd/es/button";



type ComponentPropsMapping = {
    SmInputProps: IInputProps,
    SmCheckboxProps: ICheckboxProps,
    SmPasswordInputProps: IPasswordInputProps,
    SmButtonProps: ButtonProps
}

interface Fields<T extends keyof ComponentPropsMapping>{
    fieldKey: string
    renderComponent: React.ComponentType<ComponentPropsMapping[T]>
    componentProps: ComponentPropsMapping[T]
}

export interface IDynamicFormProps {
    fields: Array<Fields<"SmCheckboxProps" | "SmInputProps" | "SmPasswordInputProps">>
    initialData: Record<string, string>;
    wrapperClass?: string;
    submitButtonType?: ButtonType;
}

const DynamicForm: React.FC<IDynamicFormProps> = ({
    fields,
    initialData,
    wrapperClass = "",
}) => {
    const [formState, setFormState] = useState({...initialData});

    const handleChange:(key: string, value: any) => void = (key: string, value: any) => {
        setFormState((prev) => ({...prev, [key]: value}));
    }

    const handleSubmit = () => {
        console.log(formState)
    }
    return (
        <form className={`${wrapperClass}`}>
            {fields.map((field, i) => {
                const Component = field.renderComponent
                return (
                    <Component
                        {...field.componentProps}
                        value={formState[field.fieldKey as string]}
                        key={i}
                        onChange={() => handleChange(field.fieldKey, field.componentProps.value)}
                    />
                )
            })}
        </form>
    )
}

export default DynamicForm;
