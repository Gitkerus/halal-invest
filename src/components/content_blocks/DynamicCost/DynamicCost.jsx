import React from "react";
import { Button } from "carbon-components-react";

import "./DynamicCost.scss";
import dynamicCost1 from "../../../assets/dynamicCost/dynamicCost1.png";
import dynamicCost2 from "../../../assets/dynamicCost/dynamicCost2.png";
import dynamicCost3 from "../../../assets/dynamicCost/dynamicCost3.png";
import dynamicCost4 from "../../../assets/dynamicCost/dynamicCost4.png";

const DynamicCost = () => {
  return (
    <>
      <div className="dynamicCost__title contentBlock__title">
        Динамика стоимости
      </div>
      <div className="dynamicCostContent">
        <div className="dynamicCostBlock">
          <div className="dynamicCost__graphs">
            <img src={dynamicCost1} alt="dynamicCost1" />
          </div>
        </div>
        <div className="dynamicCostBlock">
          <div className="dynamicCost__graphs">
            <img src={dynamicCost2} alt="dynamicCost2" />
          </div>
        </div>
        <div className="dynamicCostBlock">
          <div className="dynamicCost__graphs">
            <img src={dynamicCost3} alt="dynamicCost3" />
          </div>
        </div>
        <div className="dynamicCostBlock">
          <div className="dynamicCost__graphs">
            <img src={dynamicCost4} alt="dynamicCost4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicCost;
