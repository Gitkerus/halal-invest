import React from "react";

import "./Reports.scss";

import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import DynamicCost from "../../components/content_blocks/DynamicCost/DynamicCost";
import Letters from "../../components/content_blocks/Letters/Letters";
import ReviewsShort from "../../components/content_blocks/ReviewsShort/ReviewsShort";
import TextBlock from "../../components/content_blocks/TextBlock/TextBlock";

import reportsMainBlock from "../../assets/Placeholder.png";

import ContentBlockWraper from "../../components/wrappers/ContentBlockWrapper/ContentBlockWrap";
import ContentWrapper from "../../components/wrappers/ConentWrapper/ContentWrapper";

const mainBlock__data = {
  title: "Отчеты",
  subTitle: `Добро пожаловать на страницу "Отчеты" инвестиционного сайта Халяль Инвест!`,
  text: (
    <>
      Здесь вы найдете подробную информацию о нашей компании, ее деятельности и
      финансовых показателях. <br />
      Мы стремимся обеспечить прозрачность и доверие в отношениях с нашими
      инвесторами, поэтому предоставляем всю необходимую информацию для
      ознакомления. <br />
      Необходимость предоставления отчетности является одним из основных
      принципов нашей работы. <br />
      Мы придерживаемся принципа "Халяль" - инвестиций, соответствующих законам
      и принципам исламского финансирования. Это означает, что все наши
      финансовые операции полностью совместимы с принципами ислама. <br />{" "}
      <br />
    </>
  ),
  img: reportsMainBlock,
};

const reportInfo_data = {
  title: "Информация",
  blocksPerLine: 1,
  linked: false,
  id: "whatIsHalalInvest",
  data: [
    {
      id: "whatIsHalalInvest1",
      text: (
        <>
          На странице "Отчеты" вы найдете следующую информацию:
          <ol>
            <li>
              <b>Финансовые отчеты</b> <br />
              Предоставление полной и подробной информации о финансовых
              показателях нашей компании, включая балансовую отчетность, отчет о
              прибылях и убытках, а также отчет о движении денежных средств.
            </li>
            <li>
              <b>Инвестиционные стратегии</b> <br />
              Разъяснение наших инвестиционных стратегий, которые включают
              диверсификацию портфеля, консервативное управление рисками и
              строгое соответствие принципам исламского финансирования.
            </li>
            <li>
              <b>Прозрачность операций</b> <br />
              Предоставление информации о наших операциях, включая сделки с
              акциями, облигациями и другими финансовыми инструментами. Мы
              придерживаемся наивысших стандартов прозрачности и отчетности.
            </li>
            <li>
              <b>Политика конфиденциальности</b> <br />
              Обеспечение безопасности и конфиденциальности наших инвесторов -
              наш приоритет. Мы следуем строгой политике конфиденциальности и не
              передаем личную информацию третьим лицам.
            </li>
          </ol>
          <br />
          Всегда готовы ответить на ваши вопросы и обсудить возможности
          инвестирования, соответствующие вашим целям и потребностям. Наша
          команда экспертов всегда готова помочь вам принять правильное
          инвестиционное решение. Присоединяйтесь к нам и начните свой путь к
          успешным и халяльным инвестициям уже сегодня! Если у вас возникли
          какие-либо вопросы, пожалуйста, обратитесь к нашей службе поддержки по
          контактным данным, указанным на нашем сайте. Мы будем рады помочь вам!
        </>
      ),
      path: "",
    },
  ],
};

const contentProps = [
  {
    id: "n1",
    link: "Информация",
    path: "ReportInfo",
    className: "reportInfo",
    component: <TextBlock {...reportInfo_data} />,
  },
  {
    id: "n2",
    link: "Динамика стоимости",
    path: "DynamicCost",
    className: "dynamicCost",
    component: <DynamicCost />,
  },
  {
    id: "n3",
    link: "Благодарственные письма",
    path: "Letters",
    className: "letters",
    component: <Letters />,
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

const Reports = () => {
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

export default Reports;
