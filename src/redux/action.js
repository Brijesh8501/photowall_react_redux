//remove
export function RemovePost(postindex)
{
    return {
        type:"REMOVE_POST",
        index:postindex
    }
}
export function AddPost(postFromAddImage)
{
    return {
        type:"ADDING_POST",
        post:postFromAddImage
    }
}
export function AddComment(commentpass,postid)
{
    return {
        type : 'ADDING_COMMENT',
        commentpass,
        postid
    }
}
