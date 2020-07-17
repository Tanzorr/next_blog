import {useState, useEffect} from 'react'
import {MainLayout} from "../../components/MainLayout";
import {useRouter} from "next/router";
import {postsAPI} from "../../api/api";
import {NextPageContext} from "next";
import {MyPost} from "../../interfeces/post";
import {Container, Title1, Lin, Input,Textarea } from "../index.styles"





export default function edit({post}:any) {

    const [title,setTitle]=useState(post.title)
    const [body,setBody]=useState(post.body)
    const router = useRouter()

    const editData=(id:number,title:string, body:string)=>{
        postsAPI.editPost(id,title,body)
        setTitle("");
        setBody("");
        router.push('/posts')
    }

    return(
        <MainLayout>
            <Container className="container">
                <Title1>Add new Post</Title1>
                <div className="form-group">
                    <Input  className="form-control" onChange={(e:any)=>{setTitle(e.target.value)}} type='text' value={title} id='title'/>
                </div>
                <div  className="form-group" >
                    <Textarea className="form-control" onChange={ (e:any)=>{setBody(e.target.value) }} value={body}/>

                </div>
                <div className="form-group">
                    <Lin onClick={()=>{editData(post.id,title,body)}} >Send</Lin>

                </div>
            </Container>
        </MainLayout>
    )
}



interface PostNextPageContext extends NextPageContext{
    query:{
        id:string
    }
}


export async function getServerSideProps({query,req}:PostNextPageContext) {
    if (!req){
        return {posrt:null}
    }


    const post:MyPost = await  postsAPI.getPost(query.id)
    return {
        props:{post}
    }
}


