import React from "react";

import "./WhatIsHalalInvest.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";
import StartInvest from "../../components/content_blocks/StartInvest/StartInvest";
import ReviewsShort from "../../components/content_blocks/ReviewsShort/ReviewsShort";
import Services from "../../components/content_blocks/Services/Services";
import TextBlock from "../../components/content_blocks/TextBlock/TextBlock";
import Price from "../../components/content_blocks/Price/Price";

import workDescriptionMainBlock from "../../assets/Placeholder.png";

import ContentBlockWraper from "../../components/wrappers/ContentBlockWrapper/ContentBlockWrap";
import ContentWrapper from "../../components/wrappers/ConentWrapper/ContentWrapper";

const mainBlock__data = {
  title: "Что такое Халяльные инвестиции",
  subTitle: `Халяль Инвест не берет комиссию за доверительное управление, нет скрытых займов и комиссий, все наши сделки 100% соответствуют индексу Халяльные инвестиции`,
  text: (
    <>
      <b>Халяль - разрешено законно</b>
      <br />
      <b>Инвестиции по законам Шариата</b>
      <br />
      Кто знает, быть может, вложения в социально значимые и религиозно
      легитимные активы способны защитить мир от спекулятивных капиталов,
      надувания “мыльных пузырей” и финансового кризиса. Не зря одна из
      нравственных норм ислама называется “аль-иктисад” (разумное управление
      своими средствами). Так, например, согласно аналитическим выкладкам МВФ,
      во время финансового кризиса 2008 года исламские банки показали более
      устойчивые результаты, чем традиционные.
    </>
  ),
  img: workDescriptionMainBlock,
};

const WhatIsHalalInvest_data = {
  title: "Как Инвестировать",
  blocksPerLine: 1,
  linked: false,
  data: [
    {
      id: "whatIsHalalInvest1",
      text: (
        <>
          <p>
            Халяльное инвестирование относится к инвестированию в соответствии с
            законами Шариата (Исламскими законами).
          </p>
          <p>
            Шариат - это закон, который является неотъемлемой частью Ислама.
          </p>
          <p>
            В Исламе запрещены проценты - это явно определяющий принцип
            инвестирования - получение процентов.
          </p>
          <p>
            Поскольку получение процентов запрещено по законам Шариата,
            возникает вопрос - Харам ли инвестировать в Исламе?
          </p>
          <p>
            Существуют важные вопросы: какие есть инвестиции, где процент (риба)
            обычно не задействованы, где и куда можно инвестировать Халяль?
          </p>
          <p>
            Поэтому термин “Халяль инвестиции” означает инвестиции в акции
            компании или фонда, деятельность которых соответствует нормам
            Шариата.
          </p>
        </>
      ),
      path: "",
    },
  ],
};

const HalalInvestRules_data = {
  title: "Основные правила исламского инвестирования",
  blocksPerLine: 1,
  linked: false,
  data: [
    {
      id: "halalInvestRules1",
      text: (
        <>
          Исламские инвестиции, или как их ещё называют халяльные, т.е.
          разрешённые строятся на принципах, описанных в священном писании
          Коране и священном предании сунне. Кроме того, исламские инвестиции
          строятся на принципах иджмы, то есть Согласия авторитетных лиц.
          <br />
          <br />
          Правила инвестирования согласно нормам Шариата:
          <ol>
            <li>
              <b>Запрещено ростовщичество.</b> Термин “риба” обозначает
              приращение превышение, т.е. для мусульман проценты по кредитам,
              депозитам, а также покупка облигаций и привилегированных акций
              находятся под запретом.
            </li>
            <li>
              <b>Запрещены обман и мошенничество.</b> Нельзя торговать
              некачественным товаром, обманывать покупателя.
            </li>
            <li>
              <b>
                Запрещено участвовать в рискованных сделках, где имеет место
                высокий уровень неопределённости.
              </b>{" "}
              Термин “гора” обозначает неопределённость, опасность. Т.е
              мусульманам запрещено инвестирование с использованием сложных
              финансовых инструментов. Под запрет попадают спекулятивные
              инструменты (опционы, шорты, фьючерсы и форварды). Ислам призван
              сохранить имущество людей без риска.
            </li>
            <li>
              <b>
                Запрещена торговля несуществующим товаром, который в буквальном
                смысле нельзя потрогать руками.
              </b>{" "}
              По этой причине, например, торговля криптовалютой находится для
              мусульман под запретом, так как противоречит нормам шариата.
            </li>
            <li>
              <b>
                Мусульманам нельзя инвестировать в определённые виды бизнеса, на
                которые наложен запрет.
              </b>{" "}
              К запрещённым видам бизнеса относятся: азартные игры, лотереи,
              игорный бизнес, развлекательная индустрия “для взрослых”,
              производство и торговля алкоголем и табаком, производство и
              переработка не халяльного мяса, в т.ч. мяса свинины, производство
              и торговля оружием, кредитные организации, страховые компании и
              другие запрещённые виды деятельности.
            </li>
          </ol>
          Ключевые правила халяльных инвестиций строятся на запретах.
        </>
      ),
      path: "",
    },
  ],
};

