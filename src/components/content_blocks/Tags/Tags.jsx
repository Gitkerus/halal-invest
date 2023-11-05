import React from "react";

import "./Tags.scss";

const tags_data = [
  {
    id: "tag_1",
    tag: "финансы",
  },
  {
    id: "tag_2",
    tag: "инвестиции",
  },
  {
    id: "tag_3",
    tag: "акции",
  },
  {
    id: "tag_4",
    tag: "финансы",
  },
  {
    id: "tag_5",
    tag: "инвестиции",
  },
  {
    id: "tag_6",
    tag: "инвестиции",
  },
  {
    id: "tag_7",
    tag: "акции",
  },
];

const Tags = () => {
  return (
    <div className="tags contentBlock">
      {tags_data.map((item) => {
        return (
          <div className="tags__block" key={item.id}>
            {item.tag}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
