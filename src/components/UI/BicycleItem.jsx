import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/bicycle-item.css";

const BicycleItem = (props) => {
  const { imgUrl, model, bicycleName, automatic, speed, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="bicycle__item">
        <div className="bicycle__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="bicycle__item-content mt-4">
          <h4 className="section__title text-center">{bicycleName}</h4>
          <h6 className="rent__price text-center mt-">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="bicycle__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-bicycle-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <button className=" w-50 bicycle__item-btn bicycle__btn-rent">
            <Link to={`/bicycles/${bicycleName}`}>Rent</Link>
          </button>

          <button className=" w-50 bicycle__item-btn bicycle__btn-details">
            <Link to={`/bicycles/${bicycleName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default BicycleItem;
