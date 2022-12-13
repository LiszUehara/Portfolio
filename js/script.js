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


if(botaoAbrir && botarFechar && containerModal){
   function abrirModal(event){
      event.preventDefault();
      containerModal.classList.add('ativo');
   }
   
   function fecharModal(event){
      event.preventDefault();
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
