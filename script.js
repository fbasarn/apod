 const $form = document.getElementById('form')
 const $contents = document.getElementById('contents')
 const $favorites = document.getElementById('favorites')
 const $date = document.getElementById('date')
 const $container = document.getElementById('container')
 const $bimg = document.getElementById('background-img')
 const $cimg = document.querySelector('.background-img')
 const $image = document.querySelector('.content-img')
 const $favs = document.getElementById('favs')
 const $text = document.getElementById('text')
 const $homepage = document.getElementById('homepage')




let contents = {}
let favorites = []


function showContent(contents){
    $text.style.display = "none";
    const html = []
        if( contents.media_type === "image"){
            html.push( /*html*/`
            <div class="content"> 
            <img class="content-img" src="${contents.url}" alt="${contents.title}" 
            data-media_type="${contents.media_type}">
                    <div>
                        <h1>${contents.title}</h1>
                        <p>${contents.explanation}
                        </p>
                    </div>
                <div class="content-date">
                    <div><i class="fa-solid fa-clock"></i>></div>
                    <p>${contents.date}</p>
                    <i class="fav fa-solid fa-heart" data-url="${contents.url}" data-hdurl="${contents.hdurl}" 
                    data-alt="${contents.title}" data-date="${contents.date}" 
                    data-explanation="${contents.explanation}"
                     data-media_type="${contents.media_type}" data-title="${contents.title}"></i>
                </div>
        
            </div>`)}
        else{
        html.push( /*html*/`
        <div class="content"> 
           <iframe width="300px" height="400px" class="content-vid" src="${contents.url}" 
           rameborder="0" allowfullscreen></iframe>
                <div>
                    <h1>${contents.title}</h1>
                    <p>${contents.explanation}
                    </p>
                </div>
            <div class="content-date">
                <div><i class="fa-solid fa-clock"></i>></div>
                <p>${contents.date}</p>
            </div>
    
        </div>`)}

        $contents.innerHTML = html.join('')
        $favs.innerHTML = ''
        $bimg.style.opacity = "0.5"
    

    }




$form.addEventListener('submit', async function getContent(date){
    date.preventDefault()
    const response = await 
    fetch('https://api.nasa.gov/planetary/apod?api_key=rvEOr6VJE05Ly4t5QqDewZKQMndl3a91eKSjT0Ke&date=' + `${$date.value}`)
        contents = await response.json()
        showContent(contents)
})

function showFav(){
    $text.style.display = "none";
    const html = []
    const fav = localStorage.getItem('fav')
    if(fav){
        favorites = JSON.parse(fav)
    }

    html.push(/*html*/ `<div class="favorites--heading"><div class="favorites--icon"><i 
    class="back fa-solid fa-arrow-left"></i></div><div class="favorites--title"><h2>FAVORITES</h2></div></div>`)
       for(let item of favorites)
       if(item.media_type === 'image'){
        html.push( /*html*/`
       <div><img src="${item.url}" class="fav--img"  alt="${item.alt}" data-url="${item.url}" 
       data-hdurl="${item.hdurl}" data-alt="${item.title}" data-date="${item.date}" 
       data-explanation="${item.explanation}" data-media_type="${item.media_type}" data-title="${item.title}">
       <i class="fa-solid fa-trash" data-url="${item.url}" data-media_type="${item.media_type}"></i></div>`)
       } else{
        html.push( /*html*/`
       <div><iframe width="200px" height="200px" src="${item.url}" class="fav--img"  alt="${item.alt}" 
       data-url="${item.url}" data-hdurl="${item.hdurl}" data-alt="${item.title}" data-date="${item.date}" 
       data-explanation="${item.explanation}" data-media_type="${item.media_type}" data-title="${item.title}">
       <i class="fa-solid fa-trash" data-url="${item.url}" data-media_type="${item.media_type}"></i></iframe></div>`)
       }
       


    $favs.innerHTML = html.join('')
    $contents.innerHTML = ''
    $bimg.style.opacity = "0.5"
}


$contents.addEventListener('click', function(e){
    e.preventDefault()
    if(e.target.classList.contains('content-img')){
    $contents.innerHTML = `<div class='content' ><img class="hdimg" src="${contents.hdurl}" alt="${contents.title}">                
    <i class="back fa-solid fa-arrow-left"></i></div>`

    }else if(e.target.classList.contains('back')){
        showContent(contents)
    }else if(e.target.classList.contains('fav')){
        e.target.style.color = '#85182A'
        favorites.push({
            url: e.target.dataset.url,
            hdurl: e.target.dataset.hdurl,
            alt: e.target.dataset.alt,
            date: e.target.dataset.date,
            explanation: e.target.dataset.explanation,
            media_type: e.target.dataset.media_type,
            title: e.target.dataset.title,
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
        const url = e.target.dataset.url
            let index = favorites.findIndex(function findImg(img) {
            return img.url === url
        })
        favorites.splice(index, 1)
        localStorage.setItem('fav', JSON.stringify(favorites))
        showFav()
    } else if(e.target.classList.contains('back')){
        if(contents.date){
            showContent(contents)
        }else{
           const html = []
           html.push( /*html*/ `<div id="text"><p>Please enter a non-future date.</p></div>`)

           $contents.innerHTML = html.join('')
           $favs.innerHTML = ''
        }
        
    }
})

$favs.addEventListener('click', async function getContent(e){
    e.preventDefault()
    if(e.target.classList.contains('fav--img')){
        const response = await 
        fetch('https://api.nasa.gov/planetary/apod?api_key=rvEOr6VJE05Ly4t5QqDewZKQMndl3a91eKSjT0Ke&date=' + `${e.target.dataset.date}`)
        contents = await response.json()
        showContent(contents)
    }
})

$homepage.addEventListener('click', function(e){
    location.reload()
})

// borrowed/modified code for date value from: https://jsfiddle.net/n4vwaurL/ 

let now = new Date();
let y = now.getFullYear();
let m = now.getMonth() + 1;
let d = now.getDate();

m = m < 10 ? "0" + m : m;
d = d < 10 ? "0" + d : d;


const $today = document.querySelector("input[type=date]")

$today.value = y + "-" + m + "-" + d;

$today.max = y + "-" + m + "-" + d;

// end of borrowed code

