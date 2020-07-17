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

interface PostPageProps {
    post:MyPost
}

function Post({post,getPost}) {
    //const [post,setPost]=useState(serverPost)
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
                {post.comments.map(c=><Comment comment={c}/>)}
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

const mapStateToProps = (state)=>{
    return{
        post:state.postsReducer.post,
    }
}

export default connect(mapStateToProps,{getPost})(Post)