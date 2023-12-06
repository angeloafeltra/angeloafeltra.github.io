/* || Classi */

class ParolaChiave {

    #img=null
    #descrizione=null
    #active=false;

    constructor(ref_img,ref_descrizione) {
        this.#img=ref_img;
        this.#descrizione=ref_descrizione
        this.eventListener=this.eventListener.bind(this)
        this.#img.addEventListener('click',this.eventListener)
    }

    showDescrizione(){
        this.#descrizione.style.display="block"
        this.#active=true
    }

    hiddenDescrizione(){
        this.#descrizione.style.display="none"
        this.#active=false
    }

    eventListener(){
        if(window.innerWidth<600) {
            if (!this.#active) {
                this.showDescrizione()
            } else {
                this.hiddenDescrizione()
            }
        }
    }

    restoreNoMobileStyle(){
        this.#descrizione.style.display="block"
    }

    restoreMobileStyle(){
        if(this.#active){
            this.#descrizione.style.display="block"
        }else{
            this.#descrizione.style.display="none"
        }
    }

}

/* ... */



/* || Constanti e variabili globali */

    const containerImg_section1=document.querySelector('.container_section1 .container_img')
    const containerDesc_section1=document.querySelector('.container_section1 .container_descrizione')
    const containerImg_section4=document.querySelector('.container_section4 .container_img_team')
    const containerDesc_section4=document.querySelector('.container_section4 .container_descrizione_team')
    const lista_parole_chiavi=document.getElementsByClassName('container_parolaChiave')

    let parolaChiave1=new ParolaChiave(lista_parole_chiavi[0].childNodes[1],lista_parole_chiavi[0].childNodes[3])
    let parolaChiave2=new ParolaChiave(lista_parole_chiavi[1].childNodes[1],lista_parole_chiavi[1].childNodes[3])
    let parolaChiave3=new ParolaChiave(lista_parole_chiavi[2].childNodes[1],lista_parole_chiavi[2].childNodes[3])
    let parolaChiave4=new ParolaChiave(lista_parole_chiavi[3].childNodes[1],lista_parole_chiavi[3].childNodes[3])
    let parolaChiave5=new ParolaChiave(lista_parole_chiavi[4].childNodes[1],lista_parole_chiavi[4].childNodes[3])



/* ... */




/* || Funzioni */

    function setSizeImgSection1(){
        if(window.innerWidth>=600) {
            containerImg_section1.style.height = containerDesc_section1.offsetHeight + "px";
        }else{
            containerImg_section1.style.height = "400px";
        }
    }

    function setSizeImgSection4(){
        if(window.innerWidth>=600) {
            containerImg_section4.style.height = containerDesc_section4.offsetHeight + "px";
        }else{
            containerImg_section4.style.height = "400px";
        }
    }


/* ... */




/* || ActionEvent */

    window.addEventListener('resize',()=>{
        setSizeImgSection1()
        if(window.innerWidth<600){
            console.log("Mobile")
            parolaChiave1.restoreMobileStyle()
            parolaChiave2.restoreMobileStyle()
            parolaChiave3.restoreMobileStyle()
            parolaChiave4.restoreMobileStyle()
            parolaChiave5.restoreMobileStyle()
        }else{
            console.log("Tablet-Desktop")
            parolaChiave1.restoreNoMobileStyle()
            parolaChiave2.restoreNoMobileStyle()
            parolaChiave3.restoreNoMobileStyle()
            parolaChiave4.restoreNoMobileStyle()
            parolaChiave5.restoreNoMobileStyle()
        }
    });

    window.addEventListener('load',()=>{
        window.scrollTo(0,0);
        setSizeImgSection1()
        setSizeImgSection4()
    });



/* ... */












