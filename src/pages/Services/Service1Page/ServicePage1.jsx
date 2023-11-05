import React from "react";

import { useState, useEffect } from "react";

import "./ServicePage1.scss";

import HeaderUI from "../../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../../components/wrappers/MainBlock/MainBlock";
import OurProjects from "../../../components/content_blocks/OurProjects/OurProjects";
import WorkSteps from "../../../components/content_blocks/WorkSteps/WorkSteps";
import OurProgress from "../../../components/content_blocks/OurProgress/OurProgress";
import CalcPrice from "../../../components/content_blocks/CalcPrice/CalcPrice";
import Footer from "../../../components/ui/Footer/Footer";
import NavSlider from "../../../components/ui/NavSlider/NavSlider";
import PopUp from "../../../components/modal/PopUp/PopUp";
import Contacts from "../../../components/content_blocks/Contacts/Contacts";
import AboutService from "../../../components/content_blocks/AboutService/AboutService";

import ObserverWrap from "../../../components/wrappers/ObserverWrap/ObserverWrap";

import service_1_mainBlock from "../../../assets/Service_1/service_1_mainBlock.png";

import aboutService_img_1 from "../../../assets/Service_1/aboutService_img_1.png";
import aboutService_img_2 from "../../../assets/Service_1/aboutService_img_2.png";

const aboutService_data = [
  {
    id: "aboutService_1",
    title: "Виды демонтажа зданий и сооружений",
    text: (
      <>
        <p>
          При демонтаже зданий и сооружений применяются различные подходы в
          зависимости от целей проекта и характеристик объекта:
        </p>
        <p>
          Полный снос: Полный снос здания или сооружения предусматривает его
          полное разрушение до основания. Этот вид демонтажа используется для
          объектов, которые требуют полной перестройки территории или при
          существенном износе и устаревании здания.
        </p>
        <p>
          Частичный демонтаж: Частичный демонтаж предполагает разрушение только
          определенных частей здания, при этом сохраняются некоторые элементы,
          которые могут быть использованы в дальнейшем строительстве или
          реконструкции. Этот вид демонтажа позволяет экономить материалы и
          ресурсы.
        </p>
        <p>
          Селективный демонтаж подразумевает разбор здания с учетом разделения и
          сортировки различных материалов для их последующего использования или
          утилизации. Этот вид демонтажа способствует устойчивому использованию
          ресурсов и снижению негативного воздействия на окружающую среду
        </p>
      </>
    ),
    img: aboutService_img_1,
  },
  {
    id: "aboutService_2",
    title: "Что нужно учитывать при демонтаже",
    text: (
      <>
        <p>
          При планировании и проведении демонтажных работ необходимо обратить
          внимание на следующие аспекты:
        </p>
        <p>
          Безопасность: Демонтажные работы связаны с определенными рисками,
          поэтому безопасность должна быть приоритетной задачей. Наша компания
          строго соблюдает все нормы и стандарты безопасности, предоставляя
          профессиональных специалистов и обеспечивая использование
          соответствующего оборудования.
        </p>
        <p>
          Разрешительная документация: Перед началом демонтажа необходимо
          ознакомиться с требованиями и разрешительной документацией, получить
          необходимые разрешения и согласования.
        </p>
        <p>
          Утилизация и переработка материалов: При демонтаже важно учесть
          возможность утилизации и переработки материалов, чтобы минимизировать
          негативное воздействие на окружающую среду и максимально использовать
          ресурсы
        </p>
      </>
    ),
    img: aboutService_img_2,
    textRight: true,
  },
  {
    id: "aboutService_3",
    title: "Как выбрать подрядчика для демонтажных работ",
    text: (
      <>
        <p>
          При выборе подрядчика для демонтажных работ рекомендуется обращать
          внимание на следующие факторы:
        </p>
        <p>
          Опыт и квалификация: Подрядчик должен иметь достаточный опыт и
          квалификацию для выполнения демонтажных работ различного уровня
          сложности.
        </p>
        <p>
          Лицензии и разрешения: Убедитесь, что подрядчик имеет все необходимые
          лицензии и разрешения для проведения демонтажных работ в соответствии
          с законодательством.
        </p>
        <p>
          Репутация и отзывы: Исследуйте репутацию подрядчика, прочитайте отзывы
          клиентов и оцените его профессионализм и надежность.
        </p>
        <p>
          Безопасность: Узнайте о политике безопасности подрядчика и какие меры
          он предпринимает для обеспечения безопасности на рабочих местах.
        </p>
        <p>
          Мы, компания "ДемонтажЭксперт", обладаем богатым опытом и
          квалификацией в области демонтажа зданий и сооружений. Наша команда
          профессионалов обеспечит безопасное и эффективное выполнение всех
          демонтажных работ. Мы гарантируем высокое качество услуг, соответствие
          требованиям и соблюдение сроков.
        </p>
        <p>
          Если вам требуется демонтаж здания или сооружения, мы рады предложить
          наши услуги. Свяжитесь с нами, чтобы узнать больше информации и
          оформить заказ.
        </p>
      </>
    ),
  },
];

const contentProps = [
  {
    id: "n1",
    link: "Почему мы?",
    path: "OurProgress",
    className: "ourProgress",
    component: <OurProgress />,
  },
  {
    id: "n2",
    link: "Об услуге",
    path: "AboutService",
    className: "aboutService",
    component: <AboutService data={aboutService_data} />,
  },
  {
    id: "n3",
    link: "Обратная связь",
    path: "CalcPrice",
    className: "calcPrice",
    component: <CalcPrice />,
  },
  {
    id: "n4",
    link: "Примеры работ",
    path: "OurProjects",
    className: "ourProjects",
    component: <OurProjects />,
  },
  {
    id: "n5",
    link: "Этапы работ",
    path: "WorkSteps",
    className: "workSteps",
    component: <WorkSteps />,
  },
  {
    id: "n6",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
];

const ServicePage1 = () => {
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

  const mainBlockText = () => {
    if (windowWidth <= 1056) {
      return (
        <>
          Демонтаж зданий и сооружений – это важный этап в обновлении
          территорий, реконструкции объектов и создании новых проектов
        </>
      );
    }
    return (
      <>
        Демонтаж зданий и сооружений – это важный этап в обновлении территорий,
        реконструкции объектов и создании новых проектов. При правильной
        организации и выполнении демонтажных работ можно обеспечить
        безопасность, эффективность и максимальное использование материалов.
        Наша компания предлагает полный спектр услуг по демонтажу, обеспечивая
        надежное разрушение для создания новых возможностей
      </>
    );
  };

  return (
    <>
      <HeaderUI />
      <div className="content">
        <MainBlock
          text={mainBlockText()}
          title={"Демонтаж зданий и сооружений"}
          img={service_1_mainBlock}
        />
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

export default ServicePage1;
