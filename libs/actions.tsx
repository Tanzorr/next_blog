export const GET_POSTS ='GET_POSTS'
export const GET_POST ='GET_POST'
export const ADD_POST ='ADD_POST'
export const DELETE_POST ='DELETE_POST'
export const EDIT_POST ='EDIT_POST'


const Actions={
    getPosts(posts){
        return{
            type:GET_POSTS,
            payload:posts
        }
    },

    getPost(post={}){

        return{
            type:GET_POST,
            payload:post
        }
    },

    editPost(postId){
        return{
            type:EDIT_POST,
            payload:postId
        }
    },

    deletePost(postId){
        return{
            type:DELETE_POST,
            payload:postId
        }
    }
}

export  default Actions;
