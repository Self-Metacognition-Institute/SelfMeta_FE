'use client'
import React, {ReactNode, useState} from 'react';
import SmInput from "@/app/components/SmInput";
import SmSearchInput from "@/app/components/SmSearchInput";

export interface ITab {
    title: string;
    tabId: string | number;
    content: ReactNode;
}

export interface IGeneralTabProps {
    tabs: Array<ITab>
    hasSearch: boolean;
}

const SmGeneralTab:React.FC<IGeneralTabProps> = (
    {
        tabs,
        hasSearch = false
    }
) => {

    const [activeTab, setActiveTab] = useState<string|number>(0)

    return (
        <div className={'w-full flex flex-col h-auto'}>
            {/* title section */}
            <div className={'w-full flex justify-between gap-7'}>
                <div className={'flex w-full gap-5 border-b border-gray-200'}>
                    {tabs.map((tab) => (
                        <span onClick={() => setActiveTab(tab.tabId)} key={tab.tabId} className={`${tab.tabId === activeTab && 'border-b-2 border-b-blue-500 text-blue-500'} cursor-pointer`}>{tab.title}</span>
                    ))}
                </div>
                {hasSearch &&  <div className={'flex w-1/3 pb-2'}>
                    <SmSearchInput id={activeTab} placeholder={'Search'} />
                </div>}
            </div>
            <div>
                {
                    tabs.find((tab) => tab.tabId === activeTab)?.content
                }
            </div>
        </div>
    );
};

export default SmGeneralTab;
