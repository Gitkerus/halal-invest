import React from "react";

import "./Letters.scss";

import ContentBlockGrey from "../../wrappers/ContentBlockGrey/ContentBlockGrey";

import letterImg1 from "../../../assets/letterImg1.png";

const letters_data = [
  {
    id: "letter1",
    title: "Название",
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo quod
        at, sunt natus reiciendis! Ducimus accusamus magnam, suscipit, deserunt
        facilis molestias laboriosam, ad distinctio quibusdam delectus ipsam
        excepturi commodi.
      </>
    ),
    img: letterImg1,
    img_alt: "letterImg1",
    noLink: true,
  },
  {
    id: "letter2",
    title: "Название",
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo quod
        at, sunt natus reiciendis! Ducimus accusamus magnam, suscipit, deserunt
        facilis molestias laboriosam, ad distinctio quibusdam delectus ipsam
        excepturi commodi.
      </>
    ),
    img: letterImg1,
    img_alt: "letterImg1",
    noLink: true,
  },
  {
    id: "letter3",
    title: "Название",
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo quod
        at, sunt natus reiciendis! Ducimus accusamus magnam, suscipit, deserunt
        facilis molestias laboriosam, ad distinctio quibusdam delectus ipsam
        excepturi commodi.
      </>
    ),
    img: letterImg1,
    img_alt: "letterImg1",
    noLink: true,
  },
  {
    id: "letter4",
    title: "Название",
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo quod
        at, sunt natus reiciendis! Ducimus accusamus magnam, suscipit, deserunt
        facilis molestias laboriosam, ad distinctio quibusdam delectus ipsam
        excepturi commodi.
      </>
    ),
    img: letterImg1,
    img_alt: "letterImg1",
    noLink: true,
  },
  {
    id: "letter5",
    title: "Название",
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo quod
        at, sunt natus reiciendis! Ducimus accusamus magnam, suscipit, deserunt
        facilis molestias laboriosam, ad distinctio quibusdam delectus ipsam
        excepturi commodi.
      </>
    ),
    img: letterImg1,
    img_alt: "letterImg1",
    noLink: true,
  },
  {
    id: "letter6",
    title: "Название",
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo quod
        at, sunt natus reiciendis! Ducimus accusamus magnam, suscipit, deserunt
        facilis molestias laboriosam, ad distinctio quibusdam delectus ipsam
        excepturi commodi.
      </>
    ),
    img: letterImg1,
    img_alt: "letterImg1",
    noLink: true,
  },
];

const Letters = () => {
  return (
    <>
      <div className="letters__title contentBlock__title">
        Благодарственные письма
      </div>
      <div className="lettersContentWrapper">
        {letters_data.map((item) => {
          return <ContentBlockGrey key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default Letters;
