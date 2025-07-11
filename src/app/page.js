import React from 'react';
import ServerStatusPage from './components/ServerStatusPage'; // 根据你文件路径调整

export const metadata = {
  title: 'UniMC 服务器联盟',
  description: 'UniMC 服务器联盟，为 Minecraft 服务器提供技术支持',
  viewport: 'width=device-width, initial-scale=0.8',
};

export const viewport = {
  width: 'device-width',
  initialScale: 0.9,
  maximumScale: 0.9,
  userScalable: false,
};

const Page = () => {
  return (
    <main>
      <ServerStatusPage />
    </main>
  );
};

export default Page;
