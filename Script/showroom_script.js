const containerMap=document.querySelector('.container_map')
const containerAppuntamento=document.querySelector('.container_appuntamento')

let check_click=false;

function setSizeContainerShowRoom(){
    if(window.innerWidth>=600) {
        containerMap.style.height = containerAppuntamento.offsetHeight + "px";
    }else{
        containerMap.style.height = "400px";
    }
}