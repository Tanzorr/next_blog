import {useState, useEffect} from 'react'
import {MainLayout} from "../../components/MainLayout";

import Link from "next/link";
import {useRouter} from "next/router";
import {NextPageContext} from "next";
import {MyPost} from "../../interfeces/post";
import {postsAPI} from "../api/api";
import Comment from "../../components/Comment";
interface PostPageProps {
    post:MyPost
}

export default function Post({post:serverPost}:PostPageProps) {
    const [post,setPost]=useState(serverPost)
    const router = useRouter()

        console.log("comment",post.comments)

    return(
        <MainLayout>
            <h1>{post.title}</h1>
            <hr/>
            <div>
                {post.body}
            </div>
            <div>
                {post.comments.map(c=><Comment comment={c}/>)}
            </div>
            <Link href={'/posts'}><a>Back to all posts</a></Link>
            </MainLayout>
    )
}

// Post.getInitialProps = async ({query,req}) => {
//     if (!req){
//         return {post:null}
//     }
//     const response =await fetch(`http://localhost:4200/posts/`+query.id)
//     const post = await  response.json()
//     return {
//         post:post
//     }
//
// }

interface PostNextPageContext extends NextPageContext{
    query:{
        id:string
    }
}


export async function getServerSideProps({query,req}:PostNextPageContext) {
    if (!req){
        return {posrt:null}
    }

    //    const response =await fetch(`http://localhost:4200/posts/`+query.id)
    const post:MyPost = await  postsAPI.getPost(query.id)
      return {
         props:{post}
    }
}