import React, {useState} from 'react';
import styled from 'styled-components';
import styles from './Inicio.module.css';

/* Props {
	images: string[];
	autoPlay?: boolean;
	showButtons?: boolean;
} */
  

export const InicioComponente = (props) => {
const images = ["Avengers.jpg", "hotel.jpg" , "Souls.png" , "batman2.jpg", "spiderman3.jpg"]
const [selected, setSelected] = useState(0);
const [selectedImagen, setSelectedImagen] = useState(images[0]);
const [loaded, setLoaded] = useState(false);


const selectNewImage = (index, images, next=true) => {
	setLoaded(false);
	setTimeout(() => {
		const condition = next ? selected < images.length -1 : selected > 0 ;
		const nextInd = next ? (condition ? selected + 1 : 0) : condition ?  selected - 1 : images.length - 1;
		setSelectedImagen(images[nextInd])
		setSelected(nextInd)
	},1000)
}


const previo = () => {
	selectNewImage(selected, images , false)
}

const sig = () => {
	selectNewImage(selected, images)
}

	return(
		<div className={styles.InicioDiv}>
		 <section className={styles.InicioSection}>
         <Carouselimg 
		 onLoad={() => setLoaded(true)} 
		 className={loaded ? "loaded" : ""} 
		 src={require(`../utils/images/${selectedImagen}`) } 
		 alt='imagen'/>
		 <CarouselButtonContainer>
		 <CarouselButton onClick={previo}>{"<"}</CarouselButton>
		 <CarouselButton onClick={sig}>{">"}</CarouselButton>
		 </CarouselButtonContainer>
			</section>
		</div>
	)

}


const Carouselimg = styled.img`
display: flex;
justify-content: center;
align-items: center;
width: 100rem;
height: 40rem;
transition: 2s;
opacity : 0;
transition : 1s;
vertical-align: top;
&.loaded {
opacity : 1;
}
`;

const CarouselButtonContainer = styled.div`
display : flex
align-items : center;
flex-direction : row;
margin-top:15px;
cursor : pointer;
`;

const CarouselButton = styled.button`
color : white;
cursor : pointer;
background-color : blue;
padding : 8px;
margin : 0 5px;

`;
export default InicioComponente