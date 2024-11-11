
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import theme from "@/themes/themeConfig";
import '@/app/globals.css';
import { Archivo } from "next/font/google";

const archivo = Archivo({
    subsets: ['latin'],
    display: "swap",
    preload: true
});

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={archivo.className}>
      <ConfigProvider theme={theme}>
        <AntdRegistry>{children}</AntdRegistry>
      </ConfigProvider>
    </body>
  </html>
);

export default RootLayout;