/* || Constanti e variabili globali */

    const containerImgShowRoom=document.querySelector('#showroom .immagine_sezione')
    const containerDescrizioneShowRoom=document.querySelector('#showroom .descrizione_sezione')
    const copertina=document.querySelector('.copertina')
    const main_img=document.querySelector('.main_img')


    let animazioneCopertinaEseguita=false;
    let startPositionY=0


/* ... */




/* || Funzioni */

    function setSizeContainerShowRoom(){
        console.log("Setto size")
        if(window.innerWidth>=600) {
            containerImgShowRoom.style.height = containerDescrizioneShowRoom.offsetHeight + "px";
        }else{
            containerImgShowRoom.style.height = "400px";
        }
    }

    function animationCopertina() {


        document.querySelector('.navbar').style.backgroundColor="rgba(255,255,255,0)";
        let links=document.getElementsByClassName('link_navbar');
        for (let i = 0; i < links.length; i++) {
            if (links[i].style.color != "rgb(240, 179, 87)") {
                links[i].style.color = "#000000";
            }
        }

        let copertina=document.querySelector('.copertina_main_img')
        let scala=parseFloat(copertina.style.scale);
        scala=scala+0.1
        copertina.style.scale=scala.toString()

        if(parseFloat(copertina.style.scale)>5){
            copertina.style.opacity=0;
            document.querySelector('.over-text').style.opacity=1;
            for (let i = 0; i < links.length; i++) {
                if (links[i].style.color != "rgb(240, 179, 87)") {
                    links[i].style.color = "#ffffff";
                }
            }
            window.scrollTo(0,0);
        }
        if(parseFloat(copertina.style.scale)>7){
            document.querySelector('.main_img').style.position="static";
            copertina.style.display="None"
            document.querySelector("main").style.display="block"
            animazioneCopertinaEseguita=true;
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
        let links=document.getElementsByClassName('link_navbar');
        for (let i = 0; i < links.length; i++) {
            if (links[i].style.color != "rgb(240, 179, 87)") {
                links[i].style.color = "#000000";
            }
        }
    });

    window.addEventListener('scroll',()=>{
        setSizeContainerShowRoom()
    });

    main_img.addEventListener('wheel', (event)=>{
        console.log("Event Wheel")
        if(event.deltaY>0 && !animazioneCopertinaEseguita) {
            console.log("Event Wheel Catturato")
            animationCopertina()
        }

    })

    main_img.addEventListener('touchstart', (e)=>{
        console.log("Tocco lo schermo")
        startPositionY=e.touches[0].clientY
    })

    main_img.addEventListener('touchmove', (e)=>{

        let positionY=e.touches[0].clientY
        if(positionY<startPositionY && !animazioneCopertinaEseguita) {
            console.log("Zoom logo")
            let copertina=document.querySelector('.copertina_main_img')
            let scala=parseFloat(copertina.style.scale);
            scala=scala+0.01
            copertina.style.scale=scala.toString()
            if(parseFloat(copertina.style.scale)>5){
                copertina.style.opacity=0;
                document.querySelector('.over-text').style.opacity=1;
            }
            if(parseFloat(copertina.style.scale)>7){
                copertina.style.display="None"
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
                animazioneCopertinaEseguita=true;
                window.scrollTo(0,0)
                alert("SONO AL TOP")
            }
        }

    })

/* ... */












