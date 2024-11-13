'use client'
import React from 'react'
import SmButton from '../../components/SmButton'
import { MailOutlined } from "@ant-design/icons";
import {Input, Typography} from "antd";
const { Link, Text } = Typography;
import type { GetProps } from 'antd';

type OTPProps = GetProps<typeof Input.OTP>;
const page = () => {
    const onChange: OTPProps['onChange'] = (text) => {
        console.log('onChange:', text);
    };

    const onInput: OTPProps['onInput'] = (value) => {
        console.log('onInput:', value);
    };

    const sharedProps: OTPProps = {
        onChange,
        onInput,
    };

    // const formState = {
    //     fields: [
    //         {
    //             fieldKey: "otp",
    //             renderComponent: ,
    //             componentProps: {
    //                 labelClass: "text-sm text-red-500 font-semibold hidden",
    //                 inputName: "otp",
    //                 label: "Basic Input(Small)",
    //                 placeholder: "E-Posta",
    //                 fullWidth: true,
    //                 value: "",
    //                 type: "text",
    //                 size: "large",
    //             }
    //         },
    //         {
    //             fieldKey: "test4",
    //             renderComponent: SmButton,
    //             componentProps: {
    //                 text: "Giriş Yap",
    //                 type: "primary"
    //             }
    //         },
    //     ],
    //     initialData: {
    //         test: "",
    //         "test2": ""
    //     }
    // }
    return (
        <div className="w-full max-w-[495px] mx-auto">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-6">
                    <div className="size-[50px] flex-center rounded-full border-[2px] border-primary mb-3">
                        <MailOutlined className="text-primary" style={{fontSize: "28px"}}/>
                    </div>
                    <h1 className="text-[20px] leading-[1.4] font-medium text-[#262626] text-center mb-1 sm:text-[16px]">Doğrulama kodu aşağıdaki e-posta adresine gönderildi:</h1>
                    <p className="text-[14px] leading-normal font-medium text-primary text-center">barishakverdi@gmail.com</p>
                </div>
                <p className="text-[14px] leading-normal text-[#262626] font-medium text-center mb-4">01:32</p>
                <form action="#" method="post" className="flex flex-col items-center mb-6">
                    <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} size="large"/>
                    <SmButton text="Doğrula" type="primary" className="mt-4"/>
                </form>
                {/*<DynamicForm fields={formState.fields} initialData={formState.initialData} wrapperClass="w-full flex flex-col gap-4" />*/}
                <Text className="text-[12px] text-center">
                    Doğrulama kodu gelmedi mi? &nbsp;
                    <Link href="#" className="text-[12px]">
                        Yeniden gönder.
                    </Link>
                </Text>
            </div>
        </div>
    )
}

export default page
