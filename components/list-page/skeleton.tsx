import React from "react";

const Skeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="w-full h-8 animate-pulse rounded-2xl"></div>
      <div className="w-full h-10 rounded-2xl animate-pulse"></div>
      <div className="w-full h-10 rounded-2xl animate-pulse"></div>
      <div className="w-full h-10 rounded-2xl animate-pulse"></div>
      <div className="w-full h-10 rounded-2xl animate-pulse"></div>
      <div className="w-full h-10 rounded-2xl animate-pulse"></div>
    </div>
  );
};

export default Skeleton;
