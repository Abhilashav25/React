import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Browse our diverse menu to select meals that cater to your taste and dietary preferences",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Set a delivery schedule that fits your lifestyle, with options for weekly, bi-weekly, or monthly deliveries. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy the convenience of quick and reliable meal delivery, ensuring fresh flavors right to your doorstep.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Understanding our process is simple. First, select the meals you love from our weekly menu crafted by nutrition experts. Then, choose how often you'd like your meals delivered—our flexible plans are designed to fit your schedule. Finally, enjoy restaurant-quality meals from the comfort of your home.
        With our fast delivery service, a delicious and nutritious meal is just moments away.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
