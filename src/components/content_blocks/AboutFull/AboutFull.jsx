import React from "react";

import about_img from "../../../assets/AboutImg.png";

import "./AboutFull.scss";

const AboutFull = () => {
  return (
    <>
      <div className="aboutFullLeftWrapper">
        <div className="aboutFull__title contentBlock__title">О компании</div>
        <div className="aboutFullContentWrapper">
          <div className="aboutFullInfoWrapper">
            Компания Халяль Инвест – это передовая и динамично развивающаяся
            организация, специализирующаяся на сфере инвестиций и финансовых
            услуг. <br />
            Наша компания основана на принципах шариата и этичности, а также
            стремится предоставить клиентам высококачественные и инновационные
            решения. Мы гордимся тем, что наша компания уже давно
            зарекомендовала себя как надежный и долгосрочный партнер для
            инвесторов и предпринимателей со всего мира. Наша команда состоит из
            высококвалифицированных экспертов, обладающих богатым опытом в
            финансовой сфере, что позволяет нам предлагать нашим клиентам
            персональные и ориентированные на их потребности решения.
          </div>
        </div>
      </div>
      <div className="aboutFullRightWrapper">
        <img className="aboutFull__img" src={about_img} alt="aboutImg" />
      </div>
    </>
  );
};

export default AboutFull;
