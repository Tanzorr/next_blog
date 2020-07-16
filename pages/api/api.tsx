import axios from "axios";
import {MyPost} from "../../interfeces/post";

let baseURL = "https://simple-blog-api.crew.red/";
interface ResponseType {
    posts:MyPost[]
}
export const postsAPI={
    getPosts(){
        return axios.get<ResponseType>(`${baseURL}posts`).then(response=>{
            return response.data
        })
    },

    getPost(id:string | number){
        return axios.get<MyPost>(`${baseURL}posts/${id}?_embed=comments`).then(response=>{
            return response.data
        })
    },

    addPost(data:{title,body}){
        return axios.post(`${baseURL}posts/${data}`).then(response=>{
            return response.data
        })
    },

    editPost(id,data:{title,body}){
        return axios.put(`${baseURL}posts/${id}/${data}`).then(response=>{
            return response.data
        })
    },

    deletePost(id:number | string){
        return axios.delete(`${baseURL}posts/${id}`).then(response=>{
            return response.data
        })
    }


}

export  const commentsAPI={
    addCommet(data:{postId:string |number,body:string}){
        return axios.delete(`${baseURL}comments/${data}`).then(response=>{
            return response.data
        })
    }
}
