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
                <body className={archivo.className + " w-full antialiased"}>
                    <main className="size-full">
                        {children}
                    </main>
                </body>
            </ConfigProvider>
        </html>
    )
}
