import React from "react";
import "./trainers.css";

// Trainer görselleri
import alexImg from "../../assets/images/trainer1.jpg";
import chrisImg from "../../assets/images/trainer2.jpg";
import mayaImg from "../../assets/images/trainer3.jpg";

// Ürün görselleri
import purchase1 from "../../assets/images/purchase1.jpg";
import purchase2 from "../../assets/images/purchase2.jpg";
import purchase3 from "../../assets/images/purchase3.jpg";
import purchase4 from "../../assets/images/purchase4.jpg";

export default function Trainers() {
  const trainers = [
    { name: "Alex Johnson", role: "Strength & Conditioning", img: alexImg },
    { name: "Chris Walker", role: "Boxing Coach", img: chrisImg },
    { name: "Maya Lee", role: "Yoga & Mobility", img: mayaImg },
  ];

  const products = [
    {
      name: "Kettlebell / 5 kg",
      oldPrice: "89.99 €",
      newPrice: "55.99 €",
      img: purchase1,
    },
    {
      name: "Treadmill",
      oldPrice: "899.99 €",
      newPrice: "559.99 €",
      img: purchase2,
    },
    {
      name: "Adjustable Dumbell",
      oldPrice: "99.99 €",
      newPrice: "75.99 €",
      img: purchase3,
    },
    {
      name: "Kettlebell / 3 kg",
      oldPrice: "89.99 €",
      newPrice: "55.99 €",
      img: purchase4,
    },
  ];

  return (
    <section className="trainers-and-purchases-section">
      {/* -----------------------------------
      // 1. TRAINERS BÖLÜMÜ 
      // ----------------------------------- */}
      <div className="trainers-section">
        <div className="trainers-header">
          <h2>Our Best Trainers</h2>
          <p>
            So with the internet making it possible to work with a personal
            trainer and other famous fitness people anywhere in the world, who
            are the best of the best?
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <div className="trainer-card" key={index}>
              <img src={trainer.img} alt={trainer.name} />
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <p>{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -----------------------------------
      // 2. PURCHASES BÖLÜMÜ 
      // ----------------------------------- */}
      <div className="purchases-section">
        {/* Görseldeki mavi başlık alanı */}
        <div className="purchases-header-container">
          <div className="purchases-header">
            <h2>PURCHASES FROM US</h2>
            <p>
              We offer the best range of running, cycling, gym, fitness and
              outdoor products. Discover our range of road and mountain bikes,
              running shoes and running ...
            </p>
          </div>
        </div>

        {/* Ürün kartları */}
        <div className="products-grid">
          {products.map((product, idx) => (
            <div className="product-card" key={idx}>
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price-info">
                <span className="old-price">{product.oldPrice}</span>{" "}
                <span className="new-price">{product.newPrice}</span>
              </p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
