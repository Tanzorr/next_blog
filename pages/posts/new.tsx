import {useState, useEffect} from 'react'
import {MainLayout} from "../../components/MainLayout";
import {useRouter} from "next/router";
import {postsAPI} from "../../api/api";
import {Container, Title1, Lin, Input,Textarea } from "../index.styles"



export default function New() {

    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const router = useRouter()

    const sendData=async (title:string, body:string)=>{
        if(title!=="" || body!==""){
            await  postsAPI.addPost(title,body)
            setTitle("");
            setBody("");
            await router.push('/posts')
        }

    }

    return(
        <MainLayout>
            <Container className="container">
                <Title1>Add new Post</Title1>
                <div className="form-group">
                    <Input  className="form-control"
                            onChange={(e:any)=>{setTitle(e.target.value)}}
                            type='text' value={title} id='title'/>
                </div>
                <div  className="form-group" >
                <Textarea  className="form-control" onChange={ (e:any)=>{setBody(e.target.value) }} value={body}/>

                </div>
                <div className="form-group">
                    <Lin onClick={()=>{sendData(title,body)}} >Send</Lin>

                </div>
            </Container>
        </MainLayout>
    )
}


