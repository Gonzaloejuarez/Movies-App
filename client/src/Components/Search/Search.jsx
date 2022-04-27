import React, {useRef, useState} from "react";
import styles from './Search.module.css'
import { FaSearch } from "react-icons/fa"


export const Search = ({handleSearch}) => {

  const [user, setUser] = useState("")
  const movie = useRef("")


    const handleChange = (el) => {
      setUser(el.target.value)
      
    }

    const handleSubmit = async (el) => {
        el.preventDefault()
        if(user.length){
          await user(handleSearch(movie.current.value));
        }
        setUser("")
    }


  return(
    <div className={styles.search}>
      <form className={styles.searchForm} action="" onSubmit={(el) => handleSubmit(el)}>
      <button className={styles.searchButton}type="submit"><FaSearch className={styles.searchButtonIcon}/></button>
      <input value={user} className={styles.searchBar} type='text' placeholder="Buscar peliculas"  ref={movie} onChange={(el) => handleChange(el)}/>
      </form>
    </div>
  )
}

export default Search