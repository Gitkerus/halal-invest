import React from "react";

import "./PricePage.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import Services from "../../components/content_blocks/Services/Services";
import OurProjects from "../../components/content_blocks/OurProjects/OurProjects";
import WorkSteps from "../../components/content_blocks/WorkSteps/WorkSteps";
import Reviews from "../../components/content_blocks/Reviews/Reviews";
import Clients from "../../components/content_blocks/Clients/Clients";
import Price from "../../components/content_blocks/Price/Price";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";

import ObserverWrap from "../../components/wrappers/ObserverWrap/ObserverWrap";

import priceMainBlock from "../../assets/priceMainBlock.png";

const mainBlock__data = {
  title: "Цены на наши услуги ",
  text: (
    <>
      <p>
        ООО Спецустройство, компания с многолетним опытом, мы работаем с
        юридическими и с физическими лицами.
      </p>
      <p>Мы предлагаем следующие виды оплаты:</p>

      <p>
        Наличный расчет Безналичный расчет Оплата на счет для юридических лиц
      </p>

      <p>
        Оплата осуществляется после проведения всех указанных работ в
        заключенном договоре.
      </p>
      <p>
        Мы предоставляем разрешения, заключаем договор, предлагаем
        индивидуальные условия.
      </p>
    </>
  ),
  img: priceMainBlock,
};

