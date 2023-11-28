const containerMap=document.querySelector('.container_map')
const containerAppuntamento=document.querySelector('.container_appuntamento')
const mosaico=document.querySelector('.card-mosaic')
const container_img=document.querySelector('.container_img')
const btn_close=document.querySelector('.close')
const immagine=document.querySelector('#immagine')


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

btn_close.addEventListener('click', (event) => {
    mosaico.style.opacity=1;
    container_img.style.display='none';
});


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

var form = document.querySelector('form')
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);