import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* Icons from react-icons library */
import { BsBoxArrowUpRight, BsCalendarDate, BsChatHeartFill } from "react-icons/bs";
import { AiFillTag } from "react-icons/ai";


export default function Posts () {
  const [articles, setArticles] = useState ([]);

  useEffect( () => {
    /* Change the username to retrieve your posts */
    fetch('https://dev.to/api/articles?username=sarahcssiqueira')
    .then( (res) => res.json())
    .then((res) =>  {
      setArticles(res);
    });
  }, []);
  
  /* Checking the schema 
  console.log(articles); */

  return(
  <section className='articles'>
      {articles.map((article) => {
        return(
          <article key={article.id} className='article'>
              <img src={article.social_image} 
                   alt={article.title} 
                   className='img'>
              </img>
              <Link to={article.url} 
                    className='article__title'>
                    <h2>{article.title}</h2>
              </Link>
              <p className='article__description'>{article.description} 
                <Link to={article.url} className=''> 
                  <BsBoxArrowUpRight/> 
                </Link>
              </p>
              <ul>
                  <li className=''>
                    <BsCalendarDate/> 
                    {' '}
                    {article.readable_publish_date}
                  </li>
                  <li className=''>
                    <AiFillTag/>
                    {' '}{article.tags}{' '}
                  </li>
                  <li className=''> 
                    {article.public_reactions_count}
                    {' '}
                    <BsChatHeartFill/>
                  </li>
              </ul>
          </article>
          )})}
  </section>
)}