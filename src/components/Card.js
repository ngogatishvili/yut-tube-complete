import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import logo from "../img/photo.png"


const Container=styled.div`
    width:${(props)=>props.type!=="sm"&&"360px"};
    margin-bottom:${(props)=>props.type==="sm"?"10px":"45px"};
    cursor:pointer;
    display:${(props)=>props.type==="sm" && "flex"};
    gap:10px;
`

const Image=styled.img`
    width:100%;
    height:${(props)=>props.type==="sm"?"120px":"202px"};
    flex:1;


`
const Details=styled.div`
    display:flex;
    margin-top:${(props)=>props.type!=="sm"&&"16px"};
    gap:12px;
    flex:1;
`

const ChannelImg=styled.img`
    width:36px;
    height:36px;
    border-radius:50%;
    display:${(props)=>props.type==="sm" && "none"}
    
`

const Texts=styled.div`

`

const Title=styled.h1`
font-size:16px;
font-weight:500;
color:${({theme})=>theme.text}
`

const ChannelName=styled.h2`
  font-size:14px;
  color:${({theme})=>theme.textSoft};
  margin:9px 0;
`

const Info=styled.div`
font-size:14px;
color:${({theme})=>theme.textSoft}
`
export const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none",color:"inherit"}}>
    <Container type={type}>
        <Image type={type} src={logo}/>
        <Details type={type}>
          <ChannelImg type={type} src={logo}/>
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>nini dev</ChannelName>
            <Info>660,908 views * 1 day ago</Info>
          </Texts>
        </Details>

    </Container>
    </Link>
  )
}
