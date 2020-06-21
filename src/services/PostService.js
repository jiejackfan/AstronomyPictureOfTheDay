const findAllPosts = () =>
    fetch("https://fan-free-joshi-server.herokuapp.com/api/posts")
    .then(response => {
      return response.json()
    })

    const PostService = (userId) =>
      fetch("https://fan-free-joshi-server.herokuapp.com/api/posts/" + userId)
      .then(response => {
        return response.json()
      })

    const createPost = (newPost) =>
      fetch("https://fan-free-joshi-server.herokuapp.com/api/posts/new", {
        method: 'POST',
        body: JSON.stringify(newPost),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }})
      .then(response => {
        return response.json()
      })

    const deletePostById = (postId) =>
      fetch("https://fan-free-joshi-server.herokuapp.com/api/posts/delete/" + postId, {
        method: 'DELETE'
      })
      .then(response => {
        return response.json()
      })

    export default {
      findAllPosts,
      findPostForUser,
      createPost,
      deletePostById
    }
