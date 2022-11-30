function mostrarAtivo(local){
    let li = document.getElementById('header-menu');
    let a = li.getElementsByTagName('a');
    for (i=0; i<a.length; i++ ){
       a[i].style.color = "";
    }
       local.style.color = "#d7d7d7";
    }


//função de destaque do menu


const section = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll', ()=>{
   let current = '';

   section.forEach( section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(pageYoffset >= (sectionTop - sectionHeight /3)){
         current = section.getAttribute('id');
         
      }
   })

   navLi.forEach( (li) => {

      li.classList.remove('active');
      if(li.classList.contains(current)){
         li.classList.add('active');
      }
   })
})


