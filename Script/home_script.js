/* || Constanti e variabili globali */

    const containerImgShowRoom=document.querySelector('#showroom .immagine_sezione')
    const containerDescrizioneShowRoom=document.querySelector('#showroom .descrizione_sezione')
    const copertina=document.querySelector('.copertina_main_img')
    const main_img=document.querySelector('.main_img')


    let animazioneCopertinaEseguita=false;
    let startPositionY=0
/* ... */




/* || Funzioni */

    function setSizeContainerShowRoom(){
        if(window.innerWidth>=600) {
            containerImgShowRoom.style.height = containerDescrizioneShowRoom.offsetHeight + "px";
        }else{
            containerImgShowRoom.style.height = "400px";
        }
    }

    function animationCopertina(event) {

        let copertina=document.querySelector('.copertina_main_img')
        let scala=parseFloat(copertina.style.scale);
        //Gestire scroll touch e mouse
        if(event.deltaY<20)
            scala=scala+0.2 //TouchPad
        else
            scala=scala+0.6//Mouse
        copertina.style.scale=scala.toString()

        if(parseFloat(copertina.style.scale)>5){
            copertina.style.display="None"
            document.querySelector('.over-text').style.opacity=1;
            for (let i = 0; i < links.length; i++) {
                if (links[i].style.color != "rgb(240, 179, 87)") {
                    links[i].style.color = "#ffffff";
                }
            }

            setTimeout(function() {
                document.querySelector('.main_img').style.position="static";
                document.body.style.overflow = 'auto';
                document.querySelector("main").style.display="block"
                animazioneCopertinaEseguita=true;
            }, 400);


        }

    }


/* ... */




/* || ActionEvent */

    window.addEventListener('resize',()=>{
        setSizeContainerShowRoom()
    });

    window.addEventListener('load',()=>{
        window.scrollTo(0,0);
        setSizeContainerShowRoom()

        document.body.style.overflow = 'hidden';

        document.querySelector('.navbar').style.backgroundColor="rgba(255,255,255,0)";
        let links=document.getElementsByClassName('link_navbar');
        for (let i = 0; i < links.length; i++) {
            if (links[i].style.color != "rgb(240, 179, 87)") {
                links[i].style.color = "#000000";
            }
        }
    });

    window.addEventListener('scroll',()=>{
        setSizeContainerShowRoom()
        scrollIn=scrollY;
    });




    copertina.addEventListener('wheel', ()=>{

        if(event.deltaY>0 && !animazioneCopertinaEseguita) {
            animationCopertina(event)
        }

    })

    main_img.addEventListener('touchstart', (e)=>{
        startPositionY=e.touches[0].clientY
    })

    main_img.addEventListener('touchmove', (e)=>{

        let positionY=e.touches[0].clientY
        if(positionY<startPositionY && !animazioneCopertinaEseguita) {
            let copertina=document.querySelector('.copertina_main_img')
            let scala=parseFloat(copertina.style.scale);
            if(window.innerWidth<600)
                scala=scala+0.4
            else
                scala=scala+0.2
            copertina.style.scale=scala.toString()
            if(parseFloat(copertina.style.scale)>5){
                copertina.style.display="None"
                document.querySelector('.over-text').style.opacity=1;
            }
        }

    })

    main_img.addEventListener('touchend', (e)=>{
        console.log("Smetto di toccare lo schermo")
        if(!animazioneCopertinaEseguita){
            let copertina=document.querySelector('.copertina_main_img')
            if(parseFloat(copertina.style.scale)>6){
                console.log("Ripristino tutto il contenuto")
                document.querySelector('.main_img').style.position="static";
                copertina.style.display="None"
                document.querySelector("main").style.display="block"
                document.body.style.overflow = 'auto';
                animazioneCopertinaEseguita=true;
                window.scrollTo(0,0)
            }
        }

    })

/* ... */












