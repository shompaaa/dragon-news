import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, details, total_view, rating, author, image_url } = news;

  const formattedDate = new Date(author.published_date).toDateString();

  return (
    <div className="card bg-base-100 shadow-md p-4 space-y-4">
      {/* Author Section */}
      <div className="flex bg-base-200 items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className=" flex gap-1 text-gray-500 hover:text-primary">
          <CiBookmark />

          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold">{title}</h2>

      {/* Image */}
      <figure>
        <img
          src={image_url}
          alt="news"
          className="rounded-lg w-full h-52 object-cover"
        />
      </figure>

      {/* Details */}
      <p className="text-gray-600">
        {details.length > 150 ? (
          <>
            {details.slice(0, 200)}...
            <span className="text-orange-500 cursor-pointer ml-1">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center pt-2 border-t">
        {/* Rating */}
        <div className="flex items-center gap-2 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-700 font-medium">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
