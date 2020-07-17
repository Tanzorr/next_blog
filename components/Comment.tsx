import CommentType from "../Interfeces";


 function Comment(c:CommentType){
    console.log("Cooment",c.c)
    return(
        <>
            <p>
                {c.c.body}
            </p>

            </>
    )
}

export default Comment
