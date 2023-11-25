const containerMap=document.querySelector('.map_container')
const containerPreventivo=document.querySelector('.form_container')

function setSizeContainerShowRoom(){
    if(window.innerWidth>=600) {
        containerMap.style.height = containerPreventivo.offsetHeight + "px";
    }else{
        containerMap.style.height = "400px";
    }
}