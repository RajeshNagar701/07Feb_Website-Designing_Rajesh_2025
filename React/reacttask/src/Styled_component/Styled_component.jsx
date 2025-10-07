/*
https://styled-components.com/

CSS for the <Component> Age
Styling your way with speed, strong typing, and flexibility.
GitHub

Apart from the improved experience for developers, styled-components provides:

Automatic critical CSS
No class name bugs:
Easier deletion of CSS:
Simple dynamic styling:
Painless maintenance:

nstalling styled-components only takes a single command and you're ready to roll:

npm install styled-components

*/



import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
    background-color: #BF4F74;
    padding:10px;
  `

const MyButton = styled.button`
    border:2px solid palevioletred;
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:none;
    color:palevioletred;
    display:block;
    margin:0 auto;
    &:hover{
            background : palevioletred;
            color:white;
    }
`  

const Btn = styled.button`
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:LightGray;
    color:White;
    display:block;
    margin:0 auto;
    border:none;
`
const Btn_red = styled(Btn)`
    background:red;
`
const Btn_yellow = styled(Btn)`
    background:yellow;
`
const Btn_green = styled(Btn)`
    background:green;
`
const Btn_orange = styled(Btn)`
    background:orange;
`
const Btn_two = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.monil ? "palevioletred" : "white"};
  color: ${props => props.monil ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function Styled_component() {

  
  return (
    <div>
        <Title>My Title</Title>

        <hr />

        <MyButton>My Button</MyButton>

        <hr />

        <Btn>Bassic Button</Btn>
        <Btn_red>Bassic Red</Btn_red>
        <Btn_green>Bassic Green</Btn_green>
        <Btn_orange>Bassic Orange</Btn_orange>
        <Btn_yellow>Bassic Yellow</Btn_yellow>

        <hr />

        <Btn_two>Props Button</Btn_two>
        <Btn_two monil>No Props Button</Btn_two>
        
    </div>
  )
}

export default Styled_component