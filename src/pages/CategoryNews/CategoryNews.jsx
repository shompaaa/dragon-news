import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams()
    const allNews = useLoaderData()

    const [categoryNews, setCategoryNews] = useState([])

    useEffect(()=>{
        if(id == '0'){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCategoryNews(allNews)
            return;
        }
        else if(id =='1'){
            
            const filteredNews = allNews.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filteredNews)
        }
        else{
            const filteredNews = allNews.filter(news => news.category_id == id)
                setCategoryNews(filteredNews)
            
        }
    },[allNews, id])

    return (
        <div>

            <h1>Total {categoryNews.length} news found</h1>
        </div>
    );
};

export default CategoryNews;