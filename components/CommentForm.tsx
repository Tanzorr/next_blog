import {useState} from "react";
import {commentsAPI, postsAPI} from "../api/api";
import {Container, Lin, Textarea, Title2} from "../pages/index.styles";


export  default function CommentForm(id:number){
    const [body,setBody]=useState('')

    const sendData=(id:number, body:string)=>{
        if(body !==""){
            commentsAPI.addCommet(id,body)
        }else {
            alert("field cannot be empty")
        }


        setBody("");
    }

    return(
        <>
            <Title2>
                Comment form
            </Title2>
            <Container  className="form-group" >
                <Textarea className="form-control" onChange={ (e:any)=>{setBody(e.target.value) }} value={body}/>

            </Container>
            <Container className="form-group">
                <Lin onClick={()=>{sendData(id,body)}} >Send</Lin>

            </Container>

        </>
    )
}
