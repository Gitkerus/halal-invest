import React from "react";
import { Button } from "carbon-components-react";

import "./DynamicCost.scss";
import dynamicCost1 from "../../../assets/Placeholder.png";
import dynamicCost2 from "../../../assets/Placeholder.png";
import dynamicCost3 from "../../../assets/Placeholder.png";
import dynamicCost4 from "../../../assets/Placeholder.png";

const DynamicCost = () => {
  return (
    <>
      <div className="dynamicCost__title contentBlock__title">
        Динамика стоимости
      </div>
      <div className="dynamicCostContent">
        <div className="dynamicCostBlock">
          <div className="dynamicCostImgWrapper">
            <img
              className="dynamicCost__img"
              src={dynamicCost1}
              alt="dynamicCost1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicCost;
