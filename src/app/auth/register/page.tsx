'use client'
import React from 'react'
import SmButton from '../../components/SmButton'
import SmInput from "@/app/components/SmInput";
import SmPasswordInput from "@/app/components/SmPasswordInput";
import SmCheckbox from "@/app/components/SmCheckbox";
import DynamicForm from "@/app/components/DynamicForm";
import {UserOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import Image from "next/image";
import { Typography } from "antd";
const { Title, Link, Text } = Typography;
const page = () => {
    const formState = {
        fields: [
            {
                fieldKey: "nameSurname",
                renderComponent: SmInput,
                componentProps: {
                    labelClass:"text-sm text-red-500 font-semibold hidden",
                    inputName:"nameSurname" ,
                    label:"Basic Input(Small)",
                    placeholder:"Ad Soyad",
                    suffix: <UserOutlined/>,
                    fullWidth:true,
                    value: "",
                    size: "large"
                }
            },
            {
                fieldKey: "email",
                renderComponent: SmInput,
                componentProps: {
                    labelClass:"text-sm text-red-500 font-semibold hidden",
                    inputName:"email" ,
                    label:"Basic Input(Small)",
                    placeholder:"E-Posta",
                    suffix: <MailOutlined/>,
                    fullWidth:true,
                    value: "",
                    type: "email",
                    size: "large",
                }
            },
            {
                fieldKey: "tel",
                renderComponent: SmInput,
                componentProps: {
                    labelClass:"text-sm text-red-500 font-semibold hidden",
                    inputName:"tel" ,
                    label:"Basic Input(Small)",
                    placeholder:"Telefon Numarası",
                    suffix: <PhoneOutlined/>,
                    fullWidth:true,
                    value: "",
                    type: "tel",
                    size: "large",
                }
            },
            {
                fieldKey: "password",
                renderComponent: SmPasswordInput,
                componentProps: {
                    labelClass:"text-sm text-red-500 font-semibold hidden",
                    inputName:"password",
                    label:"Password Input",
                    placeholder:"Şifre",
                    fullWidth: true,
                    size:"large"
                }
            },
            {
                fieldKey: "password-again",
                renderComponent: SmPasswordInput,
                componentProps: {
                    labelClass:"text-sm text-red-500 font-semibold hidden",
                    inputName:"password-again",
                    label:"Password Input",
                    placeholder:"Şifre Tekrar",
                    fullWidth: true,
                    size:"large"
                }
            },
            {
                fieldKey: "test3",
                renderComponent: SmCheckbox,
                componentProps: {
                    text:"Kayıt olarak Gizlilik Sözleşmesi ve KVKK’yi kabul ettiğimi beyan ederim."
                }
            },
            {
                fieldKey: "test4",
                renderComponent: SmButton,
                componentProps: {
                    text: "Kayıt Ol",
                    type: "primary"
                }
            }
        ],
        initialData: {
            test: "",
            "test2": ""
        }
    }
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-5 sm:gap-3">
                <Image src="/images/logo.svg" alt="logo" width={129} height={60} className="w-[129px] h-auto"/>
                <h1 className="text-[20px] leading-[1.4] font-medium text-[#262626] text-center sm:text-[16px]">Self Metacognition Institute’a Hoş geldin.</h1>
                <div className="flex">
                    <Title level={5} className="!font-normal mr-1">Seçtiğiniz paket:</Title>
                    <Link href="#" underline className="text-[16px] leading-normal [&_:not(:hover)]:text-[#0050B3]">
                        Kurumsal
                    </Link>
                </div>
            </div>
            <DynamicForm fields={formState.fields} initialData={formState.initialData} wrapperClass="flex flex-col gap-4" />
            <Text className="text-[12px] text-center">
                Halihazırda kayıtlı mısınız? &nbsp;
                <Link href="/auth/login" className="text-[12px]">
                    Giriş yapın.
                </Link>
            </Text>
        </div>
    )
}

export default page
