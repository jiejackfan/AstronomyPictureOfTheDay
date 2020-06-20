 const fetchProfile = () =>
  fetch("https://fan-free-joshi-server.herokuapp.com/api/profile", {
    method: 'POST',
    credentials: "include"
  })
  .then(response => {
    return response.json()
  })

  const fetchUser = (userId) =>
   fetch("https://fan-free-joshi-server.herokuapp.com/api/users/" + userId)
   .then(response => {
     return response.json()
   })

  export default {
    fetchProfile,
    fetchUser
  }