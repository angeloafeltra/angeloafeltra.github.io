/* || Classi */

class CaratteristicheAzienda {

    #list_caratteristiche;
    #isMobile;

    constructor(list_caratteristiche) {
        this.#list_caratteristiche=list_caratteristiche;
        if(window.innerWidth<600) this.#isMobile=true; else this.#isMobile=false;
    }

    enableMobileStyle(){
        if(!this.#isMobile)
            for(let caratteristica of this.#list_caratteristiche)
                caratteristica.hiddenDescrizione()
    }

    disableMobileStyle(){
        if(this.#isMobile)
            for(let caratteristica of this.#list_caratteristiche)
                caratteristica.showDescrizione()
    }


}

class Caratteristica {

    #img_element=null
    #descrizione_element=null

    constructor(ref_img,ref_descrizione) {
        this.#img_element=ref_img;
        this.#descrizione_element=ref_descrizione
        this.#img_element.addEventListener('click',this.actionShowHiddenDescription.bind(this))
    }

    showDescrizione(){
        this.#descrizione_element.style.display="block"
    }

    hiddenDescrizione(){
        this.#descrizione_element.style.display="none"
    }

    actionShowHiddenDescription(){
        if(window.innerWidth<600) {
            let isVisible=window.getComputedStyle(this.#descrizione_element).getPropertyValue('display');
            if (isVisible==='none') {
                this.showDescrizione()
            } else if(isVisible==='block'){
                this.hiddenDescrizione()
            }
        }
    }

}

/* ... */



/* || Constanti e variabili globali */

    let caratteristica1=new Caratteristica(document.querySelectorAll('.sezione_perche_scegliere_noi .container_caratteristiche_azienda .container_caratteristica .container_icona')[0],
        document.querySelectorAll('.sezione_perche_scegliere_noi .container_caratteristiche_azienda .container_caratteristica .container_descrizione')[0])
    let caratteristica2=new Caratteristica(document.querySelectorAll('.sezione_perche_scegliere_noi .container_caratteristiche_azienda .container_caratteristica .container_icona')[1],
        document.querySelectorAll('.sezione_perche_scegliere_noi .container_caratteristiche_azienda .container_caratteristica .container_descrizione')[1])
    let caratteristica3=new Caratteristica(document.querySelectorAll('.sezione_perche_scegliere_noi .container_caratteristiche_azienda .container_caratteristica .container_icona')[2],
        document.querySelectorAll('.sezione_perche_scegliere_noi .container_caratteristiche_azienda .container_caratteristica .container_descrizione')[2])
    let caratteristica4=new Caratteristica(document.querySelectorAll('.sezione_perche_scegliere_noi .container_caratteristiche_azienda .container_caratteristica .container_icona')[3],
        document.querySelectorAll('.sezione_perche_scegliere_noi .container_caratteristiche_azienda .container_caratteristica .container_descrizione')[3])
    let caratteristica5=new Caratteristica(document.querySelectorAll('.sezione_perche_scegliere_noi .container_caratteristiche_azienda .container_caratteristica .container_icona')[4],
        document.querySelectorAll('.sezione_perche_scegliere_noi .container_caratteristiche_azienda .container_caratteristica .container_descrizione')[4])

    let caratteristicheAzienda=new CaratteristicheAzienda([caratteristica1,caratteristica2,caratteristica3,caratteristica4,caratteristica5])

    let container_descrizione_laNostraStoria=document.querySelector('.sezione_laNostraStoria .container_descrizione');
    let container_immagine_laNostraStoria=document.querySelector('.sezione_laNostraStoria .container_immagine');

    let container_descrizione_ilNostroTeam=document.querySelector('.sezione_ilNostroTeam .container_descrizione');
    let container_immagine_ilNostroTeam=document.querySelector('.sezione_ilNostroTeam .container_immagine');

/* ... */




/* || Funzioni */

    function setSizeImg(containerImg,containerDesc){
        if(window.innerWidth>=600) {
            containerImg.style.height = containerDesc.offsetHeight + "px";
        }else{
            containerImg.style.height = "400px";
        }
    }


/* ... */




/* || ActionEvent */

    window.addEventListener('resize',()=>{

        setSizeImg(container_immagine_laNostraStoria,container_descrizione_laNostraStoria)
        setSizeImg(container_immagine_ilNostroTeam,container_descrizione_ilNostroTeam)

        if(window.innerWidth<600){
            console.log("Mobile")
            caratteristicheAzienda.enableMobileStyle()
        }else{
            console.log("Tablet-Desktop")
            caratteristicheAzienda.disableMobileStyle()
        }

    });

    window.addEventListener('load',()=>{
        window.scrollTo(0,0);
        setSizeImg(container_immagine_laNostraStoria,container_descrizione_laNostraStoria)
        setSizeImg(container_immagine_ilNostroTeam,container_descrizione_ilNostroTeam)
    });

    window.addEventListener('scroll',()=>{
        setSizeImg(container_immagine_laNostraStoria,container_descrizione_laNostraStoria)
        setSizeImg(container_immagine_ilNostroTeam,container_descrizione_ilNostroTeam)
    });



/* ... */












