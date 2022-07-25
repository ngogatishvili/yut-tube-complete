import React from 'react'
import styled from "styled-components";
import {ThumbDownAltOutlined, ThumbUpAltOutlined,Reply,AddTask} from "@mui/icons-material"
import logo from "../img/photo.png";
import Comments from '../components/Comments';
import { Card } from '../components/Card';


const Container=styled.div`
  display:flex;
  gap:24px;
`

const Content=styled.div`
  flex:5;
`

const VideoWrapper=styled.div``

const Title=styled.h1`
  font-size:18px;
  font-weight:400;
  margin-top:20px;
  margin-bottom:10px;
  color:${({theme})=>theme.text}
`

const Details=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`

const Info=styled.span`
  color:${({theme})=>theme.textSoft}
`

const Buttons=styled.div`
  display:flex;
  gap:20px;
  color:${({theme})=>theme.text}
`

const Button=styled.div`
  display:flex;
  align-items;center;
  gap:5px;
  cursor:pointer;
`

const Hr=styled.hr`
  border:0.5px solid ${({theme})=>theme.soft};
  margin:15px 0;
`

const Channel=styled.div`
  display:flex;
  justify-content:space-between;

`

const ChannelInfo=styled.div`
  display:flex;
`

const ChannelImg=styled.img`
  width:50px;
  height:50px;
  border-radius:50%;
`

const ChannelDetails=styled.div`
  display:flex;
  flex-direction:column;
  color:${({theme})=>theme.text}
`
const ChannelName=styled.span`
font-weight:500;
`
const ChannelCounter=styled.span`
font-size:12px;
margin-top:5px;
margin-bottom:20px;
color:${({theme})=>theme.textSoft}
`
const Description=styled.p`
font-size:14px;
`;
const Subscribe=styled.button`
  background:#cc1a00;
  font-weight:500;
  color:#fff;
  border:none;
  border-radius:3px;
  cursor:pointer;
  height:max-content;
  padding:10px 20px;
`

const Recommendation=styled.div`
  flex:2;
`

export const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe width="100%" height="720" src="https://www.youtube.com/embed/npnp--SSx_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Title>Test Video</Title>
        <Details>
          <Info>7,985,986 views * Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpAltOutlined/> 123
            </Button>
            <Button>
              <ThumbDownAltOutlined/> Dislike
            </Button>
            <Button>
              <Reply/> Share
            </Button>
            <Button>
              <AddTask/> Save
            </Button>
          </Buttons>
        </Details>
        <Hr/>
          <Channel>
            <ChannelInfo>
              <ChannelImg src={logo}/>
              <ChannelDetails>
              <ChannelName>Nini dev</ChannelName>
              <ChannelCounter>105K subscribers</ChannelCounter>
              <Description>Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.</Description>
              </ChannelDetails>
             
            </ChannelInfo>
            <Subscribe>SUBSCRIBE</Subscribe>
          </Channel>
          <Hr/>
          <Comments/>
        </VideoWrapper>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}
