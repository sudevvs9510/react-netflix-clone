// import React, {useEffect,useState, useRef} from 'react'
// import Youtube from 'react-youtube';
// import {imageUrl, API_KEY} from '../../Constants/Constants';
// import "./MovieCards.css";
// import axios from '../../axios'

// function MovieCards(props) {
//   const [movies, setMovies] = useState([])
//   const [urlId,setUrlId] = useState('')
//   const posterContainerRef = useRef(null);
  

//   useEffect(()=>{
//     axios.get(props.url).then(response=>{
//       setMovies(response.data.results)
      
//     }).catch(err=>{
//       alert('Network Error')
//     });
//   },[props.url])

//   const opts = {
//     height:'390',
//     width:'100%',
//     playerVars:{
//       autoplay: 1,
//   },
// };

// const handleMovie = (id) =>{
//   console.log(id);
//   axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
//     if(res.data.results.length !==0){
//       setUrlId(res.data.results[0])
//     } else{
//       console.log("Related videos not found");
//     }
//   })
// }
// const handleClose = () => {
//   setUrlId(null);
// };
// const handleScrollLeft = () => {
//   if (posterContainerRef.current) {
//     posterContainerRef.current.scrollLeft -= 200; // Adjust scroll distance as needed
//   }
// };

// const handleScrollRight = () => {
//   if (posterContainerRef.current) {
//     posterContainerRef.current.scrollLeft += 200; // Adjust scroll distance as needed
//   }
// };
//   return (
//     <div className="row">
//       <h2>{props.title}</h2>
//       <div className="posters-container">
//       <button className="scroll-button left" onClick={handleScrollLeft}>{'<'}</button>
     
//       <div className="posters" ref={posterContainerRef}>
//         {movies.map((obj,index)=>

//         <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} key={index} alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
//       )}
//       </div>
//       <button className="scroll-button right" onClick={handleScrollRight}>{'>'}</button>
//       </div>
//       {urlId && (
//       <div className="youtubeFrame">
//         <button className="closeButton" onClick={handleClose}>X</button>
//          <Youtube otps={opts} videoId={urlId.key} />
//       </div>
//   )}
//     </div>
//   )
// }

// export default MovieCards





import React, { useEffect, useState, useRef } from 'react';
import Youtube from 'react-youtube';
import { imageUrl, API_KEY } from '../../Constants/Constants';
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";
import './MovieCards.css';
import axios from '../../axios';

function MovieCards(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  const [clickedMovie, setClickedMovie] = useState(null);
  const posterContainerRef = useRef(null);

  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovies(response.data.results);
    }).catch(err => {
      alert('Network Error');
    });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (movie, index) => {
    axios.get(`/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {
      if (res.data.results.length !== 0) {
        setUrlId(res.data.results[0]);
        setClickedMovie(index);
      } else {
        console.log('Related videos not found');
      }
    });
  };

  const handleClose = () => {
    setUrlId(null);
    setClickedMovie(null);
  };

  const handleScrollLeft = () => {
    if (posterContainerRef.current) {
      posterContainerRef.current.scrollLeft -= 200;
    }
  };

  const handleScrollRight = () => {
    if (posterContainerRef.current) {
      posterContainerRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters-container">
        <button className="scroll-button left" onClick={handleScrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="posters" ref={posterContainerRef}>
          {movies.map((obj, index) => (
            <div key={index} className="poster-container">
              <img
                onClick={() => handleMovie(obj, index)}
                className={props.isSmall ? 'smallPoster' : 'poster'}
                alt="poster"
                src={`${imageUrl + obj.backdrop_path}`}
              />
              {clickedMovie === index && urlId && (
                <div className="youtubeFrame">
                  <button className="closeButton" onClick={handleClose}>
                    <FaTimes />
                  </button>
                  <div className="youtubeWrapper">
                    <Youtube opts={opts} videoId={urlId.key} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={handleScrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default MovieCards;
