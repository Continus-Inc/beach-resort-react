import styled from 'styled-components'
import defaultImg from '../images/room-1.jpeg'

const StyledHero = styled.header `
background-image: url(${ props=>(props.img ?props.img : defaultImg)});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
min-height: 60vh;
display:flex;
justify-content: center;
align-items: center;


`;

export default StyledHero;