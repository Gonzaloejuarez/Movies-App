import React, {useState}from "react";
import './Navigation.css';
/* import style from './Nav.module.css'; */
import { Link} from 'react-router-dom';
import { UilAlignJustify , UilAngleLeft  } from '@iconscout/react-unicons';
import Sidebar from "../../utils/Nav";


export const Nav = () => {
    const [user, setUser] = useState(false);
    
    const handleFunction = () => setUser(!user);
    
    return(
        <>
            <div className='navBar'>
                <div className='iconLibrerys'>
                <Link to="#" className='navCostado' onClick={handleFunction} >
                   <UilAlignJustify onClick={handleFunction}/>
                </Link>
                </div>
                <nav className={user ? "nav-menu active" : "nav-menu"}> 
                    <Link to="#" className='navCostado' onClick={handleFunction}>
                        <UilAngleLeft className='icon'/>
                    </Link>
                    <div className="nuevo">
                    <ul className="menu_bars">
                        {Sidebar.map( (item, index)=> {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                    <a>{item.icon}
                                    <span>{item.Title}</span>    
                                    </a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div> 
                </nav>
            </div>
        </>
    )
}

export default Nav
{/* <li className={style.liItems}>
    <Link to="/" className={style.linkStyle}>
    <UilClapperBoard className={style.nav__icon}/>
    <p>Inicio</p>
    </Link>
</li>
<li className={style.liItems}>
    <Link to="/porVer" className={style.linkStyle}>
    <UilEye  className={style.nav__icon}/>
    <p>Por Ver</p>
    </Link>
</li>
<li className={style.liItems}>
    <Link to="/lista" className={style.linkStyle}>
    <UilClipboardNotes className={style.nav__icon}/>
    <p>Mi lista</p>
    </Link>
</li> */}