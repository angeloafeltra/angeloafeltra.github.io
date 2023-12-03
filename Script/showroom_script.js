/* || Definizioni Classi */

class ParolaChiave {

    #immagine=null
    #descrizione=null
    #btn_touch=null
    #active=null


    constructor(rif_img,rif_decrizione,rif_touch) {
        this.#immagine=rif_img
        this.#descrizione=rif_decrizione
        this.#btn_touch=rif_touch
        this.#active=false

        this.#immagine.addEventListener('click',this.eventListener.bind(this))
        this.#immagine.addEventListener('mouseover', this.showDescrizione.bind(this))
        this.#immagine.addEventListener('mouseout', this.hiddenDescrizione.bind(this))
    }

    showDescrizione(){
        this.#immagine.style.opacity=0.3;
        this.#descrizione.style.display="block";
        this.#btn_touch.style.opacity=0.3;
        this.#active=true;
    }

    hiddenDescrizione(){
        this.#immagine.style.opacity=1;
        this.#descrizione.style.display="none";
        this.#btn_touch.style.opacity=1;
        this.#active=false;
    }

    isActive(){
        if(this.#active) return true; else return false;
    }

    eventListener(){
        if(!this.isActive()){
            this.showDescrizione()
        }else{
            this.hiddenDescrizione()
        }
    }

}


/* || Constanti e Variabili Globali */

let parolaChiave1=null
let parolaChiave2=null
let parolaChiave3=null

/* ... */




/* || Funzioni */



/* ... */





/* || Action Event */

    window.addEventListener("resize", (event) => {
        //setSizeContainer();
    });

    window.addEventListener("load", (event) => {
        window.scrollTo(0,0)
        //setSizeContainer();
        //addImgMosaico();
        //document.querySelector('.img_mobile').src=list_img[0]
        parolaChiave1=new ParolaChiave(document.getElementsByClassName('img_space')[0],
            document.getElementsByClassName('descrizione')[0],
            document.getElementsByClassName('touch-btn')[0])
        parolaChiave2=new ParolaChiave(document.getElementsByClassName('img_space')[1],
            document.getElementsByClassName('descrizione')[1],
            document.getElementsByClassName('touch-btn')[1])
        parolaChiave3=new ParolaChiave(document.getElementsByClassName('img_space')[2],
            document.getElementsByClassName('descrizione')[2],
            document.getElementsByClassName('touch-btn')[2])
    });




/* ... */




