 const $form = document.getElementById('form')
 const $contents = document.getElementById('contents')
 const $favorites = document.getElementById('favorites')
 const $date = document.getElementById('date')
 const $container = document.getElementById('container')
 const $bimg = document.getElementById('background-img')
 const $image = document.querySelector('.content-img')

let contents = {}

function showContent(){
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
                <i class="fa-solid fa-heart"></i>
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
        showContent()
})



$contents.addEventListener('click', function(e){
    
    const html = []
    if(e.target.classList.contains('content-img')){
    $contents.innerHTML = `<div class='content' ><img class="content-img" src="${contents.hdurl}" alt="${contents.title}"></div>`
    }
})








