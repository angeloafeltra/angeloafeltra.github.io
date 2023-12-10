
/* || Classi */

    class NavBar {

        #container_navBar_element
        #logo_element;
        #hamburger_elemenet;
        #container_links_element;
        #list_links_element;
        #startX;

        constructor(rif_container_navbar, rif_logo, rif_hamburger, rif_container_links, rif_list_links) {
            this.#container_navBar_element=rif_container_navbar;
            this.#logo_element=rif_logo;
            this.#hamburger_elemenet=rif_hamburger;
            this.#container_links_element=rif_container_links;
            this.#list_links_element=rif_list_links;

            this.#hamburger_elemenet.addEventListener('click',this.actionShowHiddenLateralMenu.bind(this));
            this.#container_links_element.addEventListener('touchstart',this.logInitialTouch.bind(this));
            this.#container_links_element.addEventListener('touchend',this.actionHiddenLateralMenuSwipe.bind(this));

        }

        showLateralMenu(){

            this.#container_navBar_element.style.backgroundColor="rgba(255,255,255,1)";
            this.#container_links_element.style.display="block";

            this.setColorLinksBlack()

            document.body.style.overflowY = "hidden"; //Blocco lo scroll della pagina
        }

        hideLateralMenu(){

            this.#container_links_element.style.display="none";
            document.body.style.overflowY = "auto"; //Abilito lo scroll della pagina
            this.setDynamicStyleNavBar()

        }

        setDynamicStyleNavBar(){
            if (window.scrollY > 35) { //Non sono al Top della pagina, sfondo navbar bianco
                this.#container_navBar_element.style.backgroundColor = "rgba(255,255,255,0.9)";
                this.setColorLinksBlack()
            } else {
                this.#container_navBar_element.style.backgroundColor = "rgba(255,255,255,0)";
                this.setColorLinksWhite()
            }
        }

        setColorLinksWhite(){
            let colorText;
            for (let link of this.#list_links_element ) {
                colorText=window.getComputedStyle(link).getPropertyValue('color');
                if (colorText != "rgb(240, 179, 87)") {
                    link.style.color = "#ffffff";
                }
            }
        }

        setColorLinksBlack(){
            let colorText;
            for (let link of this.#list_links_element) {
                colorText=window.getComputedStyle(link).getPropertyValue('color');
                if (colorText != "rgb(240, 179, 87)") {
                    link.style.color = "#000000";
                }
            }
        }

        logInitialTouch(event){
            this.#startX=event.touches[0].clientX
        }

        isSwipeToLeft(event){
            const endX=event.changedTouches[0].clientX;
            const deltaX = endX - this.#startX;
            if (deltaX <-20) return true; else return false;
        }

        restoreDesktopStyle(){
            if(window.innerWidth>1024){
                this.setDynamicStyleNavBar();
                document.body.style.overflowY = "auto";
                this.#container_links_element.style.display="block";
            }else{
                let displayValue=window.getComputedStyle(this.#container_links_element).getPropertyValue('display');
                if(displayValue=="block"){
                    this.hideLateralMenu();
                }
            }
        }

        actionShowHiddenLateralMenu(){
            let displayValue=window.getComputedStyle(this.#container_links_element).getPropertyValue('display');

            if(displayValue=="none"){
                this.showLateralMenu();
            }else if(displayValue=="block"){
                    this.hideLateralMenu();
            }
        }

        actionHiddenLateralMenuSwipe(event){
            if (this.isSwipeToLeft(event)) this.hideLateralMenu();
        }

    }

/* ... */




/* || Constanti e Variabili Globali */

    const navBar=new NavBar(
        document.querySelector('.container_navbar'),
        document.querySelector('.logo_navbar img'),
        document.querySelector('.hamburger'),
        document.querySelector('.container_links'),
        document.querySelectorAll('.container_links .link_navbar')
    );

/* ... */




/* || Funzioni */

/* ... */




/* || ActionEvent */

    window.addEventListener("scroll", (event) => {
       navBar.setDynamicStyleNavBar();
    });

    window.addEventListener('resize', ()=>{
        navBar.restoreDesktopStyle();
    });

/* ... */



















