const hamburger=document.querySelector('.hamburger')
const navlinks=document.querySelector('.nav_links')
const navbar=document.querySelector('.navbar')
const linksNavBar=document.getElementsByClassName('link_navbar')
const mainImg=document.querySelector('#section1')

let startX;
let pagePosition=0;
let hamburgerOn=false;


function showLateralMenu(){
    navbar.style.backgroundColor="rgba(255,255,255,1)";
    navlinks.style.display="block";
    for (i = 0; i < linksNavBar.length; i++) {
        if (linksNavBar[i].style.color != "rgb(240, 179, 87)") {
            linksNavBar[i].style.color = "#000000";
        }
    }
}

function hideLateralMenu(){
    navlinks.style.display="none";
}

function restoreDesktopMenu(){
    if(window.innerWidth>=1024)
        navlinks.style.display="block";
    else
        navlinks.style.display="none";

    hamburgerOn=false;
}



//Effetto comparsa/scoparsa menu in risoluzione mobile
hamburger.addEventListener('click', (e)=>{
    if (!hamburgerOn){
        hamburgerOn=true;
        showLateralMenu();
    }else{
        hamburgerOn=false;
        hideLateralMenu();
    }
})

//Effetto scomparsa menu con swipe in risoluzione mobile
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






function coloreNavBar() {
    if (!hamburgerOn) {
        if (window.scrollY > 35) {
            navbar.style.backgroundColor = "rgba(255,255,255,1)";
            navbar.style.paddingTop="10px";
            for (i = 0; i < linksNavBar.length; i++) {
                if (linksNavBar[i].style.color != "rgb(240, 179, 87)") {
                    linksNavBar[i].style.color = "#000000";
                }
            }
        } else {
            navbar.style.backgroundColor = "rgba(255,255,255,0)";
            navbar.style.paddingTop="30px";
            for (i = 0; i < linksNavBar.length; i++) {
                if (linksNavBar[i].style.color != "rgb(240, 179, 87)") {
                    linksNavBar[i].style.color = "#ffffff";
                }
            }
        }
    }
}











