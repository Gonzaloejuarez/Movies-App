import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../Redux/Actions/Actions";
import style from './Dark.module.css'
export const DarkMode = () => {
    const dispatch = useDispatch()
    const darkmode = useSelector((state) => state.darkmode);
    return(
    <div>
        <button onClick={() => dispatch(toggleDarkMode())}>
            {darkmode ?  style.light_Mode : style.Dark_Mode}
        </button>
    </div>
)
}

export default DarkMode