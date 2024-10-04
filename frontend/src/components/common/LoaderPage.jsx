import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import logo from "../../../logo/logo.png";

function LoaderPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1
        className="text-5xl font-bold text-black-200 mb-4"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Fauna Flick
      </h1>

      <img src={logo} alt="Logo" className="w-45 h-45 mb-8 animate-pulse" />

      {/* Loading Spinner */}
      <div className="flex items-center space-x-2">
        <LoadingSpinner size="lg" />
        <span className="text-lg text-gray-600">Loading...</span>
      </div>
    </div>
  );
}

export default LoaderPage;
