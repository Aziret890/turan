import React from "react";
import NewAdmissionsChild from "../NewAdmission/components/NewAdmissionsChild";
import "./styles.scss";
import arrow from "../../shared/svg/arrow.svg";

function Recomindation() {
  return (
    <div className="container">
      <div className="newAdmissions__content mt-14">
        <div className="flex justify-between">
          <h1>Рекомендация</h1>
          <div className="flex gap-5">
            <h1>Смотреть все</h1>
            <button>
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        <div className="newAdmissions__content1">
          <NewAdmissionsChild />
          <NewAdmissionsChild />
        </div>
      </div>
    </div>
  );
}

export default Recomindation;
