import styled,{css} from "styled-components"

const ButtonStyle =css`
color:#fff!Important;
border-radius:4px;
padding:10px 15px;
margin:0 4px;
cursor:pointer;
`


export const  Container= styled.div`
display:block;
`


export const  Title1= styled.h1`
color:#666;
`

export const  Title2= styled.h2`
color:#666;
`

export const ContainerLink =styled.div`
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

export const Input =styled.input`
    border:solid 1px #333;
    border-radius:4px;
`

export const Textarea =styled.textarea`
    border:solid 1px #333;
    border-radius:4px;
`
