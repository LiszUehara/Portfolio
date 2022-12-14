const section = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll', ()=>{
   let current = '';

   section.forEach( section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(pageYOffset >= (sectionTop - sectionHeight /3)){
         current = section.getAttribute('id');
         
      }
   })

   navLi.forEach( (li) => {

      li.classList.remove('active');
      if(li.classList.contains(current+'-header')){
         li.classList.add('active');
      }
   })
})

const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');


if(botaoAbrir && botaoFechar && containerModal){
   function abrirModal(event){
      containerModal.classList.add('ativo');
   }
   
   function fecharModal(event){
      containerModal.classList.remove('ativo');
   }
   
   function cliqueForaModal(event){
      if(event.target === this){
         fecharModal(event);
      }
   }
   
   
   
   
   botaoAbrir.addEventListener('click', abrirModal);
   botaoFechar.addEventListener('click', fecharModal);
   containerModal.addEventListener('click', cliqueForaModal);
}

//local storage

const form = document.getElementById("novoItem");


form.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['email'].value, evento.target.elements['mensagem'].value )
    evento.target.elements['nome'].value = "";
    evento.target.elements['email'].value = "";
})

function criaElemento(nome, email, mensagem){
   const novoItem = document.createElement('li');
   novoItem.classList.add("item");

   const nomeItem = document.createElement('stronger');
   nomeItem.innerHTML = nome;

   novoItem.appendChild(nomeItem);
   nomeItem.innerHTML += email += mensagem;
   
    const lista = document.getElementById("lista");

    lista.appendChild(novoItem);
}