const price_data1 = [
  {
    id: "1",
    service: "МАЗ 650129-8420",
    price: "ОТ 12000 Р",
    unit: "СМЕНА",
  },
  {
    id: "2",
    service: "КАМАЗ К5042 65801-Т5",
    price: "ОТ 12000 Р",
    unit: "СМЕНА",
  },
  {
    id: "3",
    service: "МАЗ 650128-8520",
    price: "ОТ 12000 Р",
    unit: "СМЕНА",
  },
  {
    id: "4",
    service: "КОНТЕЙНЕРЫ 8.20. 27м3",
    price: "ОТ 8000 Р",
    unit: "СМЕНА",
  },
  {
    id: "5",
    service: "АРЕНДА САМОСВАЛА ",
    price: "ОТ 1200 Р ",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "6",
    service: "Аренда экскаватора погрузчика",
    price: "ОТ 12000 Р",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "7",
    service: "JCB 3CX",
    price: "От 15 000 р",
    unit: "СМЕНА",
  },
  {
    id: "8",
    service: "JCB 4CX",
    price: "От 15 000 р",
    unit: "СМЕНА",
  },
  {
    id: "9",
    service: "Аренда гусеничного экскаватора",
    price: "ОТ 15000 Р",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "10",
    service: "JCB 200",
    price: "ОТ 15000 Р",
    unit: "СМЕНА",
  },
  {
    id: "11",
    service: "Экскаватор Hitachi-ZX-330",
    price: "ОТ 15000 Р",
    unit: "СМЕНА",
  },
  {
    id: "12",
    service: "Экскаватор Hyundai R290",
    price: "ОТ 15000 Р",
    unit: "СМЕНА",
  },
  {
    id: "13",
    service: "Аренда колёсного экскаватора",
    price: "ОТ 1500 Р",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "14",
    service: "Cat M315D2, Cat M317D2, Cat M322D2",
    price: "ОТ 1500 Р",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "15",
    service: "Catepillar M318D",
    price: "ОТ 1500 Р",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
];

const price_data2 = [
  {
    id: "21",
    service: "Москва",
    price: "от 420 руб/м3",
    unit: "от 380 руб/м3",
  },
  {
    id: "22",
    service: "Московская область",
    price: "от 450 руб/м3",
    unit: "от 350 руб/м3",
  },
  {
    id: "23",
    service: "С утилизацией в МО",
    price: "от 480 руб/м3",
    unit: "от 460 руб/м3",
  },
];

const headerCols2 = {
  col1: <b>Город</b>,
  col2: (
    <>
      <b>20-300</b> м3
    </>
  ),
  col3: (
    <>
      <b>300-900</b> м3
    </>
  ),
};

const price_data3 = [
  {
    id: "31",
    service: "Москва",
    price: "от 420 руб/м3",
    unit: "от 380 руб/м3",
  },
  {
    id: "32",
    service: "Московская область",
    price: "от 450 руб/м3",
    unit: "от 350 руб/м3",
  },
];

const price_data4 = [
  {
    id: "41",
    service: "Москва",
    price: "от 455 руб/м3",
    unit: "от 380 руб/м3",
  },
  {
    id: "42",
    service: "Московская область",
    price: "от 385 руб/м3",
    unit: "от 350 руб/м3",
  },
];

const price_data5 = [
  {
    id: "51",
    service: "Москва",
    price: "от 580 руб/м3",
    unit: "от 490 руб/м3",
  },
  {
    id: "52",
    service: "Московская область",
    price: "от 570 руб/м3",
    unit: "от 510 руб/м3",
  },
];

const price_data6 = [
  {
    id: "61",
    service: "Москва",
    price: "от 550 руб/м3",
    unit: "от 490 руб/м3",
  },
  {
    id: "62",
    service: "Московская область",
    price: "от 540 руб/м3",
    unit: "от 490 руб/м3",
  },
];

const price_data7 = [
  {
    id: "71",
    service: "Москва",
    price: "от 350 руб/м3",
    unit: "от 329 руб/м3",
  },
  {
    id: "72",
    service: "Московская область",
    price: "от 460 руб/м3",
    unit: "от 440 руб/м3",
  },
];

const price_data8 = [
  {
    id: "81",
    service: "ОТ 1 ДО 5 КОНТЕЙНЕРОВ В ДЕНЬ ",
    price: "0.8",
    unit: "470 руб",
  },
  {
    id: "82",
    service: "ОТ 1 ДО 5 КОНТЕЙНЕРОВ В ДЕНЬ ",
    price: "1.1",
    unit: "610 руб",
  },
  {
    id: "83",
    service: "ОТ 1 ДО 5 КОНТЕЙНЕРОВ В ДЕНЬ ",
    price: "8",
    unit: "от 4 950 руб",
  },
  {
    id: "84",
    service: "ОТ 1 ДО 5 КОНТЕЙНЕРОВ В ДЕНЬ ",
    price: "20",
    unit: "от 14 900 руб",
  },
  {
    id: "85",
    service: "ОТ 1 ДО 5 КОНТЕЙНЕРОВ В ДЕНЬ ",
    price: "27",
    unit: "от 18 900 руб",
  },
];

const headerCols3 = {
  col1: <b>Количество</b>,
  col2: (
    <>
      <b>Объем контейнеров</b> м3
    </>
  ),
  col3: <b>Цена</b>,
};

const price_data9 = [
  {
    id: "91",
    service: "Москва",
    price: "от 400 руб/м3",
    unit: "от 380 руб/м3",
  },
  {
    id: "92",
    service: "Московская область",
    price: "от 350 руб/м3",
    unit: "от 329 руб/м3",
  },
];

const price_data10 = [
  {
    id: "101",
    service: "Москва",
    price: "от 455 руб/м3",
    unit: "от 415 руб/м3",
  },
  {
    id: "102",
    service: "Московская область",
    price: "от 385 руб/м3",
    unit: "от 364 руб/м3",
  },
];

const price_data11 = [
  {
    id: "101",
    service: "Москва",
    price: "от 580 руб/м3",
    unit: "от 540 руб/м3",
  },
  {
    id: "102",
    service: "Московская область",
    price: "от 550 руб/м3",
    unit: "от 510 руб/м3",
  },
];

const headerCols4 = {
  col1: <b>Город</b>,
  col2: (
    <>
      <b>до 600</b> м3
    </>
  ),
  col3: (
    <>
      <b>3600-4000</b> м3
    </>
  ),
};

const contentProps = [
  {
    id: "n1",
    link: "Обратная связь",
    path: "CalcPrice",
    className: "calcPrice",
    component: <CalcPrice />,
  },
  {
    id: "n2",
    link: "Основные услуги",
    path: "Services",
    className: "services",
    component: <Services />,
  },
  {
    id: "n3",
    link: "Цены на аренду спецтехники в Москве",
    path: "Price1",
    className: "price",
    component: (
      <Price title="Цены на аренду спецтехники в Москве" data={price_data1} />
    ),
  },
  {
    id: "n4",
    link: "Вывоз грунта",
    path: "Price2",
    className: "price",
    component: (
      <Price
        title="Вывоз грунта"
        data={price_data2}
        headerCols={headerCols2}
        desc="Цена на вывоз грунта за 1 м³ варьируется и может отличаться от многих
    факторов. Основные факторы, от которых зависит цена: классификация (I-IV
    группа); уровень влажности материала; расстояние от стройплощадки до
    выбранного полигона; объем транспортировки; расценки полигона на приемку
    (обычно 40-190 рублей за метр кубический)."
      />
    ),
  },
  {
    id: "n5",
    link: "Вывоз бетонного боя без погрузки",
    path: "Price3",
    className: "price",
    component: (
      <Price
        title="Вывоз бетонного боя без погрузки"
        data={price_data3}
        headerCols={headerCols2}
      />
    ),
  },
  {
    id: "n6",
    link: "Вывоз бетонного боя с погрузкой",
    path: "Price4",
    className: "price",
    component: (
      <Price
        title="Вывоз бетонного боя с погрузкой"
        data={price_data4}
        headerCols={headerCols2}
        desc="Конечнаая цена зависит от нескольких факторов, требуется ли погрузка или нет, производится перевозка на утилизацию или на полигон. Утилизация бетонного боя производится на специализированных предприятиях в соответствии с условиями заключенного договора на обслуживание."
      />
    ),
  },
  {
    id: "n7",
    link: "Вывоз строительного мусора с погрузкой",
    path: "Price5",
    className: "price",
    component: (
      <Price
        title="Вывоз строительного мусора с погрузкой"
        data={price_data5}
        headerCols={headerCols2}
      />
    ),
  },
  {
    id: "n8",
    link: "Вывоз строительного мусора без погрузки",
    path: "Price6",
    className: "price",
    component: (
      <Price
        title="Вывоз строительного мусора без погрузки"
        data={price_data6}
        headerCols={headerCols2}
        desc="Конечнаая цена зависит от нескольких факторов, требуется ли погрузка или нет, производится перевозка на утилизацию или на полигон. Утилизация бетонного боя производится на специализированных предприятиях в соответствии с условиями заключенного договора на обслуживание."
      />
    ),
  },
  {
    id: "n9",
    link: "Вывоз мусора",
    path: "Price7",
    className: "price",
    component: (
      <Price title="Вывоз мусора" data={price_data7} headerCols={headerCols2} />
    ),
  },
  {
    id: "n10",
    link: "Вывоз мусора",
    path: "Price8",
    className: "price",
    component: (
      <Price
        title="Вывоз мусора"
        data={price_data8}
        headerCols={headerCols3}
        desc={
          <>
            Цена с погрузкой + 35 рублей/м³ <br />
            Цена является предварительной и зависит от деталей заказа. <br />
            Отправьте заявку для окончательного расчета стоимости работ. <br />
            Цена на вывоз грунта за 1 м³ варьируется и может отличаться от
            многих факторов. Основные факторы, от которых зависит цена: <br />
            классификация (I-IV группа); уровень влажности материала; расстояние
            от стройплощадки до выбранного полигона; объем транспортировки;
            расценки полигона на приемку (обычно 40-190 рублей за метр
            кубический).
          </>
        }
      />
    ),
  },
  {
    id: "n11",
    link: "Вывоз снега без погрузки",
    path: "Price9",
    className: "price",
    component: (
      <Price
        title="Вывоз снега без погрузки"
        data={price_data9}
        headerCols={headerCols2}
      />
    ),
  },
  {
    id: "n12",
    link: "Вывоз снега с погрузкой",
    path: "Price10",
    className: "price",
    component: (
      <Price
        title="Вывоз снега с погрузкой"
        data={price_data10}
        headerCols={headerCols2}
        desc="Точная цена услуги зависит от места забора. В Московской области функционируют несколько снегоплавильных пунктов. Сумма за услугу перевозки зависит от расстояния между этими пунктами. Вы также можете заказать уборку снега с вашей территории."
      />
    ),
  },
  {
    id: "n13",
    link: "Разработка котлована",
    path: "Price11",
    className: "price",
    component: (
      <Price
        title="Разработка котлована"
        data={price_data11}
        headerCols={headerCols4}
        desc={
          <>
            Цена на услуги <u>разработка котлованов</u> и рытье траншей. Мы
            рассчитываем цену на земляные работы исходя из объема, типа и
            количества необходимой техники, требуется ли перевозка на полигон. В
            наличии экскаваторы с разной глубиной ковша и разного назначения.
            Также самосвалы и грузовые машины с контейнерами объемом от 8 м³ до
            24 м³.
          </>
        }
      />
    ),
  },
  {
    id: "n14",
    link: "Примеры работ",
    path: "OurProjects",
    className: "ourProjects",
    component: <OurProjects />,
  },
  {
    id: "n15",
    link: "Этапы работ",
    path: "WorkSteps",
    className: "workSteps",
    component: <WorkSteps />,
  },
  {
    id: "n16",
    link: "Отзывы клиентов",
    path: "Reviews",
    className: "reviews",
    component: <Reviews />,
  },
  {
    id: "n17",
    link: "Наши клиенты",
    path: "Clients",
    className: "clients",
    component: <Clients />,
  },
];

const PricePage = () => {
  return (
    <>
      <HeaderUI />
      <div className="content">
        <MainBlock {...mainBlock__data} />
        <div className="contentWrapper">
          <NavSlider props={contentProps} />
          <div className="contentCollum">
            {contentProps.map((content) => {
              return (
                <ObserverWrap
                  key={content.path}
                  className={content.className}
                  id={content.path}
                >
                  {content.component}
                </ObserverWrap>
              );
            })}
          </div>
        </div>
      </div>
      <PopUp />
      <Footer />
    </>
  );
};

export default PricePage;
