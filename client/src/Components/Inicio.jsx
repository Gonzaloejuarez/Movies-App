import React, {useState} from 'react';
import style from './Inicio.module.css';
import FotosInicio from '../utils/Carrusel';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


export const InicioComponente = () => {
    const slides = FotosInicio
    const [fotoInicio, setFotoInicio] = useState(0);


    const length = slides.length;
    

    const nextSlide = () => {
        setFotoInicio(fotoInicio === length - 1 ? 0 : fotoInicio + 1);
      };
    
      const prevSlide = () => {
        setFotoInicio(fotoInicio === 0 ? length - 1 : fotoInicio - 1);
        
        if (!Array.isArray(slides) || slides.length <= 0) {
            return null;
        }
    };

    return(
        <div className={style.InicioDiv}>
            <section  className={style.InicioSection}>
            {FotosInicio.map((slide,index) => {
                            return (
                                <div
                                  className={index === fotoInicio ?  style.slide_active : style.slide}
                                  key={index}
                                >
                                  {index === fotoInicio && (
                                    <img src={slide.img} alt='ImagenSlide' className={style.imagen_proyectos} />
                                  )}
                                </div>
                              );
                            })}
                            <FaArrowAltCircleLeft className={style.left_arrow}  onClick={prevSlide} />
                            <FaArrowAltCircleRight className={style.right_arrow}   onClick={nextSlide} />
            </section>
        </div>
    )
    
}

export default InicioComponente