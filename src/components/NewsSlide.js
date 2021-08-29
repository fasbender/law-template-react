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
            dots: false
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
      const response = await axios.get(`https://gnews.io/api/v4/search?q=law&token=${apiKey}`)
      setNews(response.data.articles)
    } catch (error) {
      return (
        <div>
          <h1>Unable to load News</h1>
        </div>
      )

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
                   <a target="_blank" rel="noopener noreferrer" href={newsItem.url} className="slideTag">
                    <div class="slide">
                        <img src={newsItem.image ? newsItem.image : EmptyImage} alt="Avatar"/>
                        <div class="slide-container">
                            <h5 style={{fontWeight: 'bolder'}}><b>{newsItem.title}</b></h5>  
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