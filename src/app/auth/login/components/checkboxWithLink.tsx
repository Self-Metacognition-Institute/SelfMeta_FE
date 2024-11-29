import React from "react";
import { Typography } from "antd";
const { Link } = Typography;

export interface LabelLinkProps {
    text: string;
    href?: string;
    rootClass?: string;
}

const SmLabelLink: React.FC<LabelLinkProps> = ({
    text,
    href = "#", 
    rootClass = ""
}) => {
    return (
        <div className={rootClass}>
            <Link href={href} className="text-sm" >
                {text}
            </Link>
        </div>
    );
};

export default SmLabelLink;
