export const fetchProfile = () =>
  fetch("http://localhost:8080/api/profile", {
    method: 'POST',
    credentials: "include"
  })
  .then(response => {
    return response.json()
  })

   export const fetchImages = () =>
     fetch("http://localhost:8080/api/post", {
       method: 'POST',
       credentials: "include"
     })
     .then(response => {
       return response.json()
     })