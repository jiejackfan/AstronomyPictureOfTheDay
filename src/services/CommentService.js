const createNewComment = (postId, newComment) =>
    fetch(`https://fan-free-joshi-server.herokuapp.com/api/posts/${postId}/comments/new`, {
        method: 'POST',
        body: JSON.stringify(newComment),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })

export default {
    createNewComment
}
