const findAllPosts = () =>
    fetch("https://fan-free-joshi-server.herokuapp.com/api/posts")
        .then(response => {
            return response.json()
        })

const findPostForUser = (userId) => {
    console.log("finding posts for user " + userId)
    return fetch(`https://fan-free-joshi-server.herokuapp.com/api/posts/user/${userId}`)
        .then(response => {
            console.log(response)
            return response.json()
        })
}


const createPost = (newPost) =>
    fetch("https://fan-free-joshi-server.herokuapp.com/api/posts/new", {
        method: 'POST',
        body: JSON.stringify(newPost),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })

const deletePostById = (postId) =>
    fetch("https://fan-free-joshi-server.herokuapp.com/api/posts/delete/" + postId, {
        method: 'DELETE'
    })


export default {
    findAllPosts,
    findPostForUser,
    createPost,
    deletePostById
}
