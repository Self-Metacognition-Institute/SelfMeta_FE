import React from 'react';
import {Pagination, PaginationProps} from "antd";

export type ISmPaginationProps = PaginationProps

const SmPagination: React.FC<ISmPaginationProps> = (
    {
        defaultCurrent,
        total,
        showSizeChanger = false,
        onChange
    }
) => {
    return (
        <>
            <Pagination defaultCurrent={defaultCurrent} total={total} showSizeChanger={showSizeChanger} onChange={onChange} />
        </>
    );
};

export default SmPagination;
