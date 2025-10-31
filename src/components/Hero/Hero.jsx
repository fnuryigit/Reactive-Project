import React from "react";
import "./Hero.css";
import heroImg from "../../assets/images/hero-man.jpg";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.4), rgba(29,47,79,0.6)), url(${heroImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center", // İçeriği dikeyde ortalar
      }}
    >
      <div className="container">
        {/* BURADA DEĞİŞİKLİK YAPILDI: Artık 'tag' sınıfını kullanıyoruz */}
        <span className="tag">POWERFULL</span>

        {/* Başlıkların tek bir <h1> içinde olması SEO açısından daha iyidir, ama görseldeki stil için bu şekilde bırakılabilir. */}
        <h1>Group </h1>
        <h1> Practice </h1>
        <h1> With Trainer </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero
          veniam, facilis, cumque delectus tenetur perferendis voluptatem eum
          harum ad corporis repellendus quae totam deserunt laudantium enim
          voluptates dignissimos distinctio. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iure sunt quos excepturi quis cum
          assumenda, ea incidunt maxime velit, accusantium obcaecati alias
          ducimus provident!
        </p>
        <div className="hero-buttons">
          <a href="#classes" className="btn">
            Sign Up
          </a>
          <a href="#details" className="btn btn-details">
            Details
          </a>
        </div>
      </div>
    </section>
  );
}
