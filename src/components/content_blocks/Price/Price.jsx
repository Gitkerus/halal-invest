import React from "react";

import { Button } from "carbon-components-react";

import "./Price.scss";

const Price = ({ title, data, desc, headerCols }) => {
  return (
    <>
      <div className="price__title contentBlock__title">{title}</div>
      <div className="priceTabWrapper">
        <div className="price__tab">
          {headerCols ? (
            <div className="price__tab__header">
              <div className="tab__col tab__col-1">{headerCols.col1}</div>
              <div className="tab__col tab__col-2">{headerCols.col2}</div>
              <div className="tab__col tab__col-3">{headerCols.col3}</div>
            </div>
          ) : (
            <div className="price__tab__header">
              <div className="tab__col tab__col-1">
                <b>По секторам</b>
              </div>
              <div className="tab__col tab__col-2">
                <b>%</b>
              </div>
              <div className="tab__col tab__col-3">
                <b>Крупные позиции</b>
              </div>
            </div>
          )}
          <div className="vertLine"></div>
          {data.map((item) => (
            <div key={item.id}>
              <div className="price__tab__row">
                <div className="tab__col tab__col-1">{item.service}</div>
                <div className="tab__col tab__col-2">{item.price}</div>
                <div className="tab__col tab__col-3">{item.unit}</div>
              </div>
              <div className="vertLine"></div>
            </div>
          ))}
        </div>
      </div>
      {desc ? <div className="price__desc">{desc}</div> : ""}
      <div className="priceButtonWrapper">
        <Button className="price__button">Рассчитать стоимость</Button>
      </div>
    </>
  );
};

export default Price;
