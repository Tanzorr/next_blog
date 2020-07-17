import styled,{css} from "styled-components"



const ButtonStyle =css`
color:#fff!Important;
border-radius:4px;
padding:10px 15px;
margin:0 4px;
`

export const Container =styled.div`
display:flex;
justify-content:space-between;
width:90%;
margin:0 auto;

`

export const Lin = styled.a`
${ButtonStyle}
background:blue;
`


export const DelBtn =styled.a`
    ${ButtonStyle}
    background:red;
`
