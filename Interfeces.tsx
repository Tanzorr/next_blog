import {MyPost} from "./interfeces/post";

export  default  interface CommentType {
    postId:number,
    body:string
    id:number
}

export default  interface PostType {
    Comment:{id:number
    title:string,
    body:string,
    comments:CommentType[]}
}

export interface PostPageProps {
    post:MyPost
    getPost:void
}





