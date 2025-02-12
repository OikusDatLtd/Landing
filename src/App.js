import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import WhoAreWe from "./components/PlatForm";
import UserTesting from "./components/UserTesting";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Welcome />
      <WhoAreWe />
      <UserTesting />
      <Footer />
    </div>
  );
}

export default App;
