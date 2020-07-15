import {Fragment} from "react";
import Router from "next/router";
import {useState,useEffect} from'react';

import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import {MyPost} from "../../interfeces/post";
import {NextPageContext} from "next";

interface PostsPageProps {
    posts:MyPost[]
}

export default function Post({posts}:PostsPageProps) {

    // const [posts, setPosts]=useState([])
    //
    // useEffect(()=>{
    //    async function load() {
    //         const response =await fetch('http://localhost:4200/posts')
    //        const json = await  response.json()
    //        setPosts(json);
    //    }
    //     load()
    // },[])
    return(
        <MainLayout>
            <h1>Post Page</h1>
            <ul>
                {posts.map(post=>(
                   <li key={post.id}>
                       <Link href={`/post/{id}`} as={`/post/${post.id}`}>
                           <a>{post.title}</a>
                       </Link>
                   </li>
                ))}
            </ul>
            <button onClick={()=>{Router.push('/')}}>Go back to home</button>
        </MainLayout>
    )
}


Post.getInitialProps = async ({req}:NextPageContext)=>{



    const response =await fetch(`http://localhost:4200/posts`)
            const posts:MyPost[] = await  response.json()
            return {
                posts
            }


}