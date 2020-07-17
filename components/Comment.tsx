import CommentType from "../Interfeces";
import {Container} from "../pages/index.styles";


 function Comment(c:CommentType){

    return(
        <>
            <Container>
                {c.body}
            </Container>

            </>
    )
}

export default Comment
