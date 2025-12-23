import { useEffect } from "react";
import { useNewsContext } from "../context/NewsContext";

import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import Loader from "../components/Loader";

const News = ({ className }) => {
  const { news, setNews, fetchNews,loading } = useNewsContext();
  console.log(news);

// loading default news on component mount
  useEffect(() => {

    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();

  }, []);

  if(loading) return <Loader />;

  return (
    <>
      <Wrapper>
        
        <div className={`${className} grid grid-cols-4 gap-5 max-[991px]:grid-cols-3 max-[991px]:gap-4 max-[600px]:grid-cols-2  max-[480px]:grid-cols-1`}>
          { news.map((newsDetails, index) => {
            if(!newsDetails.urlToImage) return null;
            return (
            <Card key={index} details={newsDetails} />
            )
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default News;
