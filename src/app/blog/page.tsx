'use client'
import SmGeneralTab, {ITab} from "@/app/components/SmGeneralTab";
import React, {ReactNode} from "react";
import BlogCard from "@/app/blog/components/BlogCard";
import {Pagination} from "antd";
import SmPagination from "@/app/components/SmPagination";

const page = () => {
    const handlePageChange = (page: number) => {
        console.log(page)
    }
    const firstTabContent:ReactNode =
        <div className={'flex flex-col gap-10 md:gap-6'}>
            <div className={"w-full grid grid-cols-4 gap-x-6 gap-y-10 py-10 md:grid-cols-3 md:py-6 sm:grid-cols-2 xs:grid-cols-1 xs:gap-5"}>
                <BlogCard image={"/images/image-1.jpg"}
                          title="Rehabilitasyonda Aktivite ve Ödev Takibinin Faydaları: Verimli Tedavi Süreçleri"
                          description="Aktivite ve ödev takibi, terapistlerin tedavi süreçlerini daha sistematik ve verimli hale getirmelerine yardımcı olur. Bu yazıda, aktivite takip sistemlerinin terapistlere sunduğu faydaları detaylandırıyoruz."
                          url="url.php">
                </BlogCard>
                <BlogCard image={"/images/image-1.jpg"}
                          title="Rehabilitasyonda Aktivite ve Ödev Takibinin Faydaları: Verimli Tedavi Süreçleri"
                          description="Aktivite ve ödev takibi, terapistlerin tedavi süreçlerini daha sistematik ve verimli hale getirmelerine yardımcı olur. Bu yazıda, aktivite takip sistemlerinin terapistlere sunduğu faydaları detaylandırıyoruz."
                          url="url.php">
                </BlogCard>
                <BlogCard image={"/images/image-1.jpg"}
                          title="Rehabilitasyonda Aktivite ve Ödev Takibinin Faydaları: Verimli Tedavi Süreçleri"
                          description="Aktivite ve ödev takibi, terapistlerin tedavi süreçlerini daha sistematik ve verimli hale getirmelerine yardımcı olur. Bu yazıda, aktivite takip sistemlerinin terapistlere sunduğu faydaları detaylandırıyoruz."
                          url="url.php">
                </BlogCard>
                <BlogCard image={"/images/image-1.jpg"}
                          title="Rehabilitasyonda Aktivite ve Ödev Takibinin Faydaları: Verimli Tedavi Süreçleri"
                          description="Aktivite ve ödev takibi, terapistlerin tedavi süreçlerini daha sistematik ve verimli hale getirmelerine yardımcı olur. Bu yazıda, aktivite takip sistemlerinin terapistlere sunduğu faydaları detaylandırıyoruz."
                          url="url.php">
                </BlogCard>
                <BlogCard image={"/images/image-1.jpg"}
                          title="Rehabilitasyonda Aktivite ve Ödev Takibinin Faydaları: Verimli Tedavi Süreçleri"
                          description="Aktivite ve ödev takibi, terapistlerin tedavi süreçlerini daha sistematik ve verimli hale getirmelerine yardımcı olur. Bu yazıda, aktivite takip sistemlerinin terapistlere sunduğu faydaları detaylandırıyoruz."
                          url="url.php">
                </BlogCard>
            </div>
            <SmPagination defaultCurrent={1} pageSize={10} total={100} onChange={handlePageChange}/>
        </div>

    const tabs: Array<ITab> = [
        {
            title: 'Akademik Yazılar',
            tabId: 0,
            content: firstTabContent
        },
        {
            title: 'Blog',
            tabId: 1,
            content: firstTabContent
        }
    ]
    return(
        <>
            {/*  TAB COMPONENT START  */}
            <SmGeneralTab tabs={tabs} hasSearch={true}/>
            {/*  TAB COMPONENT END  */}
        </>
    )
}

export default page
