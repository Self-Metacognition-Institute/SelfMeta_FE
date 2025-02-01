'use client'
import React, {ReactNode, useState} from 'react';

export interface ITab {
    title: string;
    tabId: string | number;
    content: ReactNode;
}

export interface IGeneralTabProps {
    tabs: Array<ITab>
}

const SmGeneralTab:React.FC<IGeneralTabProps> = (
    {
        tabs
    }
) => {

    const [activeTab, setActiveTab] = useState<string|number>(0)

    return (
        <div className={'w-full flex flex-col h-auto'}>
            {/* title section */}
            <div className={'w-full flex justify-between border-b border-gray-200'}>
                <div className={'flex w-auto gap-5'}>
                    {tabs.map((tab) => (
                        <span onClick={() => setActiveTab(tab.tabId)} key={tab.tabId} className={`${tab.tabId === activeTab && 'border-b-2 border-b-blue-500 text-blue-500'} cursor-pointer`}>{tab.title}</span>
                    ))}
                </div>
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
