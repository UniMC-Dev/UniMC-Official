import React from 'react';
import ServerStatusPage from './components/ServerStatusPage'; // 根据你文件路径调整

export const metadata = {
  title: 'UniMC 服务器联盟',
};

const Page = () => {
  return (
    <main>
      <ServerStatusPage />
    </main>
  );
};

export default Page;
