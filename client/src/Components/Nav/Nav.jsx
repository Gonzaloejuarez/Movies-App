import React, {useState}from "react";
import Search from "../Search/Search";
import style from './Nav.module.css';
import './Navigation.css';
import { UilAlignJustify, UilTimesSquare } from '@iconscout/react-unicons'
import { Link } from "react-router-dom";

export const Nav = () => {
    const [user, setUser] = useState(false);

    const handleFunction = () => setUser(!user)
    return(
        <div className={style.divNav}>
            <div className={style.divNav2}>
            <div className={style.nav}>
                <div className="probando">
                <Link to="#" className={style.navCostado} >
                   <UilAlignJustify onClick={handleFunction}/>
                </Link>
                <nav className={user ? "nav-menu active" : "nav-menu"}>
                    <ul className='nav-menu-items' onClick={handleFunction}>
                        <li className="navbar-togle">
                        <Link to="#" className={style.navCostado}>
                            <UilTimesSquare />
                        </Link> 
                        </li>
                    </ul>
                </nav>
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