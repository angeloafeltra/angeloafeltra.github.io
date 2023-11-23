const containerImgShowRoom=document.querySelector('#showroom .immagine_sezione')
const containerDescrizioneShowRoom=document.querySelector('#showroom .descrizione_sezione')

function setSizeContainerShowRoom(){
    if(window.innerWidth>=600) {
        containerImgShowRoom.style.height = containerDescrizioneShowRoom.offsetHeight + "px";
    }else{
        containerImgShowRoom.style.height = "400px";
    }
}



//Animazioni










