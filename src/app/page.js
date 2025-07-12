import React from 'react';
import ServerStatusPage from './components/ServerStatusPage'; // 根据你文件路径调整

export const metadata = {
  title: 'UniMC 服务器联盟',
  description: 'UniMC 服务器联盟，为 Minecraft 服务器提供技术支持',
};

export const viewport = {
  width: 'device-width',
  initialScale: 0.8,
  maximumScale: 0.8,
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
