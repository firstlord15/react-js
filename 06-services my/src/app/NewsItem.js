import parser from "html-react-parser";
import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  const item = props.item;

  return (
    <div>
      <div className="card news-item">
        <div className="card-header">
          <p>{item.type}</p>
        </div>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <img
            src={`https://nurkadyrnur.pythonanywhere.com${item.image_detail}`}
          ></img>
          <p className="card-text">{parser(item.short_body || "")}</p>
          <Link to={`/news/${id}`} className="btn btn-primary">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
