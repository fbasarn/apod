 const $form = document.getElementById('form')
 const $contents = document.getElementById('contents')
 const $favorites = document.getElementById('favorites')
 const $date = document.getElementById('date')
 const $container = document.getElementById('container')
 const $bimg = document.getElementById('background-img')
 const $image = document.querySelector('.content-img')
 const $favs = document.getElementById('favs')

let contents = {}
let favorites = []

function showContent(contents){
    const html = []

        html.push( /*html*/`
        <div class="content">
            <img class="content-img" src="${contents.url}" alt="${contents.title}">
                <div>
                    <h1>${contents.title}</h1>
                    <p>${contents.explanation}
                    </p>
                </div>
            <div class="content-date">
                <div><i class="fa-solid fa-clock"></i>></div>
                <p>${contents.date}</p>
                <i class="fav fa-solid fa-heart" data-url="${contents.url}" data-alt="${contents.title}"></i>
            </div>
    
        </div>`)

        $contents.innerHTML = html.join('')
        $bimg.style.display = 'none'
    }




const date = `${$date.value}`

$form.addEventListener('submit', async function getContent(date){
    date.preventDefault()
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=rvEOr6VJE05Ly4t5QqDewZKQMndl3a91eKSjT0Ke&date=' + `${$date.value}`)
        contents = await response.json()
        showContent(contents)
        $favs.innerHTML = ''
})

function showFav(){
    const fav = localStorage.getItem('fav')
    if(fav){
        favorites = JSON.parse(fav)
    }

    const html = []

    html.push(`<h2>FAVORITES</h2>`)
    for(let item of favorites)
    html.push( /*html*/`
       <div><img src="${item.url}" alt="${item.alt}"><i class="fa-solid fa-trash"></i></div>`)

    $favs.innerHTML = html.join('')
    $contents.innerHTML = ''
}



$contents.addEventListener('click', function(e){
    e.preventDefault()
    if(e.target.classList.contains('content-img')){
    $contents.innerHTML = `<div class='content' ><img class="hdimg" src="${contents.hdurl}" alt="${contents.title}">                
    <i class="back fa-solid fa-arrow-left"></i></div>`
    }else if(e.target.classList.contains('back')){
        showContent(contents)
    }else if(e.target.classList.contains('fav')){
        favorites.push({
            url: e.target.dataset.url,
            alt: e.target.dataset.alt
        })
        localStorage.setItem('fav', JSON.stringify(favorites))
    }
})

$favorites.addEventListener('click', function(e){
    e.preventDefault()
    showFav()
})

$favs.addEventListener('click', function(e){
    e.preventDefault()
    if(e.target.classList.contains('fa-trash')){
        const url = e.target.dataset.index
        favorites.splice(index, 1)
        localStorage.setItem('fav', JSON.stringify(favorites))
        showFav()
    }
})













