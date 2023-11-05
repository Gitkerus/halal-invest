import React from "react";

import "./FinishedProjectPhotos.scss";

const FinishedProjectPhotos = ({ photos__data }) => {
  return (
    <div>
      <div className="finishedProjectPhotos__title contentBlock__title">
        Фото с объекта
      </div>
      <div className="finishedProjectPhotosContentWrapper">
        {photos__data.map((photo) => {
          return (
            <img
              className={
                photo.wide
                  ? "finishedProjectPhotos__img finishedProjectPhotos__img-wide"
                  : "finishedProjectPhotos__img"
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

export default FinishedProjectPhotos;
