"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <p>Yükleniyor...</p>
      <style jsx>{`
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default Loading;
