"use client";

import React from "react";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-circle">
        <img style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} src={'./logo.png'} alt="UniMC Logo" width={80} height={80} />
      </div>

      <style jsx>{`
        .loading-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(315deg, #b8d0ffff 20%, #fff 80%,#fff 80%);
        }

        .loading-circle {
          position: relative;
          width: 120px;
          height: 120px;
        }

        .loading-circle::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 8px solid #e6f3ff;
          border-top-color: #274B93;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        :global(img) {
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Loading;