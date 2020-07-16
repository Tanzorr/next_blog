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

    addPost(title,body) {
        return axios.post(`${baseURL}posts/`,{title, body})
},

    editPost(id,title,body){
        return axios.put(`${baseURL}posts/${id}`, {title,body}).then(response=>{
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
    addCommet(postId,body){
        return axios.post(`${baseURL}comments/`,{postId,body}).then(response=>{
            return response.data
        })
    }
}
