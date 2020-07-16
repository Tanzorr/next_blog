import {useState} from "react";
import {commentsAPI, postsAPI} from "../pages/api/api";


export  default function CommentForm(id:any){
    const [body,setBody]=useState('')

    const sendData=(id, body)=>{
        commentsAPI.addCommet(id,body)

        setBody("");
    }

    return(
        <>
            <p>
                Comment form
            </p>
            <div  className="form-group" >
                <textarea className="form-control" onChange={ (e)=>{setBody(e.target.value) }} value={body}/>

            </div>
            <div className="form-group">
                <button onClick={()=>{sendData(id,body)}} >Send</button>

            </div>

        </>
    )
}
