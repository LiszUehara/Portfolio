function mostrarAtivo(local){
    let li = document.getElementById('header-menu');
    let a = li.getElementsByTagName('a');
    for (i=0; i<a.length; i++ ){
       a[i].style.color = "";
    }
       local.style.color = "#d7d7d7";
    }


//função de destaque do menu


