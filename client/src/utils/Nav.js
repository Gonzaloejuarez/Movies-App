import React from "react"

import {UilClapperBoard, UilEye, UilClipboardNotes} from '@iconscout/react-unicons'
    
 export const Sidebar = [
     
    {
        Title : "Inicio",
        path : "/",
        icon : <UilClapperBoard />,
        cName : 'nav_item'     
     },
     {
        Title : "Por Ver",
        path : "/porVer",
        icon : <UilEye />,
        cName : 'nav_item'
     },
     {
        Title : "Mi lista",
        path : '/lista',
        icon : <UilClipboardNotes />,
        cName : 'nav_item'
     }
 ]
export default Sidebar