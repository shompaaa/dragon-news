// import { useEffect, useState } from "react";
// import newsArray from "../../../public/news.json";
// import Marquee from "react-fast-marquee";

// const LatestNews = () => {
//   const [news, setNews] = useState([]);
//   // console.log(news);

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setNews(newsArray);
//   }, []);

//   return (
//     <div className="flex gap-5 bg-base-200 items-center p-3">
//       <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
//    <Marquee>
//        <p className="font-bold">
//         {news.map((item) => (
//           <span key={item.id} className="mr-4">
//             {item.title}
//           </span>
//         ))}
//       </p>
//    </Marquee>
//     </div>
//   );
// };

// export default LatestNews;

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
          {news.map((news) => (
            <span key={news.id} className="mr-5 font-bold">
              {news.others.is_today_pick == true && news.title}
            </span>
          ))}
        </p>
      </marquee>
    </div>
  );
};

export default LatestNews;
