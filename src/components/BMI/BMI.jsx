import React, { useState } from "react";
import "./Bmi.css";
import bmiImg from "../../assets/images/bmi-index.jpg";

export default function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmiResult(bmi);
    }
  };

  return (
    <section id="bmi" className="bmi-wrap section">
      <div className="container bmi-section">
        {/* Metin */}
        <div className="bmi-text">
          <h2>Calculate Your BMI</h2>
          <p>
            Use our BMI calculator to determine your ideal weight range. Keep
            track of your health and fitness goals.
          </p>

          <form className="bmi-form" onSubmit={calculateBMI}>
            <label>
              Weight (kg)
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </label>

            <label>
              Height (cm)
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </label>

            <button type="submit" className="btn">
              Calculate
            </button>
          </form>

          {bmiResult && (
            <div className="bmi-output">
              <p>Your BMI is:</p>
              <span id="bmiResult">{bmiResult}</span>
            </div>
          )}
        </div>

        {/* Görsel */}
        <div className="bmi-image">
          <img src={bmiImg} alt="BMI Illustration" />
        </div>
      </div>
    </section>
  );
}
