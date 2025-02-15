'use client'
import React, { useState, useEffect } from "react";
import { Archivo } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
    LayoutOutlined,
    DotChartOutlined,
    FileOutlined,
    ProfileOutlined,
    FileSearchOutlined,
    DashboardOutlined,
    UnorderedListOutlined,
    TeamOutlined,
    FileTextOutlined,
    PlusOutlined,
    StockOutlined
} from "@ant-design/icons";

const archivo = Archivo({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    display: "swap",
    preload: true
});

export interface ISideBarProps {
    className?: string;
}
const SideBar: React.FC<ISideBarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    // localStorage'dan collapsed durumunu okuyalım
    useEffect(() => {
        const storedState = localStorage.getItem('sidebar-collapsed');
        if (storedState !== null) {
            setCollapsed(JSON.parse(storedState));
        }
    }, []);

    // collapsed durumuna göre body'e class ekleyip kaldıralım
    useEffect(() => {
        if (collapsed) {
            document.body.classList.add('sidebar-collapsed');
        } else {
            document.body.classList.remove('sidebar-collapsed');
        }
    }, [collapsed]);

    const toggleCollapse = () => {
        setCollapsed(prev => {
            const newState = !prev;
            localStorage.setItem('sidebar-collapsed', JSON.stringify(newState));
            return newState;
        });
    };

    return (
        // ${collapsed ? "w-20" : "w-64"}
        <div className={`${archivo.className} group/sidebar sidebar bg-white px-6 py-6 ${className}`}>
            <div className="sticky top-6">
                <div className={"flex items-center " + (collapsed ? 'justify-center' : 'justify-between pb-3')}>
                    <Image
                        src={"/images/logo.svg"}
                        alt={"Logo"}
                        width={83}
                        height={39}
                        className={`${collapsed ? "hidden" : "w-[83px]"} h-auto`}
                    />
                    <div className="cursor-pointer" onClick={toggleCollapse}>
                        <LayoutOutlined style={{ color: "#8C8C8C", fontSize: "20px" }} />
                    </div>
                </div>

                <div className="flex flex-col gap-6 pt-6">
                    {/* Gösterge Paneli */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-1">
                            <p className={`${collapsed ? "hidden" : "block"} text-[12px] leading-[1.66] text-gray-7 whitespace-nowrap`}>
                                Gösterge Paneli
                            </p>
                            <span className="block w-full h-[1px] bg-gray-4"></span>
                        </div>
                        <ul className={"flex flex-col gap-2.5 " + (collapsed ? 'items-center' : '') }>
                            <Link
                                href="/"
                                className="flex items-center gap-3 px-3 py-2 rounded-main duration-300 hover:bg-gray-3 [&.active]:bg-gray-4"
                            >
                                <DotChartOutlined style={{ color: "#262626", fontSize: "16px" }} />
                                <span className={`${collapsed ? "hidden" : "block"} text-regular font-medium text-gray-10`}>
                                    Genel Bakış
                                </span>
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center gap-3 px-3 py-2 rounded-main duration-300 hover:bg-gray-3 [&.active]:bg-gray-4"
                            >
                                <FileOutlined style={{ color: "#262626", fontSize: "16px" }} />
                                <span className={`${collapsed ? "hidden" : "block"} text-regular font-medium text-gray-10`}>
                                    İlerleme Raporları
                                </span>
                            </Link>
                        </ul>
                    </div>

                    {/* Eğitimler ve Kaynaklar */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-1">
                            <p className={`${collapsed ? "hidden" : "block"} text-[12px] leading-[1.66] text-gray-7 whitespace-nowrap`}>
                                Eğitimler ve Kaynaklar
                            </p>
                            <span className="block w-full h-[1px] bg-gray-4"></span>
                        </div>
                        <ul className={"flex flex-col gap-2.5 " + (collapsed ? 'items-center' : '') }>
                            <Link
                                href="/"
                                className="flex items-center gap-3 px-3 py-2 rounded-main duration-300 hover:bg-gray-3 [&.active]:bg-gray-4"
                            >
                                <ProfileOutlined style={{ color: "#262626", fontSize: "16px" }} />
                                <span className={`${collapsed ? "hidden" : "block"} text-regular font-medium text-gray-10`}>
                                    Teorik Eğitimler
                                </span>
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center gap-3 px-3 py-2 rounded-main duration-300 hover:bg-gray-3 [&.active]:bg-gray-4"
                            >
                                <FileSearchOutlined style={{ color: "#262626", fontSize: "16px" }} />
                                <span className={`${collapsed ? "hidden" : "block"} text-regular font-medium text-gray-10`}>
                                    Akademik Blog
                                </span>
                            </Link>
                        </ul>
                    </div>

                    {/* Klinik Değerlendirme */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-1">
                            <p className={`${collapsed ? "hidden" : "block"} text-[12px] leading-[1.66] text-gray-7 whitespace-nowrap`}>
                                Klinik Değerlendirme
                            </p>
                            <span className="block w-full h-[1px] bg-gray-4"></span>
                        </div>
                        <ul className={"flex flex-col gap-2.5 " + (collapsed ? 'items-center' : '') }>
                            <Link
                                href="/"
                                className="flex items-center gap-3 px-3 py-2 rounded-main duration-300 hover:bg-gray-3 [&.active]:bg-gray-4"
                            >
                                <DashboardOutlined style={{ color: "#262626", fontSize: "16px" }} />
                                <span className={`${collapsed ? "hidden" : "block"} text-regular font-medium text-gray-10`}>
                                    Hedef Takip Sistemi
                                </span>
                            </Link>
                        </ul>
                    </div>

                    {/* Aktivite Planlama ve Takip Sistem */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-1">
                            <p className={`${collapsed ? "hidden" : "block"} text-[12px] leading-[1.66] text-gray-7 whitespace-nowrap`}>
                                Aktivite Planlama ve Takip Sistem
                            </p>
                            <span className="block w-full h-[1px] bg-gray-4"></span>
                        </div>
                        <ul className={"flex flex-col gap-2.5 " + (collapsed ? 'items-center' : '') }>
                            <Link
                                href="/"
                                className="flex items-center gap-3 px-3 py-2 rounded-main duration-300 hover:bg-gray-3 [&.active]:bg-gray-4"
                            >
                                <UnorderedListOutlined style={{ color: "#262626", fontSize: "16px" }} />
                                <span className={`${collapsed ? "hidden" : "block"} text-regular font-medium text-gray-10`}>
                                    Aktivite Listesi
                                </span>
                            </Link>
                        </ul>
                    </div>

                    {/* Danışan Yönetimi */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-1">
                            <p className={`${collapsed ? "hidden" : "block"} text-[12px] leading-[1.66] text-gray-7 whitespace-nowrap`}>
                                Danışan Yönetimi
                            </p>
                            <span className="block w-full h-[1px] bg-gray-4"></span>
                        </div>
                        <ul className={"flex flex-col gap-2.5 " + (collapsed ? 'items-center' : '') }>
                            <Link
                                href="/"
                                className="flex items-center gap-3 px-3 py-2 rounded-main duration-300 hover:bg-gray-3 [&.active]:bg-gray-4"
                            >
                                <TeamOutlined style={{ color: "#262626", fontSize: "16px" }} />
                                <span className={`${collapsed ? "hidden" : "block"} text-regular font-medium text-gray-10`}>
                                    Danışan Listesi
                                </span>
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center gap-3 px-3 py-2 rounded-main duration-300 hover:bg-gray-3 [&.active]:bg-gray-4"
                            >
                                <FileTextOutlined style={{ color: "#262626", fontSize: "16px" }} />
                                <span className={`${collapsed ? "hidden" : "block"} text-regular font-medium text-gray-10`}>
                                    Danışan Raporu
                                </span>
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center gap-3 px-3 py-2 rounded-main duration-300 hover:bg-gray-3 [&.active]:bg-gray-4"
                            >
                                <PlusOutlined style={{ color: "#262626", fontSize: "16px" }} />
                                <span className={`${collapsed ? "hidden" : "block"} text-regular font-medium text-gray-10`}>
                                    Yeni Danışan Ekle
                                </span>
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center gap-3 px-3 py-2 rounded-main duration-300 hover:bg-gray-3 [&.active]:bg-gray-4"
                            >
                                <StockOutlined style={{ color: "#262626", fontSize: "16px" }} />
                                <span className={`${collapsed ? "hidden" : "block"} text-regular font-medium text-gray-10`}>
                                    İlerleme Takibi
                                </span>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
