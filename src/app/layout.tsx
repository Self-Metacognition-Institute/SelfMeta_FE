'use client'
import React from "react";
import "./globals.css";
import theme from "@/themes/themeConfig";
import { Archivo } from "next/font/google";
import {ConfigProvider} from 'antd';
import SideBar from "@/app/components/SideBar";
import Header from "@/app/components/Header";

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
            <body className={archivo.className + " group/body w-full antialiased"}>
                <ConfigProvider theme={theme}>
                    <main className="grid grid-cols-9 size-full group-[&.sidebar-collapsed]/body:grid-cols-[100px_1fr]">
                        <SideBar className="group-[&:not(.sidebar-collapsed)]/body:col-span-2" />
                        <div className="relative p-6 px-7.5 group-[&:not(.sidebar-collapsed)]/body:col-span-7">
                            <Header className="" />
                            <div className={" bg-white shadow-general px-7.5 py-6 md:px-4"}>
                                {children}
                            </div>
                        </div>
                    </main>
                </ConfigProvider>
            </body>
        </html>
    )
}
