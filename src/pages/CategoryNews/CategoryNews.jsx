import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCart from "../../components/NewsCard/NewsCard";
import NewsCard from "../../components/NewsCard/NewsCard";

const CategoryNews = () => {
  const { id } = useParams(); //string
  const allNews = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCategoryNews(allNews);
      return;
    } else if (id == "1") {
      const filteredNews = allNews.filter(
        (news) => news.others.is_today_pick == true,
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = allNews.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [allNews, id]);

  return (
    <div>
      <h2 className="font-bold mb-5">
        Total <span className="text-secondary">{categoryNews.length}</span> news
        found
      </h2>
      <div className="grid grid-cols-1 gap-5">
            {
                categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
            }
      </div>
    </div>
  );
};

export default CategoryNews;
