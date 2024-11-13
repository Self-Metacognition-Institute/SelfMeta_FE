'use client'
import React from 'react'
import SmButton from '../../components/SmButton'
import SmInput from "@/app/components/SmInput";
import SmPasswordInput from "@/app/components/SmPasswordInput";
import SmCheckbox, { ICheckboxProps } from "@/app/components/SmCheckbox";
import DynamicForm from "@/app/components/DynamicForm";
import { MailOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Typography } from "antd";
import SmLabelLink, { LabelLinkProps } from '@/app/auth/login/components/checkboxWithLink';
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
                fieldKey: "password",
                renderComponent: SmPasswordInput,
                componentProps: {
                    labelClass: "text-sm text-red-500 font-semibold hidden",
                    inputName: "password",
                    label: "Password Input",
                    placeholder: "Şifre",
                    fullWidth: true,
                    size: "large"
                }
            },

            {
                fieldKey: "test3",
                renderComponent: ({ checkboxProps, linkProps }: { checkboxProps: ICheckboxProps; linkProps: LabelLinkProps }) => (
                    <div className="flex items-center justify-between gap-2">
                        <SmCheckbox {...checkboxProps} />
                        <SmLabelLink {...linkProps} />
                    </div>
                ),
                componentProps: {
                    checkboxProps: {
                        text: "Beni Hatırla"
                    },
                    linkProps: {
                        text: "Şifrenizi mi unuttunuz?",
                        href: "/auth/forgot-password"
                    }
                }
            },
            {
                fieldKey: "test4",
                renderComponent: SmButton,
                componentProps: {
                    text: "Giriş Yap",
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
                    <h1 className="text-[20px] leading-[1.4] font-medium text-[#262626] text-center sm:text-[16px]">Self Metacognition Institute’a Hoş geldin.</h1>
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
