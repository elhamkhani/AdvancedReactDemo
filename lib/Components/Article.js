import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './StoreProvider';

const styles =  {
  article:{

  },
  title:{
    fontWeight:'bold',
  },
  date:{
    color:'#888',
  },
  author:{

  },
  body:{
    paddingLeft:20,
  }
};

const dateDisplay = (dateString)=>
  new Date(dateString).toDateString();

const Article = (props) =>{
  const {article, author} = props;
  return(
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{dateDisplay(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes= {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
  })
};

function extraProps(store, originalProps){
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  };
}
export default storeProvider(extraProps)(Article);
