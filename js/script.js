const section = document.querySelectorAll('div section');
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
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) =>{
   criaElemento(elemento);
})


form.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const email = evento.target.elements['email'];
    const mensagem = evento.target.elements['mensagem'];

    const existe = itens.find(elemento => elemento.nome === nome.value);

    const itemAtual = {
      "nome": nome.value,
      "email": email.value,
      "mensagem": mensagem.value
    }

    if(existe){
      itemAtual.id = existe.id;


      itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;

    } else {
      itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;

      criaElemento(itemAtual);
      itens.push(itemAtual);


    }

    
    localStorage.setItem("itens", JSON.stringify(itens));
    

    nome.value = "";
    email.value = "";
    mensagem.value = "";
})

function criaElemento(item){
   const novoItem = document.createElement('li');
   novoItem.classList.add("item");
   

   const nomeItem = document.createElement('stronger');
   const emailItem = document.createElement('stronger');
   const mensagemItem = document.createElement('stronger');
   nomeItem.innerHTML = item.nome;
   emailItem.innerHTML = item.email;
   mensagemItem.innerHTML = item.mensagem;
   nomeItem.dataset.id = item.id;
   novoItem.appendChild(nomeItem);
   novoItem.appendChild(emailItem);
   novoItem.appendChild(mensagemItem);

    
   novoItem.appendChild(botaoDeleta(item.id));
    lista.appendChild(novoItem);
    
}


function botaoDeleta(id){
   const elementoBotao = document.createElement("button");
   elementoBotao.innerText = "X";

   elementoBotao.addEventListener("click", function(){
      deletaElemento(this.parentNode, id);
   })

   return elementoBotao;
}


function deletaElemento(tag, id){
   tag.remove();
   itens.splice(itens.findIndex(elemento => elemento.id === id), 1);

   localStorage.setItem("itens", JSON.stringify(itens));
}



   function deletaTudo(itens){ 
      const limpar = document.getElementById("deleteTudo");
      limpar.addEventListener("click", function(){
         localStorage.clear("itens", JSON.stringify(itens));
      })

   }
