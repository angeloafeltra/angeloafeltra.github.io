
/* || Constanti e Variabili Globali */

    const hamburger=document.querySelector('.hamburger')
    const navlinks=document.querySelector('.nav_links')
    const navbar=document.querySelector('.navbar')
    const links=document.getElementsByClassName('link_navbar')

    let startX;
    let hamburgerOn=false;

/* ... */




/* || Funzioni */

    function showLateralMenu(){
        navbar.style.backgroundColor="rgba(255,255,255,1)";
        navlinks.style.display="block";
        for (let i = 0; i < links.length; i++) {
            if (links[i].style.color != "rgb(240, 179, 87)") {
                links[i].style.color = "#000000";
            }
        }
        document.body.style.overflowY = "hidden";
    }

    function hideLateralMenu(){
        navlinks.style.display="none";
        document.body.style.overflowY = "auto";
        dynamicStyleNavBar()
    }

    function dynamicStyleNavBar() {

            if (window.scrollY > 35) { //Non sono al Top della pagina, sfondo navbar bianco
                navbar.style.backgroundColor = "rgba(255,255,255,1)";
                for (let i = 0; i < links.length; i++) {
                    if (links[i].style.color != "rgb(240, 179, 87)") {
                        links[i].style.color = "#000000";
                    }
                }
            } else {
                navbar.style.backgroundColor = "rgba(255,255,255,0)";
                for (let i = 0; i < links.length; i++) {
                    if (links[i].style.color != "rgb(240, 179, 87)") {
                        links[i].style.color = "#ffffff";
                    }
                }
            }

    }


/* ... */




/* || ActionEvent */

    hamburger.addEventListener('click', (e)=>{
        if (!hamburgerOn){
            hamburgerOn=true;
            showLateralMenu();
        }else{
            hamburgerOn=false;
            hideLateralMenu();
        }
    })

    navlinks.addEventListener('touchstart', (e)=>{
        startX=e.touches[0].clientX;
    })

    navlinks.addEventListener('touchend', (e)=>{
        const endX=e.changedTouches[0].clientX;
        const deltaX = endX - startX;
        console.log(deltaX)
        if (deltaX <-20) {
            hideLateralMenu();
        }
    })

    window.addEventListener("scroll", (event) => {
       dynamicStyleNavBar();
    });


    window.addEventListener('resize', ()=>{
        if(window.innerWidth>1024){
            dynamicStyleNavBar();
            document.body.style.overflowY = "auto";
            navlinks.style.display="block";
            hamburgerOn=false;
        }else{
            if(!hamburgerOn){
                hideLateralMenu();
            }
        }

    });



/* ... */



















