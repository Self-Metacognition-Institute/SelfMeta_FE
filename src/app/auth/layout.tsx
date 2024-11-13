'use client'
import React from "react";
import "../globals.css";
import theme from "@/themes/themeConfig";
import Image from "next/image";
import {QuestionOutlined} from "@ant-design/icons";
import { Archivo } from "next/font/google";
import {ConfigProvider, Typography} from 'antd';
const { Text, Link } = Typography;

const archivo = Archivo({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    display: "swap",
    preload: true
})

export default function RootLayout({
   children,
   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <ConfigProvider theme={theme}>
                <body className={archivo.className + " w-full min-md:h-screen antialiased"}>
                    <main className="size-full flex">
                        <div className="grid grid-cols-[1.5fr_3fr] grow md:grid-cols-1">
                            <div className="md:hidden">
                                <Image src="/images/auth.jpg" alt="Auth" width={640} height={1080} className="size-full object-cover" />
                            </div>
                            <div>
                                <div className="container max-w-[1042px] flex h-full">
                                    <div className="flex flex-col justify-between grow py-8 md:gap-8 sm:py-6">
                                        <div className="flex min-md:justify-end">
                                            <a href="#" className="flex-center size-[35px] bg-primary rounded-full">
                                                <QuestionOutlined style={{color: "white"}} />
                                            </a>
                                        </div>
                                        {children}
                                        <div className="flex items-center justify-between sm:flex-col sm:gap-3 sm:text-center">
                                            <Text className="text-[12px]">Telif Hakkı © 2024 Self Metacognition Institute. Tüm Hakları Saklıdır.</Text>
                                            <Link href="#" target="_blank">
                                                Şartlar & Koşullar
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </body>
            </ConfigProvider>
        </html>
    )
}
