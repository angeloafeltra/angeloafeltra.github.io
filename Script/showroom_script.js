const containerMap=document.querySelector('.container_map')
const containerAppuntamento=document.querySelector('.container_appuntamento')
const mosaico=document.querySelector('.card-mosaic')
const container_img=document.querySelector('.container_img')
const btn_close=document.querySelector('.close')
const immagine=document.querySelector('#immagine')



function setSizeContainer(){
    if(window.innerWidth>=600) {
        containerMap.style.height = containerAppuntamento.offsetHeight + "px";
    }else{
        containerMap.style.height = "400px";
    }

}

function showImage(event){

    var element=event.target;
    img=element.style.backgroundImage;

    mosaico.style.opacity=0.5;
    container_img.style.display='block';
    immagine.src=img.slice(6, -2);
}

btn_close.addEventListener('click', (event) => {
    mosaico.style.opacity=1;
    container_img.style.display='none';
});