import { useEffect, useState } from "react";
import newsArray from "../../../public/news.json";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNews(newsArray);
  }, []);

  return (
    <div className="flex gap-5 bg-base-200 items-center p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <marquee>
        <p>
          {news.map((breakingNews) => (
            <span key={breakingNews.id} className="mr-5 font-bold">
              {breakingNews.others.is_today_pick == true && breakingNews.title}
            </span>
          ))}
        </p>
      </marquee>
    </div>
  );
};

export default LatestNews;
