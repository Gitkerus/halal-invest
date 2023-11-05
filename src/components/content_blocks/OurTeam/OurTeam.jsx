import React from "react";

import "./OurTeam.scss";

import ContentBlockGrey from "../../wrappers/ContentBlockGrey/ContentBlockGrey";

import img1 from "../../../assets/OurTeam/img1.png";
import img2 from "../../../assets/OurTeam/img2.png";
import img3 from "../../../assets/OurTeam/img3.png";

const ourTeam_data = [
  {
    id: 1,
    img: img1,
    img_alt: "photo_img",
    title: "Имя Фамилия",
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        inventore reprehenderit beatae, perspiciatis eligendi provident, maiores
        distinctio minima dicta quisquam saepe quaerat reiciendis in officiis
        dolorem assumenda ex at nobis.
      </>
    ),
    noLink: true,
  },
  {
    id: 2,
    img: img2,
    img_alt: "photo_img",
    title: "Имя Фамилия",
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        inventore reprehenderit beatae, perspiciatis eligendi provident, maiores
        distinctio minima dicta quisquam saepe quaerat reiciendis in officiis
        dolorem assumenda ex at nobis.
      </>
    ),
    middle: true,
    noLink: true,
  },
  {
    id: 3,
    img: img3,
    img_alt: "photo_img",
    title: "Имя Фамилия",
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        inventore reprehenderit beatae, perspiciatis eligendi provident, maiores
        distinctio minima dicta quisquam saepe quaerat reiciendis in officiis
        dolorem assumenda ex at nobis.
      </>
    ),
    noLink: true,
  },
];

const OurTeam = () => {
  return (
    <>
      <>
        <div className="ourTeam__title contentBlock__title">
          Компания в лицах
        </div>
        <div className="ourTeamContent">
          {ourTeam_data.map((item) => {
            return <ContentBlockGrey {...item} key={item.id} />;
          })}
        </div>
      </>
    </>
  );
};

export default OurTeam;
