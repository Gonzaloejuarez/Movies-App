import React , { useContext } from "react";
import style from './MovieCard.module.css'
import { motion } from 'framer-motion';
import { BiShow } from 'react-icons/bi';
import {MoviesContext} from '../../config/app_config'

const Card = ({ title, year, poster, imdbID , handleSelectedMovie, watchlist}) => {
    const {toggleMovie} = useContext(MoviesContext);
    const handleTooltipClick = (e) => {
        e.stopPropagation();
        toggleMovie({imdbID}, "watchList")
    }
    return (
        <div className={style.div}>
        <motion.div className={style.movieCard} onClick={() => handleSelectedMovie(imdbID)} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img className={style.movieCardIMG}  src={poster !== 'N/A'? poster : "https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-romantic-blue-film-phase-movie-poster-background-image_136505.jpg"} alt="" />
            <span className={style.movieCardTitle}>{title}</span>
            <div className={style.movieCardBottom}>
                {year}
                {watchlist && 
                <div className="tooltip" style={{"fontSize":"3rem"}}>
                    <div className="tooltipItem" onClick={handleTooltipClick} 
                    style={{"color":"rgb(51, 153, 197)"}}>
                        <BiShow/>
                    </div>  
                    <span className="tooltiptext">Quitar de Por ver</span>
                </div>}
            </div>
        </motion.div>
     </div>
    )
}

export default Card
