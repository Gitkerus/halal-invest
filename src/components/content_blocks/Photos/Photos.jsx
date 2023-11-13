import React from "react";

import "./Photos.scss";

const Photos = ({ data, title }) => {
  return (
    <div>
      <div className="photos__title contentBlock__title">
        {title && "Фотографии"}
      </div>
      <div className="photosContentWrapper">
        {data.map((photo) => {
          return (
            <img
              className={
                photo.wide ? "photos__img photos__img-wide" : "photos__img"
              }
              src={photo.img}
              id={photo.id}
              key={photo.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Photos;
