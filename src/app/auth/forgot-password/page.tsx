'use client'
import React from 'react'
import SmButton from '../../components/SmButton'
import SmInput from "@/app/components/SmInput";
import SmPasswordInput from "@/app/components/SmPasswordInput";
import SmCheckbox, { ICheckboxProps } from "@/app/components/SmCheckbox";
import DynamicForm from "@/app/components/DynamicForm";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Typography } from "antd";
import { text } from 'stream/consumers';
import { link } from 'fs';
import SmLabelLink, { LabelLinkProps } from '@/app/components/deneme';
const { Title, Link, Text } = Typography;
const page = () => {
    const formState = {
        fields: [

            {
                fieldKey: "email",
                renderComponent: SmInput,
                componentProps: {
                    labelClass: "text-sm text-red-500 font-semibold hidden",
                    inputName: "email",
                    label: "Basic Input(Small)",
                    placeholder: "E-Posta",
                    suffix: <MailOutlined />,
                    fullWidth: true,
                    value: "",
                    type: "email",
                    size: "large",
                }
            },
            {
                fieldKey: "test4",
                renderComponent: SmButton,
                componentProps: {
                    
                    text: "Şifre Sıfırlama Bağlantısını Gönder",
                    type: "primary"
                }
            },

        ],
        initialData: {
            test: "",
            "test2": ""
        }
    }
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-5 sm:gap-3">
                <Image src="/images/logo.svg" alt="logo" width={129} height={60} className="w-[129px] h-auto" />
                <h1 className="text-[20px] leading-[1.4] font-medium text-[#262626] text-center sm:text-[16px]">Şifreni sıfırlamak için kayıtlı e-postanı gir.</h1>
            </div>
            <DynamicForm fields={formState.fields} initialData={formState.initialData} wrapperClass="flex flex-col gap-4" />
            <Text className="text-[12px] text-center">
                Hesabınız yok mu? &nbsp;
                <Link href="/auth/register" className="text-[12px]">
                    Kayıt olun.
                </Link>
            </Text>
        </div>
    )
}

export default page
