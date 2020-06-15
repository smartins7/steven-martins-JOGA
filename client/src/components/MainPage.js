import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainPage() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__container">
          <h1 className="hero__slogan">PLAY TOGETHER</h1>
          <div className="hero__desktop">
            <h2 className="hero__description">
              Find local soccer, basketball, and street-hockey pick-up games in
              your area right here.
            </h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
