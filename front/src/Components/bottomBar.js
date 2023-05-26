import styled from "styled-components"
import base_css from "../base.css"

export default function BottomBar() {
  return (
    <Background>
      <TextBox>
        <BottomText>
          NaverConnectFoundation
        </BottomText>
      </TextBox>
    </Background>
  )
}

const Background = styled.div`
  background-color: #A4907C;

  height: 100%;
  width: 100%;
`

const TextBox = styled.div`
  position: absolute;

  bottom: 5%;
  right: 1%;
`

const BottomText = styled.p`
  font-family: IBMKR;
  margin: 0;
`