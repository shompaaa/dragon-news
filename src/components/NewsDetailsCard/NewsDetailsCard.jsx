import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details } = news;
  return (
    <div className="space-y-5">
      <img
        className="w-full h-[350px] object-cover rounded-xl"
        src={image_url}
        alt=""
      />
      <h2 className="text-2xl">{title}</h2>
      <p>{details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        <FaArrowLeft />
        All news in the category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
