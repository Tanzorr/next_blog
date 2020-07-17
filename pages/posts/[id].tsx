import { useEffect} from 'react'
import {MainLayout} from "../../components/MainLayout";
import {connect} from "react-redux";
import Link from "next/link";
import {useRouter} from "next/router";
import {NextPageContext} from "next";
import Comment from "../../components/Comment";
import CommentForm from "../../components/CommentForm";
import {getPost} from "../../libs/reducers/posts";
import {Container, Title1, Lin, Input, Textarea, Title2} from "../index.styles"
import {PostPageProps} from "../../Interfeces";




function Post({post,getPost}:PostPageProps) {

    const router = useRouter()
    const Post = router.query

    console.log("post",post)

    useEffect(()=>{if(Post.id){getPost(Post.id)}},[Post])

    return(
        <MainLayout>
            <Title1>{post.title}</Title1>
            <hr/>
            <Container>
                {post.body}
            </Container>
            <div>
                <Title2>Post comments</Title2>
                {post.comments.map((c,i)=>{
                   return  <Comment key={i} c={c.c}/>
                })}
                <CommentForm id={post.id}/>
            </div>
            <Link href={'/'}><Lin>Back to all posts</Lin></Link>

            </MainLayout>
    )
}



interface PostNextPageContext extends NextPageContext{
    query:{
        id:string
    }
}




const mapStateToProps = (state:any)=>{
    return{
        post:state.postsReducer.post,
    }
}

export default connect(mapStateToProps,{getPost})(Post)