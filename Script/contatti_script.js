/* || Classi */

    class FormPreventivo{

        #form_element
        #error
        #nome_input;
        #email_input;
        #telefono_input;
        #messaggio_input;
        #checkbox;
        #btn_invia;

        constructor(rif_form, rif_errore, rif_input_nome, rif_input_mail, rif_input_telefono, rif_input_messaggio, rif_checkbox, rif_btn) {

            this.#form_element=rif_form;
            this.#error=rif_errore;
            this.#nome_input=rif_input_nome;
            this.#email_input=rif_input_mail;
            this.#telefono_input=rif_input_telefono;
            this.#messaggio_input=rif_input_messaggio;
            this.#checkbox=rif_checkbox;
            this.#btn_invia=rif_btn;

            this.#btn_invia.addEventListener('click',this.sendMail.bind(this));
            this.#form_element.addEventListener('submit', (event)=>{
                event.preventDefault();
            });

        }

        sendMail(){

            console.log("Evento catturato");

            let nome = this.#nome_input.value;
            let mail= this.#email_input.value;
            let telefono= this.#telefono_input.value;
            let msg= this.#messaggio_input.value;

            console.log("Validazione Completamento Form: ",this.validazioneFormCompilatoInteramente(nome,mail,telefono,msg))
            console.log("Validazione Trattamento Dati: ",this.validazioneTrattamentoDati())


            if(!this.validazioneFormCompilatoInteramente(nome,mail,telefono,msg)){
                this.#error.innerHTML="Compilare tutti i campi";
                this.#error.style.display="block";
                return;
            }

            if(this.validazioneMail(mail)==null){
                this.#error.innerHTML="Inserire una mail valida";
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

            this.#error.style.innerHTML="";
            this.#nome_input.value="";
            this.#email_input.value="";
            this.#telefono_input.value="";
            this.#messaggio_input.value="";
            this.#checkbox.checked=false;

            let bodyMail="Nome:" + nome +" - Mail:" + mail + " - Telefono:" + telefono + " - Messaggio:" + msg;
            location.href = "mailto:angelo.afeltra99@gmail.com?Subject=Richiesta Preventivo "+ nome + "&Body=" + bodyMail;
        }

        validazioneFormCompilatoInteramente(nome,mail,telefono,msg){
            return (nome.length!=0 && mail.length!=0 && telefono.length!=0 && msg.length!=0);
        }

        validazioneMail(mail){
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return mail.match(mailformat);
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


/* || Constanti e Variabili Globali */

    const containerMappa=document.querySelector('.sezione_richiedi_preventivo .container_mappa')
    const containerForm=document.querySelector('.sezione_richiedi_preventivo .container_form')
    const btn_chiama=document.querySelector('.sezione_info_preventivo .container_info .container_sede_e_recapiti .btn_chiama p')
    const preventivo=new FormPreventivo(document.querySelector('.sezione_richiedi_preventivo .container_form form'),
        document.querySelector('.sezione_richiedi_preventivo .container_form form #errore'),
        document.modulo_richiesta_preventivo.nome,
        document.modulo_richiesta_preventivo.mail,
        document.modulo_richiesta_preventivo.telefono,
        document.modulo_richiesta_preventivo.messaggio,
        document.querySelector('.sezione_richiedi_preventivo .container_form form .container_trattamento_dati input'),
        document.querySelector('.sezione_richiedi_preventivo .container_form form .submit'))

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

    btn_chiama.addEventListener('click', ()=>{
        if(btn_chiama.innerHTML==="CHIAMA ORA") {
            btn_chiama.innerHTML = "3394487295";
        }else{
            btn_chiama.innerHTML = "CHIAMA ORA";
        }
    })

    window.addEventListener('load', ()=>{
        setSizeElement(containerMappa,containerForm);
    })

    window.addEventListener('resize', ()=>{
        setSizeElement(containerMappa,containerForm);
    })

    window.addEventListener('scroll', ()=>{
        setSizeElement(containerMappa,containerForm);
    })



/* ... */


