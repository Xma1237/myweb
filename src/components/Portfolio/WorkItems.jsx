import React, { useState } from "react";

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTag = () => {
    setToggleState(() => (toggleState === 1 ? 2 : 1));
  };


  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <button href="" className="work__button" onClick={() => toggleTag()}>
        Detail
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </button>
      <div className={toggleState === 1 ? "work__detail" : "work__detail-show"}>
        {item.detail}
      </div>
    </div>
  );
};

export default WorkItems;
