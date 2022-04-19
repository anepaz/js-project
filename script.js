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

let imgFade = document.querySelector('imgFade');
imgFade.classList.add("imgFade");