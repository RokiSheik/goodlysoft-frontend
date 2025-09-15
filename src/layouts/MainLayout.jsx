import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import "../index.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 p-6">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
