import Actions, {GET_POSTS,GET_POST,EDIT_POST,DELETE_POST} from "../actions"
import {postsAPI} from "../../api/api";
import PostType from "../../Interfeces";



const initalState={
    posts:[],
    post:{
        title:"",
        body:"",
        id:null,
        comments:[]
    }
}

 const postsReducer=(state=initalState,action:any)=>{
     console.log("action",action)
    switch (action.type) {
        case GET_POSTS:

            return{
                ...state,
                posts:action.payload
            }
        case GET_POST:

            return {
                ...state,
                post:action.payload
            }

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((p:PostType,i:number)=>{
                    if(p.id!== action.payload){
                        return p
                    }
                })
            }

        default:
            return state

    }
}

export const getPosts=()=>{
    return async (dispatch:any)=>{
        let data:any =await postsAPI.getPosts()
        dispatch(Actions.getPosts(data))
    }
}

export const getPost=(id:number)=>{

    return async (dispatch:any)=>{
        let data =await postsAPI.getPost(id)
        dispatch(Actions.getPost(data))
    }
}

export const deletePost=(id:number)=>{
    return async (dispatch:any)=>{
        let data =await postsAPI.deletePost(id)
        console.log("dataPost",data)
        dispatch(Actions.deletePost(id))
    }
}


export default postsReducer;