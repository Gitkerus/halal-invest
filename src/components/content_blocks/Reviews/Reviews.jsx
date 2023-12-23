import React from "react";

import { Button } from "carbon-components-react";
import { useGlobalContext } from "../../../context/contex";

import "./Reviews.scss";

const reviews_data = [
  {
    id: "review1",
    title: "Жаслан Аймакаев",
    text: (
      <>
        Ас саляму 'алейкум уа рахматуЛЛАХи уа баракатух.
        <br />
        <br />
        Очень нравится сотрудничество с вашей компанией в общем, а также в
        частности порядок работы, целеустремленность и хорошее обслуживание.
        <br />
        <br />
        Заслуживаете доверия ин шаа АЛЛАХ.
      </>
    ),
  },
  {
    id: "review2",
    title: "Закиров Адель",
    text: (
      <>
        Хочу сказать большое спасибо компании «ХаляльИнвест» , приехал Альберт,
        все подробно объяснил и рассказал как работает. Подписали договор на
        месяц, инвестировал 300 тыс., ровно через месяц без задержек отдали
        наличкой 342 тыс.
        <br />
        Приятно, что есть гарантия и я уверен в том, что не потеряю все деньги,
        а максимум 10% от инвестированной суммы. Вообщем буду обращаться еще и
        инвестировать более крупную сумму
      </>
    ),
  },
  {
    id: "review3",
    title: "Аймакаев Жанат",
    text: (
      <>
        Хочу поблагодарить компанию Халал Инвест, за предоставленную возможность
        улучшить свое материальное состояние по системе Мудараба.
        <br />
        Пусть Аллах даст барака в этом деле. Я рад, что нашел способ
        дополнительного заработка дозволенным путем. Я являюсь партнёром 2
        месяца, и могу сказать, что брат заслуживает доверия. Также очень
        нравится, что при необходимости можно не забирать месячный доход
        увеличивая инвестиции по методу сложного процента. Если хотите быстро
        увеличить инвестицию, это самый лучший способ.
      </>
    ),
  },
  // {
  //   id: "review6",
  //   title: "Иван Иванов",
  //   text: "Я хотел бы выразить свою благодарность и оставить положительный отзыв",
  // },
  // {
  //   id: "review7",
  //   title: "Иван Иванов",
  //   text: "Я хотел бы выразить свою благодарность и оставить положительный отзыв",
  // },
  // {
  //   id: "review8",
  //   title: "Иван Иванов",
  //   text: "Я хотел бы выразить свою благодарность и оставить положительный отзыв",
  // },
  // {
  //   id: "review9",
  //   title: "Иван Иванов",
  //   text: "Я хотел бы выразить свою благодарность и оставить положительный отзыв",
  // },
];

const Reviews = () => {
  const { openModalReviewForm, setOpenModalReviewForm } = useGlobalContext();

  const openPopUpReview = () => {
    setOpenModalReviewForm(!openModalReviewForm);
  };

  return (
    <>
      <div className="reviews__title contentBlock__title">Отзывы клиентов</div>
      <div className="reviewsContentWrapper">
        {reviews_data.map((item) => {
          return (
            <div className="reviews__block" key={item.id}>
              <div className="reviews__block__title">{item.title}</div>
              <div className="reviews__block__text">{item.text}</div>
            </div>
          );
        })}
        <div className="reviewsBottomWrapper">
          <div className="reviews__text">
            Еще больше отзывов и благодарственных писем
          </div>
          <Button
            className="reviews__button"
            kind="tertiary"
            onClick={openPopUpReview}
          >
            Оставить отзыв
          </Button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
