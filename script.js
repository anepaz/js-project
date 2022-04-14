let toggle = document.getElementById('toggle');

toggle.onclick = function(){
  toggle.classList.toggle('active')
}

let elementoPai = document.getElementById('text');

let title = document.createElement('h2');
title.textContent = "Descrição"
elementoPai.appendChild(title);

let p = document.createElement('p');
p.textContent = "Parágrafo com a descrição do perfil"
elementoPai.appendChild(p)
