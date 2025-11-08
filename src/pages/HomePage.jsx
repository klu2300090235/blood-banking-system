import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";

function HomePage() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="home-container">
      {/* Slider Section */}
      <div className="slider-container">
        <button className="slider-arrow left-arrow" onClick={() => sliderRef.current.slickPrev()}>
          ❮
        </button>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <img src="/images/slide4.jpg" alt="1" className="slider-image" />
          </div>
          <div>
            <img src="/images/slide5.jpg" alt="2" className="slider-image" />
          </div>
          <div>
            <img src="/images/slide6.jpg" alt="3" className="slider-image"/>
          </div>
        </Slider>
        <button className="slider-arrow right-arrow" onClick={() => sliderRef.current.slickNext()}>
          ❯
        </button>
      </div>

      {/* Three Enlarged Cards */}
      <div className="container sections-container">
        <div className="row">
          <div className="col-md-4">
            <div className="custom-card">
              <h5 className="card-title">Donate Blood</h5>
              <p className="card-text">
                Be a hero! Your donation can save lives. Join our blood donation network today.
              </p>
              <button className="card-btn">Donate Now</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="custom-card">
              <h5 className="card-title">Request Blood</h5>
              <p className="card-text">
                Need blood? Find a suitable donor near you quickly and safely.
              </p>
              <button className="card-btn">Request Blood</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="custom-card">
              <h5 className="card-title">Join Our Network</h5>
              <p className="card-text">
                Be part of our life-saving mission. Register as a donor or hospital partner.
              </p>
              <button className="card-btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>


      {/* Blood Donation Information Section (Two Columns - 65% and 35%) */}
      <div className="donation-info-section">
        <div className="container">
          <div className="row">
            {/* Left Column (65% - Information) */}
            <div className="col-md-8 donation-text-section">
              <h2 className="donation-heading">Why Donate Blood?</h2>
              <p className="donation-text">
                Every 2 seconds, someone in the world needs blood. Whether it's for an accident victim, a cancer patient, or a life-saving surgery, blood donation is a crucial need in healthcare.
              </p>
      
              <h3 className="donation-subheading">Benefits of Blood Donation</h3>
              <p className="donation-text">
                Blood donation is not just about helping others—it benefits the donor too! Regular donation helps maintain heart health, stimulates blood cell production, and reduces the risk of certain diseases.
              </p>
              <h3 className="donation-subheading">How You Can Help</h3>
              <p className="donation-text">
                By donating just one pint of blood, you can save up to 3 lives. It only takes 15 minutes to donate, but the impact lasts a lifetime.
              </p>
              <p className="donation-text">
                Join us in making a difference—become a donor today!
              </p>
            </div>

            {/* Right Column (35% - Empty for Future Table/Image) */}
            <div className="col-md-4 donation-image-section">
              {/* You can add an image or table here later */}
              <img src="/images/donation.png" alt="donation.png" />
            </div>
          </div>
        </div>
      </div>

      {/* Blood Donation Statistics Section */}
<div className="blood-donation-stats-section">
  <div className="container">
    <h2 className="stats-heading">Blood Donation Statistics</h2>
    <p className="stats-description">
      Blood donation is a life-saving act that impacts millions. Here are some important statistics about blood donation in India and worldwide.
    </p>
    <div className="row">
      {/* Card 1 */}
      <div className="col-md-4 mb-4">
        <div className="stats-card">
          <h5 className="stats-card-title">India's Blood Requirement</h5>
          <ul className="stats-list">
            <li>India requires 15 million blood units annually.</li>
            <li>Only 11 million units are collected each year.</li>
            <li>Blood shortages are common in rural areas.</li>
          </ul>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4 mb-4">
        <div className="stats-card">
          <h5 className="stats-card-title">Donor Participation</h5>
          <ul className="stats-list">
            <li>Only 1% of India's population donates blood.</li>
            <li>Many potential donors fear side effects.</li>
            <li>You can donate blood every 3 months.</li>
          </ul>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4 mb-4">
        <div className="stats-card">
          <h5 className="stats-card-title">Impact of One Donation</h5>
          <ul className="stats-list">
            <li>One blood donation can save up to 3 lives.</li>
            <li>Each donation provides red cells, plasma, and platelets.</li>
            <li>Regular donors help maintain a stable supply.</li>
          </ul>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-md-4 mb-4">
        <div className="stats-card">
          <h5 className="stats-card-title">Blood Shelf Life</h5>
          <ul className="stats-list">
            <li>Red blood cells last only 42 days.</li>
            <li>Platelets expire in just 5 days.</li>
            <li>Continuous donations are needed to meet demand.</li>
          </ul>
        </div>
      </div>

      {/* Card 5 */}
      <div className="col-md-4 mb-4">
        <div className="stats-card">
          <h5 className="stats-card-title">Global Blood Shortage</h5>
          <ul className="stats-list">
            <li>Every 2 seconds, someone needs blood worldwide.</li>
            <li>Only 38% of eligible donors donate regularly.</li>
            <li>Developing countries face severe shortages.</li>
          </ul>
        </div>
      </div>

      {/* Card 6 */}
      <div className="col-md-4 mb-4">
        <div className="stats-card">
          <h5 className="stats-card-title">Rare Blood Types</h5>
          <ul className="stats-list">
            <li>O-negative is the universal donor type.</li>
            <li>AB-positive is the universal plasma donor.</li>
            <li>Less than 1% of people have AB-negative blood.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>



      

  );
}

export default HomePage;