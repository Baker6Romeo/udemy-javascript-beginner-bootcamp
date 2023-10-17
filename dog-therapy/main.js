var image = document.querySelector('.dog-img');
const endpoint = 'https://dog.ceo/api/breeds/image/random'

function fetchDog() {
    fetch(endpoint)
    .then(res => res.json()
    .then(json => image.setAttribute('src', json.message))
    )
}