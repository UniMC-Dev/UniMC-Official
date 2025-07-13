'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import Loading from './components/Loading';

const ServerStatusPage = dynamic(() => import('./components/Main'), {
  ssr: false,
});

const Page = () => {
  const [isMainLoaded, setIsMainLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const checkIfLoaded = () => {
      if (mainRef.current) {
        const hasContent = mainRef.current.children.length > 0;
        const hasText = mainRef.current.textContent.trim().length > 0;
        
        if (hasContent || hasText) {
          setIsMainLoaded(true);
          setTimeout(() => setShowContent(true), 100);
        }
      }
    };

    const observer = new MutationObserver(checkIfLoaded);
    
    if (mainRef.current) {
      observer.observe(mainRef.current, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }

    // 也可以使用 requestAnimationFrame 来定期检查
    const checkInterval = setInterval(checkIfLoaded, 100);

    return () => {
      observer.disconnect();
      clearInterval(checkInterval);
    };
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {!showContent ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeInOut", delay: 0.1 }}
            ref={mainRef}
          >
            <ServerStatusPage />
          </motion.div>
        )}
      </AnimatePresence>
      
      {!isMainLoaded && (
        <div 
          ref={mainRef}
          style={{ 
            position: 'absolute', 
            left: '-9999px', 
            opacity: 0,
            pointerEvents: 'none'
          }}
        >
          <ServerStatusPage />
        </div>
      )}
    </main>
  );
};

export default Page;