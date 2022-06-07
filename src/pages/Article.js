import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Articles from '../components/Articles';
import articles from './article-content';
import NotFound from './NotFound';
import CommentList from '../components/CommentList';
import AddCommentForm from '../components/AddCommentForm';

const Article = (props) => {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:8000/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    }
    fetchData();
  }, [name]);

  if(!article) {
    return <NotFound/>
  }
  const otherArticles = articles.filter(article => article.name !== name);
  return (
    <>
        <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
          {article.title}
        </h1>
        { 
          article.content.map((paragraph, index) => (
            <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
              {paragraph}
            </p>
          ))
        }
        <CommentList comments={articleInfo.comments} setArticleInfo={setArticleInfo}/>
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
        <h1 className='sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900'>
          Other Articles
        </h1>
        <div className='flex flex-wrap -m-4'>
          <Articles articles={otherArticles}/>
        </div>
    </>
  )
}

export default Article;
