import React, { useState, useEffect, useRef } from 'react';
import SmSearchInput from './SmSearchInput';
import { 
    MessageOutlined,
    BellOutlined,
    UserOutlined,
    ProfileOutlined,
    IdcardOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

export interface IHeaderProps {
    className?: string
}

const Header: React.FC<IHeaderProps> = ({ className }) => {
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const profileItems = [
        { icon: <UserOutlined className="text-[16px] text-gray-10" />, label: 'Kişisel Bilgiler', href: '#' },
        { icon: <ProfileOutlined className="text-[16px] text-gray-10" />, label: 'Eğitim Bilgileri', href: '#' },
        { icon: <IdcardOutlined className="text-[16px] text-gray-10" />, label: 'Çalışma Hayatı', href: '#' }
    ];

    const accountItems = [
        { icon: <SettingOutlined className="text-[16px] text-gray-10" />, label: 'Ayarlar', href: '#' },
        { icon: <QuestionCircleOutlined className="text-[16px] text-gray-10" />, label: 'Destek & Yardım', href: '#' }
    ];

    return (
        <header className={`${className ?? ''} sticky top-6 left-0 z-10 -translate-y-6 -translate-x-7.5 w-[calc(100%+3.75rem)] h-auto bg-white border-l border-solid border-l-gray-3 px-7.5 py-5`}>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <SmSearchInput id="search-all" placeholder="Ara..." />
                </div>
                <div className="flex items-center gap-6">
                    <div>
                        {/* Other elements */}
                    </div>
                    <div className="flex items-center gap-2.5">
                        <div className="bg-gray-3 size-9 rounded-full flex-center cursor-pointer">
                            <MessageOutlined className="text-gray-10 text-[16px]" />
                        </div>
                        <div className="bg-gray-3 size-9 rounded-full flex-center cursor-pointer">
                            <BellOutlined className="text-gray-10 text-[16px]" />
                        </div>
                    </div>
                    <div className="relative" ref={dropdownRef}>
                        <div className="flex items-center justify-end gap-1 cursor-pointer" onClick={handleToggle}>
                            <div className="text-right">
                                <p className="text-[12px] leading-[1.667] text-gray-8">Hoş geldin,</p>
                                <p className="text-[14px] leading-normal text-gray-10">Barış Hakverdi</p>
                            </div>
                            <div className="border border-solid border-primary rounded-full p-1">
                                <Image src="/images/person.jpg" width={40} height={40} alt="avatar" className="rounded-full" />
                            </div>
                        </div>
                        <div className={`absolute right-0 top-full z-10 origin-top-right w-max transition-all duration-300 ${isActive ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-[.85] pointer-events-none'}`}>
                            <div className="pt-11">
                                <div className="bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] p-5 rounded-main relative">
                                    <div className="border-[10px] border-solid border-t-0 border-x-transparent border-white absolute right-4 -top-2.5 drop-shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)]"></div>
                                    <div className="mb-3">
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <p className="text-[12px] leading-[1.66] text-gray-7 whitespace-nowrap">Profil</p>
                                            <span className="block w-full h-[1px] bg-gray-4"></span>
                                        </div>
                                        <ul className="flex flex-col gap-1.5">
                                            {profileItems.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.href} className="flex items-center gap-1.5 p-2 rounded-md duration-300 hover:bg-gray-3">
                                                        {item.icon}
                                                        <span className="text-[14px] leading-normal text-gray-10">{item.label}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>      
                                    <div>
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <p className="text-[12px] leading-[1.66] text-gray-7 whitespace-nowrap">Hesap</p>
                                            <span className="block w-full h-[1px] bg-gray-4"></span>
                                        </div>
                                        <ul className="flex flex-col gap-1.5">
                                            {accountItems.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.href} className="flex items-center gap-1.5 p-2 rounded-md duration-300 hover:bg-gray-3">
                                                        {item.icon}
                                                        <span className="text-[14px] leading-normal text-gray-10">{item.label}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <Link href="#" className="flex items-center gap-1.5 p-2 rounded-md duration-300 hover:bg-gray-3">
                                                    <LogoutOutlined className="text-[16px] text-red-6" />
                                                    <span className="text-[14px] leading-normal text-red-6">Çıkış Yap</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;