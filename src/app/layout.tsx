'use client'
import React from "react";
import "./globals.css";
import theme from "@/themes/themeConfig";
import { Archivo } from "next/font/google";
import {ConfigProvider} from 'antd';

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
            <body className={archivo.className + " w-full antialiased"}>
                <ConfigProvider theme={theme}>
                    <main className="size-full">
                        <div className={"bg-white shadow-general px-7.5 py-6 md:px-4"}>
                            {children}
                        </div>
                    </main>
                </ConfigProvider>
            </body>
        </html>
    )
}
