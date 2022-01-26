import {useEffect, useState} from 'react';
import axios from 'axios';

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {    
    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
        'x-rapidapi-key': 'd25c95f5f2msh2f5f454ce3aaac5p15efb4jsn3ae259e71d27'
        }
      };

      axios.request(options).then(function (response) {      	
        setArticles(response.data);

      }).catch(function (error) {
	      console.error(error);
      });     
    }, [])

    console.log(articles);
    const first7articles = articles?.slice(0,7);

    return (
      <div className="news-feed">
        <h2>NewsFeed</h2>
        {first7articles?.map((article, _index) => (<p key={_index}>{article.title}</p>) )}
      </div>
    );
  }
  
  export default NewsFeed;