'use client'
import React from 'react'
import SmButton from '../../components/SmButton'
import SmInput from "@/app/components/SmInput";
import DynamicForm from "@/app/components/DynamicForm";
import { MailOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Typography } from "antd";
const { Link, Text } = Typography;
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
        <div className="w-full max-w-[368px] mx-auto">
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-5 sm:gap-3">
                    <Image src="/images/logo.svg" alt="logo" width={129} height={60} className="w-[129px] h-auto" />
                    <h1 className="text-[20px] leading-[1.4] font-medium text-[#262626] text-center sm:text-[16px]">Şifreni sıfırlamak için kayıtlı e-postanı gir.</h1>
                </div>
                <DynamicForm fields={formState.fields} initialData={formState.initialData} wrapperClass="w-full flex flex-col gap-4" />
                <Text className="text-[12px] text-center">
                    Hesabınız yok mu? &nbsp;
                    <Link href="/auth/register" className="text-[12px]">
                        Kayıt olun.
                    </Link>
                </Text>
            </div>
        </div>
    )
}

export default page
