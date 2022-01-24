import React, {useRef} from "react";
import styles from './Search.module.css'
import { FaSearch } from "react-icons/fa"
export const Search = ({handleSearch}) => {

  const movie = useRef("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleSearch(movie.current.value);
    }


  return(
    <div className={styles.search}>
      <form className={styles.searchForm} action="" onSubmit={handleSubmit}>
      <button className={styles.searchButton}type="submit"><FaSearch className={styles.searchButtonIcon}/></button>
      <input className={styles.searchBar} placeholder="Buscar peliculas"  ref={movie}/>
      </form>
    </div>
  )
}

export default Search