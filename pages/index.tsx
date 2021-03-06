import {Fragment} from "react";
import Router from "next/router";
import {useState,useEffect} from'react';
import withRedux from 'next-redux-wrapper'
import {connect} from "react-redux";
import {MainLayout} from "../components/MainLayout";
import Link from "next/link";
import {MyPost} from "../interfeces/post";
import {getPosts,deletePost} from "../libs/reducers/posts";
import {ContainerLink, DelBtn, Lin} from "./index.styles"


interface PostsPageProps {
    posts:MyPost[]
    getPosts:void
    deletePost:void
}




 function Posts({posts,getPosts,deletePost}:PostsPageProps) {

     useEffect(()=>{ getPosts()},[])
     return(
        <MainLayout>
            <h1>Post Page</h1>
            <ul className='list-group'>
            {
                posts && posts.map((p,i)=>{

                return (

                <li key={i} className='list-group-item '>
                        <ContainerLink className="d-flex justify-content-between">
                            <Link href={`/posts/{id}`} as={`/posts/${p.id}`}>
                                <a>{p.title}</a>
                            </Link>
                            <div>
                                <Link href={'/posts/edit/{id}'} as={`/posts/edit?id=${p.id}`}>
                                    <Lin>edit</Lin>
                                </Link>
                                <DelBtn onClick={()=>{deletePost(p.id)}} > delete</DelBtn>

                            </div>

                        </ContainerLink>


                </li>)
            })
            }
            </ul>
            <button onClick={()=>{Router.push('/')}}>Go back to home</button>
        </MainLayout>
    )
}


const mapStateToProps =(state:any)=>{
   return {
       posts:state.postsReducer.posts,

   }
}

export  default connect(mapStateToProps,{getPosts,deletePost})(Posts)