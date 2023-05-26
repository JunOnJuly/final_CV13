import { useState } from 'react'

import styled from 'styled-components';
import side_bar_user from '../Icons/side_bar_user.png'
import side_bar_furniture from '../Icons/side_bar_furniture.png'
import side_bar_plus from '../Icons/side_bar_plus.png'
import base_css from '../base.css'

export default function SideBar() {
  const [isHovering, setIsHovering] = useState(0)

  return (
    <Background
    onMouseLeave={() => setIsHovering(0)}
    >
      {isHovering ? (
        <>
          <SideBox>
            <SideImgUser src={side_bar_user} />
            <FontBox>
              <FontedText>로그아웃</FontedText>
            </FontBox>
          </SideBox>
          <SideBox>
            <SideImgFurniture src={side_bar_furniture}/>
            <FontBox>
              <FontedText>내 방 보기</FontedText>
              <FontedText>내 방 꾸미기</FontedText>
            </FontBox>
          </SideBox>
        </>
      ) : ('')}
      <SideImgPlus src={side_bar_plus}
      onMouseEnter={() => setIsHovering(1)} 
      />
    </Background>
  )
}

const Background = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;

  padding-left: 5%;
`

const SideImgUser = styled.img`
  width: 30%;
  height: auto;
`

const SideImgFurniture = styled.img`
  width: 30%;
  height: auto;
`

const SideImgPlus = styled.img`
  &:hover ~ SideBox{
    
  }
  width: 25%;
  height: auto;

  margin-left: 5%;
  margin-bottom: 5%;
`

const SideBox = styled.div`
  transition-property: background-color;
  background-color: rgba(164,144,124,0.8);

  width: 70%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-left: 5%;
  margin-bottom: 5%;

  padding: 7%;

  border-radius: 20% / 40%;
`

const FontBox = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const FontedText = styled.p`
  font-family: 'IBMKR_Bold';
  margin: 0;
`