import {useState, useEffect} from 'react'
import {MainLayout} from "../../components/MainLayout";
import {connect} from "react-redux";
import Link from "next/link";
import {useRouter} from "next/router";
import {NextPageContext} from "next";
import {MyPost} from "../../interfeces/post";
import {postsAPI} from "../../api/api";
import Comment from "../../components/Comment";
import CommentForm from "../../components/CommentForm";
import {getPost} from "../../libs/reducers/posts";
import CommentType from "../../Interfeces";

interface PostPageProps {
    post:MyPost
    getPost:void
}

function Post({post,getPost}:PostPageProps) {

    const router = useRouter()
    const Post = router.query

    console.log("post",post)

    useEffect(()=>{if(Post.id){getPost(Post.id)}},[Post])

    return(
        <MainLayout>
            <h1>{post.title}</h1>
            <hr/>
            <div>
                {post.body}
            </div>
            <div>
                <h3>Post comments</h3>
                {post.comments.map((c,i)=>{
                   return  <Comment key={i} c={c}/>
                })}
                <CommentForm id={post.id}/>
            </div>
            <Link href={'/posts'}><a>Back to all posts</a></Link>

            </MainLayout>
    )
}



interface PostNextPageContext extends NextPageContext{
    query:{
        id:string
    }
}


// export async function getServerSideProps({query,req}:PostNextPageContext) {
//     if (!req){
//         return {posrt:null}
//     }
//
//     //    const response =await fetch(`http://localhost:4200/posts/`+query.id)
//     const post:MyPost = await  postsAPI.getPost(query.id)
//       return {
//          props:{post}
//     }
// }

const mapStateToProps = (state:any)=>{
    return{
        post:state.postsReducer.post,
    }
}

export default connect(mapStateToProps,{getPost})(Post)