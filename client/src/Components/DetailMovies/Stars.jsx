import { useState } from "react"
import {FaStar} from "react-icons/fa"

const StarsRating = ({ setRatedMovie, userRating }) => {
    const [rating, setRating] = useState(userRating);
    const [hoverRating, setHoverRating] = useState(null);
    const handleSetRating = (starValue) => {
        if (starValue == rating){
            setRating(null);
            setRatedMovie(0);
        } else {
            setRating(starValue);
            setRatedMovie(starValue);
        }
    } 
    return (
        <div >
            {[...Array(10)].map((_,i)=> {
            const starValue = i + 1;
            return (
                <label 
                    onMouseEnter={()=>setHoverRating(starValue)}
                    onMouseLeave={()=>setHoverRating(null)}>
                    <FaStar 
                        color={starValue <= (hoverRating || rating) && "#3399c5"}
                        
                        />
                    
                    <input value={starValue} type="radio" 
                        onClick={() => handleSetRating(starValue)}
                    />
                </label>
            )})}
        </div>
    )
}

export default StarsRating
