import React from "react";

import { useState, useEffect } from "react";

import "./MainPage.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import TextBlock from "../../components/content_blocks/TextBlock/TextBlock";
import Tags from "../../components/content_blocks/Tags/Tags";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";
import StartInvest from "../../components/content_blocks/StartInvest/StartInvest";
import Services from "../../components/content_blocks/Services/Services";
import Reports from "../../components/content_blocks/Reports/Reports";
import Control from "../../components/content_blocks/Control/Control";
import InvestCondition from "../../components/content_blocks/InvestCondition/InvestCondition";
// import Price from "../../components/content_blocks/Price/Price";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Articles from "../../components/content_blocks/Articles/Articles";

import ObserverWrap from "../../components/wrappers/ObserverWrap/ObserverWrap";

import MainBlockCustom from "../../components/content_blocks/MainBlockCustom/MainBlockCustom";

const KeyInfo_data = {
  title: "Ключевая информация",
  blocksPerLine: 3,
  linked: true,
  data: [
    {
      id: "key1",
      title: "Инвестирование в перспективные активы",
      text: "С качественным распределением активов по компаниям, диверсификация капитала",
      path: "",
    },
    {
      id: "key2",
      title: "Профессиональное управление",
      text: "За сохранением набора активов следит наша команда, а не инвесторы",
      path: "",
    },
    {
      id: "key3",
      title: "Накопите на цель",
      text: "Достижение цели намного проще с Халяль Инвест",
      path: "",
    },
  ],
};

const Scenario_data = {
  title: "Сценарии Инвестирования",
  blocksPerLine: 3,
  linked: true,
  data: [
    {
      id: "scenario1",
      title: "Инвестирование в перспективные активы",
      text: "Все соответствует ожиданию наших аналитиков, ценные бумаги в рамках стратегии приносят доход на том же уровне что и в аналогичный период прошлого года",
      path: "",
    },
    {
      id: "scenario2",
      title: "Позитивный сценарий",
      text: "Стоимость ценных бумаг компаний, в которые мы инвестируем в рамках нашей концепции, растут быстрее в связи с позитивным сценарием",
      path: "",
    },
    {
      id: "scenario3",
      title: "Негативный",
      text: "Если ситуация на фондовом рынке развивается хуже чем ожидания аналитиков, вероятность такого сценария ниже чем вероятность нейтрального, то мы используем  стоп лосс на падении акции на минус 2%",
      path: "",
    },
  ],
};

const HowInvest_data = {
  title: "Как Инвестировать",
  blocksPerLine: 2,
  linked: true,
  data: [
    {
      id: "howInvest1",
      title: "Через оставление заявки",
      text: (
        <>
          Вы можете оставить заявку и наш специалист ответит на все интересующие
          вас вопросы, проведет презентацию продуктов. Получите информацию о
          регистрации инвесторов, процессе инвестиций, минимализация рисков,
          получение и распределение прибыли
        </>
      ),
      path: "",
    },
    {
      id: "howInvest2",
      title: "Персональный Менеджер",
      text: (
        <>
          Каждому инвестору доступна бесплатная услуга персонального менеджера,
          который поможет оформить договор доверительного управления и будет
          консультировать на всех этапах сотрудничества
        </>
      ),
      path: "",
    },
  ],
};

const HalalInvest_data = {
  title: "Халяльные Инвестиции",
  blocksPerLine: 2,
  linked: true,
  desc: "Халяль инвест не берет комиссию за доверительное управление, нет скрытых займов и процентов, все наши сделки 100% соответствуют индексу Халяльные инвестиции",
  data: [
    {
      id: "invest1",
      title: "Доверительное управление",
      text: (
        <>
          Халяльные инвестиции - это стратегия доверительного управления,
          которая позволяет формировать долгосрочный капитал, инвестируя в акции
          компаний, чьи финансовые и экономические принципы соответствуют нормам
          шариата. Эти компании обладают достаточной ликвидностью и потенциалом
          роста. Халяльное инвестирование является видом социально
          ответственного инвестирования и относится к ESG-продуктам по критерию
          Social*. Цель халяльных инвестиций - максимизация вложенного капитала
          с помощью выбора акций компаний, которые соответствуют принципам
          шариата и обладают хорошим потенциалом роста. Мы предлагаем
          инвестировать без квалу, даем полный доступ ко всем халяль акциям на
          мировом рынке
        </>
      ),
      path: "",
    },
    {
      id: "invest2",
      title: "Инвестиционная стратегия",
      text: (
        <>
          "Халяль инвест" предлагает инвестиционные продукты, включающие в свой
          портфель акции компаний, соответствующих нормам шариата. Индекс S&P
          500 исламских инвестиций полной доходности - это индекс, созданный
          мировой биржей, который включает акции компаний, успешно прошедших
          проверку исламским аудитором (КСА) на соответствие принципам шариата.
          Приобретение паев такого инвестиционного продукта позволяет инвестору
          получить доступ к халяльным инвестициям и потенциально получать
          прибыль от их роста
        </>
      ),
      path: "",
    },
  ],
};

