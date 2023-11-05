import React from "react";

import "./Documents.scss";
import LinkMore from "../../reusable/LinkMore/LinkMore";

const Documents = ({ document_data, title }) => {
  return (
    <>
      <div className="documents__title contentBlock__title">{title}</div>
      <div className="documentsContentWrapper">
        <div className="documentsImgWrapper">
          {document_data.map((item) => {
            return (
              <div className="documents__block" key={item.id}>
                <img
                  className="documents__img"
                  src={item.img}
                  alt="document__img"
                />
              </div>
            );
          })}
        </div>
        <LinkMore></LinkMore>
      </div>
    </>
  );
};

export default Documents;
