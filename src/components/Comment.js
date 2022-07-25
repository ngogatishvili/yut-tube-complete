import React from 'react'
import styled from "styled-components"
import logo from "../img/photo.png"


const Container=styled.div`
    display:flex;
    gap:10px;
    margin:30px 0;
`

const Avatar=styled.img`
    width:50px;
    height:50px;
    border-radius:50%;

`


const Details=styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    color:${({theme})=>theme.text}
`

const Name=styled.span`
font-size:13px;
font-weight:500;
`
const Date=styled.span`
    font-size:12px;
    font-weight:400;
    color:${({theme})=>theme.textSoft};
    margin-left:5px;
    font-size:14px;
`
const Text=styled.span`
font-size:14px;
`

const Comment = () => {
  return (
   <Container>
       <Avatar src={logo}/>
       <Details>
            <Name>Ninidev <Date>3 days ago</Date></Name>
            <Text>Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.</Text>
       </Details>
   </Container>
  )
}

export default Comment;
