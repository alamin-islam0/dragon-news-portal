import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details, author, rating, total_view } = news;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="mb-4">
        <img
          src={image_url}
          alt={title}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          {author && (
            <>
              <img
                src={author.img}
                alt={author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">{author.name}</p>
                <p className="text-sm text-gray-600">{author.published_date}</p>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {rating && (
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1">{rating.number}</span>
            </div>
          )}
          {total_view && (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-1">{total_view}</span>
            </div>
          )}
        </div>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="text-base leading-relaxed">{details}</p>
        <Link to={`/category/${news.category_id}`} className="mt-8 btn btn-secondary">Back to Category</Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
