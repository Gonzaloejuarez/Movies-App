import React from "react"
import Search from "../Search/Search"
import style from './Nav.module.css'
export const Nav = () => {
    return(
        <div className={style.divNav}>
            <div className={style.divNav2}>
            <div className={style.nav}>
                
                <div className={style.navCostado}>
                    Options
                </div>

                <div className={style.name}>
                <h1>Cine Movies</h1>
                </div>

                <div className={style.options}>
                <Search />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Nav