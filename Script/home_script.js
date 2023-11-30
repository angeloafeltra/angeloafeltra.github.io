/* || Constanti e variabili globali */

    const containerImgShowRoom=document.querySelector('#showroom .immagine_sezione')
    const containerDescrizioneShowRoom=document.querySelector('#showroom .descrizione_sezione')
    const copertina=document.querySelector('.copertina')

    let animazioneCopertinaEseguita=false;


/* ... */




/* || Funzioni */

    function setSizeContainerShowRoom(){
        if(window.innerWidth>=600) {
            containerImgShowRoom.style.height = containerDescrizioneShowRoom.offsetHeight + "px";
        }else{
            containerImgShowRoom.style.height = "400px";
        }
    }


    function animationCopertina() {
        let copertina=document.querySelector('.copertina_main_img')

        if(window.scrollY!=0 && copertina.style.display!="none"){
            window.scrollTo(0, 0);

            let scala=parseFloat(copertina.style.scale);
            scala=scala+0.1
            copertina.style.scale=scala.toString()
            if(parseFloat(copertina.style.scale)>6){
                copertina.style.opacity=0;
                document.querySelector('.over-text').style.opacity=1;
            }
            if(parseFloat(copertina.style.scale)>8){
                copertina.style.display="None"
                animazioneCopertinaEseguita=true;
            }
        }
    }

    function setCopertina(){
        let pathCopertina=[
            "Immagini/Copertina/LogoCopertina-Mobile.svg",
            "Immagini/Copertina/LogoCopertina-Tablet.svg",
            "Immagini/Copertina/LogoCopertina-Desktop.svg"
        ]
        let copertina=document.querySelector('.copertina_main_img')
        if(window.innerWidth<600 && !copertina.src.includes(pathCopertina[0])) copertina.src=pathCopertina[0]
        if((window.innerWidth>600 && window.innerWidth<1024) && !copertina.src.includes(pathCopertina[1])) copertina.src=pathCopertina[1]
        if(window.innerWidth>1024 && !copertina.src.includes(pathCopertina[2])) copertina.src=pathCopertina[2]

    }

/* ... */




/* || ActionEvent */

    window.addEventListener('resize',()=>{
        setSizeContainerShowRoom()
    });

    window.addEventListener('load',()=>{
        setSizeContainerShowRoom()
    });

    window.addEventListener('scroll',()=>{
        animationCopertina()
    })


/* ... */












