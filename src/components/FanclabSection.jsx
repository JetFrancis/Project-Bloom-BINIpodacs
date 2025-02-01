import React from "react";
import "../assets/styles/FanClabSection.css";

const FanclubSection = () => {
  return (
    <section class="fan-club">
      <div class="fan-club-content">
        <h2>
          "Join our official fan club for exclusive content, early access to
          tickets, and more!"
        </h2>
      </div>
      <div class="newsletter">
        <p class="newsletter-title">
          Subscribe to our newsletter for the latest updates and exclusive
          offers
        </p>
        <div class="newsletter-form">
          <input type="text" />
          <button class="join-button">Join Now!</button>
        </div>
      </div>
    </section>
  );
};

export default FanclubSection;
