// src/components/Reviews/Reviews.jsx
import React from "react";
import "./reviews.css";

// Gerçek görseller
import client1 from "../../assets/images/client1.jpg";
import client2 from "../../assets/images/client2.jpg";

export default function Reviews() {
  const reviews = [
    {
      name: "Alex Johnson",
      role: "CEO, Company A",
      img: client1,
      text: "Amazing service! Highly recommend to anyone looking for quality. I've found that using social proof notification increases my conversion rate because it provides potential customers with verification that others have chosen to do business with me.",
    },
    {
      name: "Jessy Walker",
      role: "CEO, Company B",
      img: client2,
      text: "Professional and reliable. Our expectations were exceeded! I joined this gym a year ago, and it's been the best decision I ever made. The trainers are incredibly knowledgeable and supportive, and I've seen amazing results. Amazing service! Highly recommend.",
    },
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2>REVIEW CLIENT</h2>
        <p>
          We pride ourselves on delivering excellent service and client
          satisfaction.
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.img} alt={review.name} className="review-img" />
            <h3>{review.name}</h3>
            <h4>{review.role}</h4>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
