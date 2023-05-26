import styled from "styled-components"
import SideBar from "../Components/sideBar"
import BottomBar from "../Components/bottomBar"
import Fade from "../Components/indexCarousel"

export default function Main() {
  return(
    <Background>
      <CarouselDiv>
        <Fade />
      </CarouselDiv>

      <SideBarDiv>
        <SideBar/>
      </SideBarDiv>

      <BottomDiv>
        <BottomBar/>
      </BottomDiv>
    </Background>
  )
}

const Background = styled.div`
  background-color: #F1DEC9;
  
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
`

const SideBarDiv = styled.div`
  position: absolute;

  bottom: 10%;
  left: 0;

  width: 15%;
  height: 100%;
  `

const BottomDiv = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;

  width: 100%;
  height: 10%;
`

const CarouselDiv = styled.div`
  Position: absolute;

  top: 5%;
  left: 10%;

  width: 80%;
  height: 80%;
  `