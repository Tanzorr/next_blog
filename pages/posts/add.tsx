import {useState, useEffect} from 'react'
import {MainLayout} from "../../components/MainLayout";


import {useRouter} from "next/router";

import {postsAPI} from "../../api/api";



export default function Add() {

    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const router = useRouter()

    const sendData=async (title, body)=>{
      await  postsAPI.addPost(title,body)
        setTitle("");
        setBody("");
       await router.push('/posts')
    }

    return(
        <MainLayout>
            <div className="container">
                <h1>Add new Post</h1>
                <div className="form-group">
                    <input  className="form-control"
                            onChange={(e)=>{setTitle(e.target.value)}}
                            type='text' value={title} id='title'/>
                </div>
                <div  className="form-group" >
                <textarea className="form-control" onChange={ (e)=>{setBody(e.target.value) }} value={body}/>

                </div>
                <div className="form-group">
                    <button onClick={()=>{sendData(title,body)}} >Send</button>

                </div>
            </div>
        </MainLayout>
    )
}


