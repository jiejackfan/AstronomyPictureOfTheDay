 const findAllPosts = () =>
  fetch("http://localhost:8080/api/posts", {
    method: 'POST',
    credentials: "include"
  })
  .then(response => {
    return response.json()
  })