
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import theme from "@/themes/themeConfig"
const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <ConfigProvider theme={theme}>
        <AntdRegistry>{children}</AntdRegistry>
      </ConfigProvider>
    </body>
  </html>
);

export default RootLayout;