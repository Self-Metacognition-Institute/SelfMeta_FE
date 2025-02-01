import Image from "next/image";
import React from "react";
import Link from "next/link";

export interface BlogCardProps {
    image: string;
    title: string;
    description?: string;
    url: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
    image,
    title,
    description = undefined,
    url
}) => {
    return (
        <div className="group/c blog-card">
            <div className="w-full h-[190px]">
                <Link href={url} className="block size-full">
                    <Image src={image} alt={title} width={336} height={190} className="size-full object-cover"/>
                </Link>
            </div>
            <div className="pt-5 min-md:px-3 md:pt-3">
                <h2 className="text-base tracking-[-0.16px] font-medium text-black/85 mb-2.5">{title}</h2>
                {description && <p className="text-regular text-gray-8 line-clamp-4">{description}</p>}
            </div>
        </div>
    )
}

export default BlogCard;
