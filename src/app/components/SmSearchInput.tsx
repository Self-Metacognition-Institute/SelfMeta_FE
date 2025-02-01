import React from 'react';
import SmInput from "@/app/components/SmInput";
import {SearchOutlined} from "@ant-design/icons";

export interface ISearchInput {
    id: string | number;
    placeholder: string;
}

const SmSearchInput:React.FC<ISearchInput> = (
    {
        id,
        placeholder
    }
) => {
    return (
        <>
            <SmInput
                inputName={`search-${id}`}
                inputClass={'rounded-[9px]'}
                label={''}
                placeholder={placeholder}
                labelClass={''}
                hasLabel={false}
                fullWidth={true}
                suffix={
                    <div className={'border-l border-l-gray-200 flex items-center justify-center py-2 pl-2'}>
                        <SearchOutlined className={'text-lg text-gray-200'}/>
                    </div>
                }
            />
        </>
    );
};

export default SmSearchInput;
