const url = 'https://api.nasa.gov/planetary/apod?api_key=a3plhbCvVLjt5hm1KoooeIOZagKUvK9Nk4tyw2Ha'

const findApodByDate = (date) =>
    fetch(url + '&date=' + date)
    .then(response => response.json())

export default {
    findApodByDate
}