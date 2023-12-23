import React from "react";

import "./AboutPage.scss";

import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import AboutFull from "../../components/content_blocks/AboutFull/AboutFull";
import OurProjects from "../../components/content_blocks/OurProjects/OurProjects";
import ReviewsShort from "../../components/content_blocks/ReviewsShort/ReviewsShort";
import Licenses from "../../components/content_blocks/Licenses/Licenses";
import Sertification from "../../components/content_blocks/Sertification/Sertification";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Reports from "../../components/content_blocks/Reports/Reports";
import Control from "../../components/content_blocks/Control/Control";
import InvestCondition from "../../components/content_blocks/InvestCondition/InvestCondition";
import TextBlock from "../../components/content_blocks/TextBlock/TextBlock";
import Contacts from "../../components/content_blocks/Contacts/Contacts";

import ContentBlockWraper from "../../components/wrappers/ContentBlockWrapper/ContentBlockWrap";
import ContentWrapper from "../../components/wrappers/ConentWrapper/ContentWrapper";

import main_img from "../../assets/HistoryMain.png";

const mainBlock__data = {
  title: "История компании",
  subTitle: (
    <>
      Команда Халяль Инвест построена на прозрачности и доверии <br />
      Наш фундамент Шариатское положение наших дел
    </>
  ),
  text: (
    <>
      Наша компания, основанная 7 лет назад, начала свой путь в инвестиционной
      сфере с фокусом на халяльных инвестициях в акции компаний. <br />
      Было время, когда этот рынок был малоизучен и малоизвестен. Однако,
      благодаря нашему старанию и преданности, мы полностью погрузились в
      изучение халяльных инвестиций и приобрели обширные знания о них. <br />
      За годы нашего опыта, мы выработали уникальную рабочую концепцию, которая
      позволяет нам принимать обоснованные и осознанные решения при выборе
      активов для инвестирования. Мы тщательно анализируем каждую компанию, в
      которую собираемся инвестировать, чтобы гарантировать их совместимость с
      принципами халяльности. <br />
      Благодаря высокому уровню профессионализма нашей команды и глубокому
      пониманию рынка, мы приобрели доверие со стороны наших клиентов и начали
      брать в доверительное управление их активы. <br />
      Наша задача - обеспечить максимальную прибыльность и соответствие
      халяльным принципам для каждого клиента, доверившего нам свои средства.{" "}
      <br />
      Мы гордимся своими достижениями и постоянно развиваемся, чтобы оставаться
      впереди на рынке халяльных инвестиций. <br />
      Наша миссия - помочь нашим клиентам достичь финансовой стабильности и
      успеха, соблюдая принципы шариата и этичности в каждой сделке, которую мы
      осуществляем.
    </>
  ),
  img: main_img,
};

const FundControl_data = {
  title: "Как мы управляем фондом?",
  blocksPerLine: 3,
  id: "fundControl",
  data: [
    {
      id: "fundControl1",
      title: "Стратегия",
      text: "Покупаем акции компаний с высокими дивидендами и меняем структуру портфеля при изменениях на рынке и реинвестируем дивиденды",
      path: "",
    },
    {
      id: "fundControl2",
      title: "Портфель",
      text: "Портфель содержит акции зарубежных компаний с высокими дивидендными выплатами. Диверсифируем портфель по отраслям, чтобы снизить риски",
      path: "",
    },
    {
      id: "fundControl3",
      title: "Валюта",
      text: "Мы выбрали доллар США в качестве основной валюты фонда из-за его стабильности и широкого признания на международном уровне. Независимо от географического расположения наших клиентов",
      path: "",
    },
  ],
};

const contentProps = [
  {
    id: "n1",
    link: "О компании",
    path: "AboutFull",
    className: "aboutFull",
    component: <AboutFull />,
  },
  {
    id: "n2",
    link: "Примеры работ",
    path: "OurProjects",
    className: "ourProjects",
    component: <OurProjects />,
  },
  {
    id: "n3",
    link: "Наши показатели и отчеты",
    path: "Reports",
    className: "reports",
    component: <Reports />,
  },
  {
    id: "n4",
    link: "Отзывы клиентов",
    path: "ReviewsShort",
    className: "reviewsShort",
    component: <ReviewsShort />,
  },
  {
    id: "n5",
    link: "Лицензии",
    path: "Licenses",
    className: "licenses",
    component: <Licenses />,
  },
  {
    id: "n6",
    link: "Сертификаты",
    path: "Sertification",
    className: "sertification",
    component: <Sertification />,
  },
  {
    id: "n7",
    link: "Доверительное Управление - это",
    path: "Control",
    className: "control",
    component: <Control />,
  },
  {
    id: "n8",
    link: "Условия инвестирования",
    path: "InvestCondition",
    className: "investCondition",
    component: <InvestCondition />,
  },
  {
    id: "n9",
    link: "Как мы управляем фондом?",
    path: "FundControl",
    className: "textBlock",
    component: <TextBlock {...FundControl_data} />,
  },
  {
    id: "n10",
    link: "Оставьте заявку",
    path: "CalcPrice",
    className: "calcPrice",
    component: <CalcPrice />,
  },
  {
    id: "n11",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
];

const About = () => {
  return (
    <>
      <div className="content">
        <MainBlock {...mainBlock__data} />
        <div className="contentWrapper">
          <NavSlider props={contentProps} />
          <ContentWrapper>
            {contentProps.map((content) => {
              if (content.className === "tags") {
                return content.component;
              } else {
                return (
                  <ContentBlockWraper
                    key={content.path}
                    className={content.className}
                    id={content.path}
                  >
                    {content.component}
                  </ContentBlockWraper>
                );
              }
            })}
          </ContentWrapper>
        </div>
      </div>
    </>
  );
};

export default About;
