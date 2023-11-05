import React from "react";

import { Button } from "carbon-components-react";

import "./Price.scss";

// const price_data = [
//   {
//     id: "1",
//     service: "МАЗ 650129-8420",
//     price: "ОТ 12000 Р",
//     unit: "СМЕНА",
//   },
//   {
//     id: "2",
//     service: "КАМАЗ К5042 65801-Т5",
//     price: "ОТ 12000 Р",
//     unit: "СМЕНА",
//   },
//   {
//     id: "3",
//     service: "МАЗ 650128-8520",
//     price: "ОТ 12000 Р",
//     unit: "СМЕНА",
//   },
//   {
//     id: "4",
//     service: "КОНТЕЙНЕРЫ 8.20. 27м3",
//     price: "ОТ 8000 Р",
//     unit: "СМЕНА",
//   },
//   {
//     id: "5",
//     service: "АРЕНДА САМОСВАЛА ",
//     price: "ОТ 1200 Р ",
//     unit: (
//       <>
//         м<sup>3</sup>
//       </>
//     ),
//   },
//   {
//     id: "6",
//     service: "Аренда экскаватора погрузчика",
//     price: "ОТ 12000 Р",
//     unit: (
//       <>
//         м<sup>3</sup>
//       </>
//     ),
//   },
//   {
//     id: "7",
//     service: "JCB 3CX",
//     price: "От 15 000 р",
//     unit: "СМЕНА",
//   },
//   {
//     id: "8",
//     service: "JCB 4CX",
//     price: "От 15 000 р",
//     unit: "СМЕНА",
//   },
//   {
//     id: "9",
//     service: "Аренда гусеничного экскаватора",
//     price: "ОТ 15000 Р",
//     unit: (
//       <>
//         м<sup>3</sup>
//       </>
//     ),
//   },
//   {
//     id: "10",
//     service: "JCB 200",
//     price: "ОТ 15000 Р",
//     unit: "СМЕНА",
//   },
//   {
//     id: "11",
//     service: "Экскаватор Hitachi-ZX-330",
//     price: "ОТ 15000 Р",
//     unit: "СМЕНА",
//   },
//   {
//     id: "12",
//     service: "Экскаватор Hyundai R290",
//     price: "ОТ 15000 Р",
//     unit: "СМЕНА",
//   },
//   {
//     id: "13",
//     service: "Аренда колёсного экскаватора",
//     price: "ОТ 1500 Р",
//     unit: (
//       <>
//         м<sup>3</sup>
//       </>
//     ),
//   },
//   {
//     id: "14",
//     service: "Cat M315D2, Cat M317D2, Cat M322D2",
//     price: "ОТ 1500 Р",
//     unit: (
//       <>
//         м<sup>3</sup>
//       </>
//     ),
//   },
//   {
//     id: "15",
//     service: "Catepillar M318D",
//     price: "ОТ 1500 Р",
//     unit: (
//       <>
//         м<sup>3</sup>
//       </>
//     ),
//   },
// ];

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
                <b>Услуга</b>
              </div>
              <div className="tab__col tab__col-2">
                <b>Цена (₽)</b>
              </div>
              <div className="tab__col tab__col-3">
                <b>Единица измерения</b>
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
