const containerImgShowRoom=document.querySelector('#showroom .immagine_sezione')
const containerDescrizioneShowRoom=document.querySelector('#showroom .descrizione_sezione')


function setSizeContainerShowRoom(){
    if(window.innerWidth>=600) {
        console.log(containerDescrizioneShowRoom.offsetHeight);
        containerImgShowRoom.style.height = containerDescrizioneShowRoom.offsetHeight + "px";
        console.log(containerImgShowRoom.offsetHeight)
    }else{
        containerImgShowRoom.style.height = "400px";
    }
}











