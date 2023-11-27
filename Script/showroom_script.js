const containerMap=document.querySelector('.container_map')
const containerAppuntamento=document.querySelector('.container_appuntamento')
const input_date=document.getElementsByName("giorno");
const input_nome=document.getElementsByName("nome");



function setSizeContainer(){
    if(window.innerWidth>=600) {
        containerMap.style.height = containerAppuntamento.offsetHeight + "px";
    }else{
        containerMap.style.height = "400px";
    }

    //input_date.style.height = input_nome.offsetHeight + "px";
}