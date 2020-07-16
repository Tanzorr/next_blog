import {useState, useEffect} from 'react'
import {MainLayout} from "../../components/MainLayout";


import {useRouter} from "next/router";

import {postsAPI} from "../api/api";
import {NextPageContext} from "next";
import {MyPost} from "../../interfeces/post";



export default function edit({post}) {

    const [title,setTitle]=useState(post.title)
    const [body,setBody]=useState(post.body)
    const router = useRouter()

    const editData=(id,title, body)=>{
        postsAPI.editPost(id,title,body)
        setTitle("");
        setBody("");
        router.push('/posts')
    }

    return(
        <MainLayout>
            <div className="container">
                <h1>Add new Post</h1>
                <div className="form-group">
                    <input  className="form-control" onChange={(e)=>{setTitle(e.target.value)}} type='text' value={title} id='title'/>
                </div>
                <div  className="form-group" >
                    <textarea className="form-control" onChange={ (e)=>{setBody(e.target.value) }} value={body}/>

                </div>
                <div className="form-group">
                    <button onClick={()=>{editData(post.id,title,body)}} >Send</button>

                </div>
            </div>
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