const InvestAllow_data = {
  title: "Во что разрешено инвестировать?",
  blocksPerLine: 1,
  linked: false,
  data: [
    {
      id: "investAllow1",
      text: (
        <>
          <p>
            Разработка методологии каждого нового халяльного инвестиционного
            продукта представляет собой сложную многоуровневую работу.
          </p>
          <p>
            Каждый продукт создаётся на базе шариатских стандартов / а а о и фи
            / по всем финансовым правилам, под строгим наблюдением и с
            одобрением более авторитетных теологов и Улемов
          </p>
          <p>Возможности исламского инвестирования:</p>
          <ol>
            <li>
              <b>Мусульмане имеют право инвестировать в фондовый рынок.</b>{" "}
              Существует список разрешённых халяльных акций. Разрешённые ценные
              бумаги отбираются по определённому принципу
            </li>
            <li>
              <b>Разрешены исламские облигации-сукук.</b> Данный вид ценных
              бумаг дает не гарантированный доход от прибыли, полученный от
              реальных активов, определенных проектов, разрешенных шариатом.
              Сукук не платит купон, а доход получается от денежных потоков,
              генерируемых активами эмитента.
            </li>
          </ol>
        </>
      ),
      path: "",
    },
  ],
};

const companyToInvest_cols = {
  col1: <b>Название компании</b>,
  col2: (
    <>
      <b>Размер инвестирования</b>
    </>
  ),
  col3: (
    <>
      <b>Заголовок</b>
    </>
  ),
};

const companyToInvest_data = [
  {
    id: "1",
    service: "Заголовок",
    price: "1000",
    unit: <></>,
  },
  {
    id: "2",
    service: "Заголовок",
    price: "1000",
    unit: <></>,
  },
  {
    id: "3",
    service: "Заголовок",
    price: "1000",
    unit: <></>,
  },
  {
    id: "4",
    service: "Заголовок",
    price: "1000",
    unit: <></>,
  },
  {
    id: "5",
    service: "Заголовок",
    price: "1000",
    unit: <></>,
  },
  {
    id: "6",
    service: "Заголовок",
    price: "1000",
    unit: <></>,
  },
];

const contentProps = [
  {
    id: "n1",
    link: "Что такое Халяльные инвестиции",
    path: "WhatIsHalalInvest",
    className: "textBlock",
    component: <TextBlock {...WhatIsHalalInvest_data} />,
  },
  {
    id: "n2",
    link: "Основные правила исламского инвестирования",
    path: "HalalInvestRules",
    className: "textBlock",
    component: <TextBlock {...HalalInvestRules_data} />,
  },
  {
    id: "n3",
    link: "Во что разрешено инвестировать?",
    path: "InvestAllow",
    className: "textBlock",
    component: <TextBlock {...InvestAllow_data} />,
  },
  {
    id: "n4",
    link: "Список компаний для инвестирования",
    path: "CompanyToInvest",
    className: "price",
    component: (
      <Price
        data={companyToInvest_data}
        headerCols={companyToInvest_cols}
        title="Список компаний, в которые мы рекомендуем инвестировать"
      />
    ),
  },
  {
    id: "n3",
    link: "Список основных услуг",
    path: "Services",
    className: "services",
    component: <Services />,
  },
  {
    id: "n4",
    link: "Начать инвестировать легко",
    path: "StartInvest",
    className: "startInvest",
    component: <StartInvest />,
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
    link: "Обратная связь",
    path: "CalcPrice",
    className: "calcPrice",
    component: <CalcPrice />,
  },
  {
    id: "n6",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
];

const WhatIsHalalInvest = () => {
  return (
    <>
      <HeaderUI />
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
      <PopUp />
      <Footer />
    </>
  );
};

export default WhatIsHalalInvest;
