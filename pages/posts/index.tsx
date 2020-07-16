import {Fragment} from "react";
import Router from "next/router";
import {useState,useEffect} from'react';

import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import {MyPost} from "../../interfeces/post";
import {NextPageContext} from "next";
import {postsAPI} from "../api/api";

interface PostsPageProps {
    posts:MyPost[]
}

export default function Post({posts}:PostsPageProps) {
    console.log("pstst",posts)

    if(posts){
    posts.map((p,i)=>{
            console.log("p",p)
           return (
               <ul className='list-group'>
                   <li key={i} className='list-group-item'>
                       <Link href={`/post/{id}`} as={`/post/${p.id}`}>
                                      <a>{p.title}</a>
                                  </Link>

                   </li>
               </ul>
           )
       })
    }
    return(
        <MainLayout>
            <h1>Post Page</h1>
            <ul className='list-group'>
            {
                posts ? posts.map((p,i)=>{
                console.log("p",p)
                return (

                <li key={i} className='list-group-item'>
                <Link href={`/post/{id}`} as={`/post/${p.id}`}>
                <a>{p.title}</a>
                </Link>
                </li>

                )
            }):" No posts"
            }
            </ul>
            <button onClick={()=>{Router.push('/')}}>Go back to home</button>
        </MainLayout>
    )
}


Post.getInitialProps = async ({req}:NextPageContext)=>{
    const  posts = await postsAPI.getPosts()

    return {
                posts:posts
            }
}