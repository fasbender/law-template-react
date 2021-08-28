import { useState, useEffect } from 'react'
import axios from 'axios';
import apiKey from '../Data/apiKey';
import Slider from "react-slick";
import Loader from 'react-loader-spinner'
import EmptyImage from './empty.jpg'
import './main.css'

const AutoPlay = () => {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };

    const [news, setNews] = useState([])
    const [loading, setIsLoading] = useState(false)

    const newsApi = async() => {
    try {
      setIsLoading(true)
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=Technology`)
      setNews(response.data.articles)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    newsApi()
  }, [])

    return (
      <div className="main-slide">
        <h2>Latest News</h2>
        {loading ?
        <div className="newsLoader">
            <Loader/>
        </div> 
             : 
         <Slider {...settings} className="slider">
          {news.map(newsItem => {
               return(
                   <a arget="_blank" rel="noopener noreferrer" href={newsItem.url} className="slideTag">
                    <div class="slide">
                        <img src={newsItem.urlToImage ? newsItem.urlToImage : EmptyImage} alt="Avatar"/>
                        <div class="slide-container">
                            <h5><b>{newsItem.title}</b></h5>  
                        </div>
                    </div>
                   </a>
               )
           })} 
        </Slider>
         }
      </div>
    );
}

export default AutoPlay