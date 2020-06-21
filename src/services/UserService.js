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

    const findLoggedInUser = () =>
       fetch("https://fan-free-joshi-server.herokuapp.com/api/profile", {
           method: 'POST',
           credentials: 'include'
       }).then(response => response.text())
       .then(text => text.length ? JSON.parse(text) : null)


 const findUserByEmail = email =>
    fetch(`https://fan-free-joshi-server.herokuapp.com/api/users?email=${email}`)
    .then(response => (response.json()))

 const logUser = user =>
    fetch("https://fan-free-joshi-server.herokuapp.com/api/login", {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.text())
    .then(text => text.length ? JSON.parse(text) : null)



  export default {
    fetchProfile,
    fetchUser,
    findLoggedInUser,
    findUserByEmail,
    logUser
  }