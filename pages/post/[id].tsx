import {useState, useEffect} from 'react'
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import {useRouter} from "next/router";
import {NextPageContext} from "next";
import {MyPost} from "../../interfeces/post";
interface PostPageProps {
    post:MyPost
}

export default function Post({post:serverPost}:PostPageProps) {
    const [post,setPost]=useState(serverPost)
    const router = useRouter()
    useEffect(()=>{
        async function load() {
            const response =await fetch(`http://localhost:4200/posts/`+router.query.id)
            const post = await  response.json()
            setPost(post)
        }
        if(!serverPost){
            load()
        }
        if (!post){
            return<MainLayout>
                <p>Loading...</p>
            </MainLayout>
        }
    },[])

    //const router = useRouter();

    return(
        <MainLayout>
            <h1>{post.title}</h1>
            <hr/>
            <div>
                {post.body}
            </div>
            <Link href={'/post'}><a>Back to all posts</a></Link>
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

    const response =await fetch(`http://localhost:4200/posts/`+query.id)
    const post:MyPost = await  response.json()
      return {
         props:{post}
    }
}