import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <>
    <div className="home">
      <img
        className="home-image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner image "
      />

      {/* Product Id, title, price , rating, image  */}
      <div className="home-row">
        <Product
          id="1234561"
          title="2020 Apple MacBook Pro with Intel Processor (13-inch, 16GB RAM, 1TB SSD Storage) - Space Gray"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/71bElkQQ7LL._AC_UY218_.jpg"
        />

        <Product
          id="12340561"
          title="DINA100 Gaming Headset 3.5mm Surround Stereo Gaming Headphones with Microphone RGB Marquee Light & Adjustable for PS5 PS4 Xbox Series x Xbox one PC Mac"
          price={20.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/81FpaX4SvWL._AC_UY218_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="23090861"
          title="Logitech G502 HERO High Performance Wired Gaming Mouse, 25,600 DPI, RGB, Adjustable Weights, "
          price={21.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg"
        />

        <Product
          id="2345900"
          title="2021 Apple iMac (24-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB) - Blue"
          price={75.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61p-ADlugUS._AC_UY218_.jpg"
        />

        <Product
          id="2346506789"
          title=" iPhone 12 Pro Case, Heavy-Duty Tough Rugged Lightweight Slim Shockproof Protective Case for iPhone 12 6.1 Inch, Black"
          price={100.46}
          rating={5}
          image="https://m.media-amazon.com/images/I/41MT80eulEL._AC_SR160,160_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="4500001"
          title="Redragon K552 Mechanical Gaming Keyboard RGB LED Rainbow Backlit Wired Keyboard with Red Switches "
          price={40.66}
          rating={4}
          image="https://m.media-amazon.com/images/I/71cngLX2xuL._AC_UY218_.jpg"
        />
      </div>
    </div>
    </>
  );
}

export default Home;
