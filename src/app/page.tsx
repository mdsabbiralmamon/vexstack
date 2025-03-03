import Hero from "@/components/Home/Hero/Hero";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <header className="h-screen">
        <Navbar />
        <Hero />
      </header>
      <main>
        <p>Home</p>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
