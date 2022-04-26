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
  title.textContent = "Descrição"
  elementoPai.appendChild(title);

  let p = document.createElement('p');
  p.textContent = "Parágrafo com a descrição do perfil"
  elementoPai.appendChild(p);

  infoBtn.removeEventListener('click', addInfo);

}

function remove() {
  let elementoPai = document.getElementById('text');
  elementoPai.innerHTML = "";

  infoBtn.addEventListener('click', addInfo);

}

let apikey = "75m1CAZPAs7hcx4ME7adWzWRHVA8vR9S";
let randomGif = document.querySelector('#randomGif');
randomGif.addEventListener('click', ()=>{
  sendApiRequest();
})

async function sendApiRequest() {
  let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
  console.log(response);
  let gifs = await response.json();
  console.log(gifs);
  getRandom(gifs);
};

function getRandom(gifs){

  let gifHere = document.querySelector('#giphy-wrapper, .giphy, .img');
  gifHere.innerHTML = `<img src= ${gifs.data.images.original.url}'">`;
}
