import React from 'react';
import Article from './article';

const ArticleList = (props) =>{
  return(
    <div>
      {Object.values(props.articles).map((article) =>
        <Article
          key={article.id}
          article = {article}
        />
      )}
    </div>
  );
};

export default ArticleList;
