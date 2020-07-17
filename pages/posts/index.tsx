import {Fragment} from "react";
import Router from "next/router";
import {useState,useEffect} from'react';
import withRedux from 'next-redux-wrapper'
import {connect} from "react-redux";
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import {MyPost} from "../../interfeces/post";
import {getPosts,deletePost} from "../../libs/reducers/posts";
import styled from 'styled-components'

interface PostsPageProps {
    posts:MyPost[]
}



 function Posts({posts,getPosts,deletePost}) {

     useEffect(()=>{ getPosts()},[])




    return(
        <MainLayout>
            <h1>Post Page</h1>
            <ul className='list-group'>
            {
                posts && posts.map((p,i)=>{

                return (

                <li key={i} className='list-group-item '>
                        <div className="d-flex justify-content-between">
                            <Link href={`/posts/{id}`} as={`/posts/${p.id}`}>
                                <a>{p.title}</a>
                            </Link>
                            <div>
                                <Link href={'/posts/edit/{id}'} as={`/posts/edit?id=${p.id}`}>
                                    <a>edit</a>
                                </Link>
                                <button onClick={()=>{deletePost(p.id)}} className='btn btn-danger ml-5'> delete</button>
                            </div>

                        </div>


                </li>)
            })
            }
            </ul>
            <button onClick={()=>{Router.push('/')}}>Go back to home</button>
        </MainLayout>
    )
}

//
// Post.getInitialProps = async ({req}:NextPageContext)=>{
//     const  posts = await postsAPI.getPosts()
//
//     return {
//                 posts:posts
//             }
// }

const mapStateToProps =(state)=>{
   return {
       posts:state.postsReducer.posts,

   }
}

export  default connect(mapStateToProps,{getPosts,deletePost})(Posts)