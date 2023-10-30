import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Fast learner</h3>
      </div>

      <div className="about__box">
        <i class="bx bx-group about__icon"></i>

        <h3 className="about__title">Team work</h3>
      </div>

      <div className="about__box">
        <i class="bx bx-detail about__icon"></i>

        <h3 className="about__title">Details</h3>
      </div>
    </div>
  );
};

export default Info;
