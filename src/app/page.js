'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import Loading from './components/Loading';

const ServerStatusPage = dynamic(() => import('./components/Main'), {
  ssr: false,
});

const Page = () => {
  const [isReadyToShowContent, setIsReadyToShowContent] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // 模拟加载完成的定时器
    const timer = setTimeout(() => {
      setIsReadyToShowContent(true);
      // 确保有足够时间让退出动画完成
      setTimeout(() => setShowContent(true), 100);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {!isReadyToShowContent ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Loading />
          </motion.div>
        ) : showContent ? ( 
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeInOut", delay: 0.1 }}
          >
            <ServerStatusPage />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
};

export default Page;