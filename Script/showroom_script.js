/* || Classi */

class CaratteristicheShowRoom {

    #list_caratteristiche;
    #isMobile;

    constructor(list_caratteristiche) {
        this.#list_caratteristiche=list_caratteristiche;
        this.#isMobile = window.innerWidth < 600;
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

    #container=null
    #immagine=null
    #descrizione=null
    #btn_touch=null

    constructor(rif_container,rif_img,rif_decrizione,rif_touch) {
        this.#container=rif_container
        this.#immagine=rif_img
        this.#descrizione=rif_decrizione
        this.#btn_touch=rif_touch

        this.#container.addEventListener('click',this.actionShowHiddenDescription.bind(this))
        this.#container.addEventListener('mouseover', this.actionShowHiddenDescription.bind(this))
        this.#container.addEventListener('mouseout',  this.actionShowHiddenDescription.bind(this))
    }


    showDescrizione(){

        if(this.#immagine.offsetHeight===this.#container.offsetHeight) {
            this.#immagine.style.opacity = 0.3;
            this.#descrizione.style.display = "flex";
            this.#btn_touch.style.opacity = 0.3;
        }
    }

    hiddenDescrizione(){
        if(this.#immagine.offsetHeight===this.#container.offsetHeight) {
            this.#immagine.style.opacity = 1;
            this.#descrizione.style.display = "none";
            this.#btn_touch.style.opacity = 1;
        }
    }


    actionShowHiddenDescription(event){
        if(window.innerWidth<1024 && event.type==='click') {
            if (window.getComputedStyle(this.#descrizione).display === "flex") {
                this.hiddenDescrizione();
            } else if(window.getComputedStyle(this.#descrizione).display === "none") {
                this.showDescrizione();
            }
        }else if(window.innerWidth>1024){
            if(event.type==='mouseover') {
                this.showDescrizione();
            }else if(event.type==='mouseout'){
                this.hiddenDescrizione();
            }
        }
    }


}

class FormAppuntamento{

    #form_element
    #error
    #nome_input;
    #email_input;
    #telefono_input;
    #data_input;
    #checkbox;
    #btn_invia;

    constructor(rif_form, rif_errore, rif_input_nome, rif_input_mail, rif_input_telefono, rif_input_data, rif_checkbox, rif_btn) {

        this.#form_element=rif_form;
        this.#error=rif_errore;
        this.#nome_input=rif_input_nome;
        this.#email_input=rif_input_mail;
        this.#telefono_input=rif_input_telefono;
        this.#data_input=rif_input_data;
        this.#checkbox=rif_checkbox;
        this.#btn_invia=rif_btn;

        this.#btn_invia.addEventListener('click',this.sendMail.bind(this));
        this.#form_element.addEventListener('submit', (event)=>{
            event.preventDefault();
        });

    }

    sendMail(){

        let nome = this.#nome_input.value;
        let mail= this.#email_input.value;
        let telefono= this.#telefono_input.value;
        let data= this.#data_input.value;



        if(!this.validazioneFormCompilatoInteramente(nome,mail,telefono,data)){
            this.#error.innerHTML="Compilare tutti i campi";
            this.#error.style.display="block";
            return;
        }

        if(!this.validazioneDataSuccessivaCorrente(data)){
            this.#error.innerHTML="Inserire una data valida";
            this.#error.style.display="block";
            return;
        }



        if(!this.validazioneTelefono(telefono)==null){
            this.#error.innerHTML="Inserire un numero di telefono valido";
            this.#error.style.display="block";
            return;
        }

        if(!this.validazioneTrattamentoDati()){
            this.#error.innerHTML="Acconsentire il trattamento dei dati";
            this.#error.style.display="block";
            return;
        }

        this.#error.innerHTML="Verrai contattato per confermare l'appuntamento";
        this.#nome_input.value="";
        this.#email_input.value="";
        this.#telefono_input.value="";
        this.#data_input.value="";
        this.#checkbox.checked=false;

        let bodyMail="Nome:" + nome +" - Mail:" + mail + " - Telefono:" + telefono + " - Data:" + data;
        location.href = "mailto:angelo.afeltra99@gmail.com?Subject=Richiesta Preventivo "+ nome + "&Body=" + bodyMail;
    }

    validazioneFormCompilatoInteramente(nome,mail,telefono,msg){
        return (nome.length!=0 && mail.length!=0 && telefono.length!=0 && msg.length!=0);
    }

    validazioneDataSuccessivaCorrente(data){
        let dataOdierna=new Date();
        let dataInputObj=new Date(data);
        return dataInputObj>dataOdierna;

    }

    validazioneTelefono(telefono){
        let telefonoformat= /^((\+39)|(0039)|(\(00\+39\)))?([ ]?[3][0-9]{2}[ ]?[-\s\.]?\d{6,7})$/;
        return telefono.match(telefonoformat);
    }

    validazioneTrattamentoDati(){
        return this.#checkbox.checked;
    }

}




/* ... */




/* || Variabili e constanti globali */
const caratteristica1=new Caratteristica(document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica')[0],
    document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .container_immagine')[0],
    document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .container_descrizione')[0],
    document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .icona_touch')[0]);

const caratteristica2=new Caratteristica(document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica')[1],
    document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .container_immagine')[1],
    document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .container_descrizione')[1],
    document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .icona_touch')[1]);

const caratteristica3=new Caratteristica(document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica')[2],
    document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .container_immagine')[2],
    document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .container_descrizione')[2],
    document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .icona_touch')[2]);

const caratteristicheShowRoom=new CaratteristicheShowRoom([caratteristica1,caratteristica2,caratteristica3]);

const appuntamento=new FormAppuntamento(document.querySelector('.sezione_richiedi_appuntamento .container_form form'),
    document.querySelector('.sezione_richiedi_appuntamento .container_form form #errore'),
    document.modulo_richiesta_appuntamento.nome,
    document.modulo_richiesta_appuntamento.mail,
    document.modulo_richiesta_appuntamento.telefono,
    document.modulo_richiesta_appuntamento.giorno,
    document.querySelector('.sezione_richiedi_appuntamento .container_form form .container_trattamento_dati input'),
    document.querySelector('.sezione_richiedi_appuntamento .container_form form .submit'))

const containerMappa=document.querySelector('.sezione_richiedi_appuntamento .container_mappa')
const containerForm=document.querySelector('.sezione_richiedi_appuntamento .container_form')

/* ... */




/* || Funzioni */

function setSizeElement(elementToIncrase,elemenToGetSize){
    if(window.innerWidth>=600) {
        elementToIncrase.style.height = elemenToGetSize.offsetHeight + "px";
    }else{
        elementToIncrase.style.height = "400px";
    }
}

/* ... */



/* || EventListener */

window.addEventListener('resize',()=>{
    if(window.innerWidth<1024){
        caratteristicheShowRoom.enableMobileStyle()
    }else{
        caratteristicheShowRoom.disableMobileStyle()
    }
    setSizeElement(containerMappa,containerForm);
});

window.addEventListener("load", (event) => {

    window.scrollTo(0,0)
    setSizeElement(containerMappa,containerForm);


});

window.addEventListener('scroll', ()=>{
    setSizeElement(containerMappa,containerForm);
})


/* ... */