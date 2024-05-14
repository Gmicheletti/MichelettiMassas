let menuState = false

function recolher(){
 
    menuState = !menuState

    if(menuState){
        document.querySelector('#painel-dashboard').classList.remove('barra-lateral');
        document.querySelector('#painel-dashboard').classList.add('recolher');
    } else {
        document.querySelector('#painel-dashboard').classList.add('barra-lateral');
        document.querySelector('#painel-dashboard').classList.remove('recolher');
    }
    
    

   
}