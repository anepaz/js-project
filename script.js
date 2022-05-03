let toggle = document.getElementById('toggle');

toggle.onclick = function(){
  toggle.classList.toggle('active')
}

let infoBtn = document.getElementById('infoBtn');

infoBtn.onclick = function(){
  infoBtn.classList.toggle('active')
}

infoBtn.addEventListener('click', addInfo);

function addInfo() {

  let elementoPai = document.getElementById('text');

  let title = document.createElement('h2');
  title.textContent = 'Descrição'
  elementoPai.appendChild(title);

  let p = document.createElement('p');
  p.textContent = 'Parágrafo com a descrição do perfil'
  elementoPai.appendChild(p);

  infoBtn.removeEventListener('click', addInfo);

}

function remove() {
  let elementoPai = document.getElementById('text');
  elementoPai.innerHTML = "";

  infoBtn.addEventListener('click', addInfo);

}

let apiKey = '75m1CAZPAs7hcx4ME7adWzWRHVA8vR9S';
let randomGif = document.querySelector('#randomGif');
randomGif.addEventListener('click', ()=>{
  sendApiRequest();
})

async function sendApiRequest() {
  let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  let gifs = await response.json();
  getRandom(gifs);
};

function getRandom(gifs){

  let gifHere = document.querySelector('#giphy-wrapper, .giphy, .img');
  gifHere.innerHTML = `<img src= ${gifs.data.images.original.url}'>`;
}

function apiRequest() {

  let userInput = document.getElementById('input').value;

  let giphyApiKey = '75m1CAZPAs7hcx4ME7adWzWRHVA8vR9S';
  let giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg-13&limit=15&api_key=${giphyApiKey}`;

  fetch(giphyApiUrl).then(function(data) {


    return data.json()
  })

  .then(function(json) {


    let boxResults = document.querySelector('#boxResults');
    let imgElements = document.querySelectorAll('#boxResults img');

    imgElements.forEach(img => {
      img.remove();
    });

    for (let i = 0; i < json.data.length; i++) {

      let imgPath = json.data[i].images.fixed_height.url;
      console.log(imgPath)
      let img = document.createElement('img');
      img.setAttribute('src', imgPath);

      boxResults.appendChild(img);
      img.classList.add('result-images');

    } 

    let arr = json.data;

    let removeP = document.querySelector('.error-message');
    
    if (removeP)
      boxResults.removeChild(removeP);

    if (arr.length === 0) { 
      let errorMsg = document.createElement('p');
      errorMsg.innerHTML = 'Nenhum gif encontrado';
      errorMsg.classList.add('error-message');
      boxResults.appendChild(errorMsg);
    }

  })

}
