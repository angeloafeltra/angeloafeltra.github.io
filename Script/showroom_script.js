/* || Constanti e Variabili Globali */

    const containerMap=document.querySelector('.container_map')
    const containerAppuntamento=document.querySelector('.container_appuntamento')
    const mosaico=document.querySelector('.card-mosaic')
    const container_img=document.querySelector('.container_img')
    const btn_close=document.querySelector('.close')
    const immagine=document.querySelector('#immagine')
    const slider_img=document.querySelector('.container_img_mobile')
    const immagine_mobile=document.querySelector('.container_img_mobile img')

    const list_img=["Immagini/Prodotti/Porte/porta1.jpeg",
            "Immagini/Prodotti/Porte/porta2.jpeg",
            "Immagini/Prodotti/Porte/porta3.jpeg",
            "Immagini/Prodotti/Porte/porta4.jpeg",
            "Immagini/Prodotti/Porte/porta5.jpeg",
            "Immagini/Background/background_2.jpg",
            "Immagini/Background/background_3.jpg"
    ]

    var form = document.querySelector('form')
    let startXslider;
    var index_current_img=0;

/* ... */




/* || Funzioni */

    function setSizeContainer(){
        if(window.innerWidth>=600) {
            containerMap.style.height = containerAppuntamento.offsetHeight + "px";
        }else{
            containerMap.style.height = "400px";
        }

    }

    function showImage(event){

        var element=event.target;
        img=element.style.backgroundImage;

        mosaico.style.opacity=0.5;
        container_img.style.display='block';
        immagine.src=img.slice(6, -2);
    }

    function showAllart(){
        var allert = document.querySelector('.allert_prenotazione')
        allert.style.display = 'block';

        // Nascondi il div dopo 10 secondi
        setTimeout(function() {
            allert.style.display = 'none';
        }, 5000); // 10000 millisecondi = 10 secondi
    }

    function dataSuccessivaOggi(dataInput){
        var dataOdierna=new Date();
        var dataInputObj=new Date(dataInput);
        if (dataInputObj > dataOdierna) {
            return true;
        } else {
            return false;
        }
    }

    function isWeekend(dataInput){
        var dataObj = new Date(dataInput);
        var giornoSettimana = dataObj.getDay();
        return giornoSettimana === 0 ;
    }

    function sendMailAppuntamento(){

        const error=document.querySelector('#errore');

        //Controllo i valori dei campi nome,mail,telefono e testo
        var nome = document.modulo_appuntamento.nome.value;
        var mail= document.modulo_appuntamento.mail.value;
        var telefono= document.modulo_appuntamento.telefono.value;
        var giorno=document.modulo_appuntamento.giorno.value;

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var telefonoformat= /^((\+39)|(0039)|(\(00\+39\)))?([ ]?[3][0-9]{2}[ ]?[-\s\.]?\d{6,7})$/;

        if (nome.length==0 || mail.length==0 || telefono.length==0 || giorno.length==0){
            error.innerHTML="Compilare tutti i campi";
            error.style.display="block";
            return false;
        }

        if(!mail.match(mailformat)){
            error.innerHTML="Inserire una mail valida";
            error.style.display="block";
            return false;
        }

        if(!telefono.match(telefonoformat)){
            error.innerHTML="Inserire un numero di telefono valido";
            error.style.display="block";
            return false;
        }

        if(!dataSuccessivaOggi(giorno)){
            error.innerHTML="Selezionare una data successiva a quella odierna";
            error.style.display="block";
            return false;
        }

        if(isWeekend(giorno)){
            error.innerHTML="Selezionare un giorno che non sia domenica";
            error.style.display="block";
            return false;
        }

        if(!document.getElementById("checkbox").checked){
            error.innerHTML="Acconsentire il trattamento dei dati";
            error.style.display="block";
            return false;
        }

        error.style.display="none";
        document.modulo_appuntamento.nome.value="";
        document.modulo_appuntamento.mail.value="";
        document.modulo_appuntamento.telefono.value="";
        document.modulo_appuntamento.giorno.value="";
        document.getElementById("checkbox").checked=false;
        showAllart();


        body="Nome:" + nome +" - Mail:" + mail + " - Telefono:" + telefono + " - Giorno:" + giorno;
        location.href = "mailto:angelo.afeltra99@gmail.com?Subject=Richiesta Appuntamento "+ nome + "&Body=" + body;
        return true;

    }

    function handleForm(event) { event.preventDefault(); }

/* ... */





/* || Action Event */

    btn_close.addEventListener('click', (event) => {
        mosaico.style.opacity=1;
        container_img.style.display='none';
    });

    form.addEventListener('submit', handleForm);

    slider_img.addEventListener('touchstart', (e)=>{
        startXslider=e.touches[0].clientX;
    })

    slider_img.addEventListener('touchend', (e)=>{
        const endX=e.changedTouches[0].clientX;
        const deltaX = endX - startXslider;
        if (deltaX <-20) {
            if(index_current_img==list_img.length-1)  index_current_img=0; else index_current_img=index_current_img+1;
            immagine_mobile.src=list_img[index_current_img];
            immagine_mobile.style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+list_img[index_current_img]+")"
        }else{
            if (deltaX >20) {
                if(index_current_img==0)  index_current_img=list_img.length-1; else index_current_img=index_current_img-1;
                immagine_mobile.src=list_img[index_current_img];
                immagine_mobile.style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+list_img[index_current_img]+")"
            }
        }
    })

    window.onresize = function() {
        setSizeContainer();
    };

    window.onload = function() {
        setSizeContainer();
    };

/* ... */