const price_data = [
  {
    id: "1",
    service: "Природные ресурсы",
    price: "50",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "2",
    service: "Энергоносители",
    price: "600",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "3",
    service: "Товары длительного спроса",
    price: "200",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "4",
    service: "Коммуникации",
    price: "600",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "5",
    service: "Электроэнергетика",
    price: "2000",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "6",
    service: "Электроэнергетика",
    price: "3500",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "7",
    service: "Электроэнергетика",
    price: "1500",
    unit: <>м.п</>,
  },
  {
    id: "8",
    service: "Электроэнергетика",
    price: "1800",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "9",
    service: "Электроэнергетика",
    price: "10000",
    unit: <>м.п</>,
  },
];

const contentProps = [
  {
    id: "n1",
    link: "Ключевая информация",
    path: "KeyInfo",
    className: "textBlock",
    component: <TextBlock {...KeyInfo_data} />,
  },
  {
    id: "n2",
    link: "Сценарии Инвестирования",
    path: "Scenario",
    className: "textBlock",
    component: <TextBlock {...Scenario_data} />,
  },
  {
    id: "n3",
    link: "Халяльные Инвестиции",
    path: "HalalInvest",
    className: "textBlock",
    component: <TextBlock {...HalalInvest_data} />,
  },
  {
    id: "n4",
    link: "Как Инвестировать",
    path: "HowInvest",
    className: "textBlock",
    component: <TextBlock {...HowInvest_data} />,
  },
  {
    id: "n5",
    link: "Начать инвестировать легко",
    path: "StartInvest",
    className: "startInvest",
    component: <StartInvest />,
  },
  {
    id: "n6",
    link: "Список основных услуг",
    path: "Services",
    className: "services",
    component: <Services />,
  },
  {
    id: "n7",
    link: "Наши показатели и отчеты за периоды",
    path: "Reports",
    className: "reports",
    component: <Reports />,
  },
  {
    id: "n8",
    link: "Доверительное Управление - это",
    path: "Control",
    className: "control",
    component: <Control />,
  },
  {
    id: "n9",
    link: "Условия инвестирования",
    path: "InvestCondition",
    className: "investCondition",
    component: <InvestCondition />,
  },
  // {
  //   id: "n10",
  //   link: "Список Халяльных акций",
  //   path: "Price",
  //   className: "price",
  //   component: <Price data={price_data} />,
  // },
  {
    id: "n11",
    link: "Оставьте заявку",
    path: "CalcPrice",
    className: "calcPrice",
    component: <CalcPrice />,
  },
  {
    id: "n11",
    link: "Блог",
    path: "Articles",
    className: "articles",
    component: <Articles />,
  },
  {
    id: "n11",
    className: "tags",
    component: <Tags key="Tags" />,
  },
  {
    id: "n12",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
];

const Main = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <>
      <HeaderUI />
      <div className="content">
        <MainBlockCustom />
        <div className="contentWrapper">
          <NavSlider props={contentProps} />
          <div className="contentCollum">
            {contentProps.map((content) => {
              if (content.className === "tags") {
                return content.component;
              } else {
                return (
                  <ObserverWrap
                    key={content.path}
                    className={content.className}
                    id={content.path}
                  >
                    {content.component}
                  </ObserverWrap>
                );
              }
            })}
          </div>
        </div>
      </div>
      <PopUp />
      <Footer />
    </>
  );
};

export default Main;
