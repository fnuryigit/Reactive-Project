import React, { useState } from "react";
import "./Classes.css";

import yogaImg from "../../assets/images/yoga.jpg";
import groupImg from "../../assets/images/group.webp";
import soloImg from "../../assets/images/solo.jpg";
import stretchImg from "../../assets/images/stret.webp";

export default function Classes() {
  const [activeClass, setActiveClass] = useState("yoga");

  // ... (classesData kısmı aynı kalıyor) ...
  const classesData = [
    {
      id: "yoga",
      title: "Yoga",
      img: yogaImg,
      subtitle: "Why are your yoga",
      text: "Yoga improves not just your body but also your mind and spirit. With expert instruction blending ancient traditions with modern insights, we support you in every stage.",
      scheduleTitle: "When come yoga your time",
      schedule: [
        "Sunday - Monday 08:00am - 10:00am",
        "Monday - Friday: 13:00am - 15:00am",
        "Tuesday - Saturday: 10:00am- 12:00am",
      ],
    },
    {
      id: "group",
      title: "Group",
      img: groupImg,
      subtitle: "Why Group Training?",
      text: "Group classes motivate you with shared energy and teamwork. Group workouts bring motivation, energy, and accountability. Train with others, share the challenge, and celebrate your progress together.",
      scheduleTitle: "Group Schedule",
      schedule: [
        "Monday - Wednesday 09:00am - 11:00am",
        "Friday: 17:00pm - 19:00pm",
      ],
    },
    {
      id: "solo",
      title: "Solo",
      img: soloImg,
      subtitle: "Why Solo Training?",
      text: "Solo classes focus completely on you with personal guidance. For those who prefer privacy and full focus, solo training is the best choice. Tailored programs ensure you progress at your own pace.",
      scheduleTitle: "Solo Schedule",
      schedule: ["Everyday: Flexible hours with personal booking"],
    },
    {
      id: "stretching",
      title: "Stretching",
      img: stretchImg,
      subtitle: "Stretching Classes",
      text: "Improve mobility, prevent injuries, and feel lighter with guided stretching sessions.",
      scheduleTitle: "Stretching Schedule",
      schedule: [
        "Tuesday - Thursday 11:00am - 12:00pm",
        "Saturday: 15:00pm - 16:00pm",
      ],
    },
  ];

  return (
    <section id="classes" className="section">
      <div className="container">
        {/* KAYMA SORUNUNU ÇÖZECEK YENİ BAŞLIK BLOK YAPISI */}
        <div className="classes-header">
          <h2 className="classes-title">Our Classes</h2>
          <div className="underline"></div> {/* Sarı alt çizgi için */}
          <p className="classes-description">
            Here you can find a variety of classes designed to improve your
            strength, flexibility, and overall fitness. There is no perfect
            moment to start your time is now.
          </p>
        </div>

        {/* Butonlar */}
        <div className="class-buttons">
          {classesData.map((cls) => (
            <button
              key={cls.id}
              className={`class-btn ${activeClass === cls.id ? "active" : ""}`}
              onClick={() => setActiveClass(cls.id)}
            >
              {cls.title}
            </button>
          ))}
        </div>

        {/* İçerik */}
        <div className="class-sections">
          {classesData.map((cls) => (
            <div
              key={cls.id}
              className={`class-section ${
                activeClass === cls.id ? "active" : ""
              }`}
            >
              <div className="class-text">
                <h3>{cls.subtitle}</h3>
                <p>{cls.text}</p>
                <h4>{cls.scheduleTitle}</h4>
                <ul>
                  {cls.schedule.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="class-image">
                <img src={cls.img} alt={cls.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
