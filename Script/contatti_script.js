const containerMap=document.querySelector('.map_container')
const containerPreventivo=document.querySelector('.form_container')
const btn_chiama=document.querySelector('#chiama')

let check_click=false;

function setSizeContainer(){
    if(window.innerWidth>=600) {
        containerMap.style.height = containerPreventivo.offsetHeight + "px";
    }else{
        containerMap.style.height = "400px";
    }


}

btn_chiama.addEventListener('click', (e)=>{
    if(!check_click) {
        document.querySelector('.btn_chiama p').innerHTML = "3394487295";
        check_click = true;
    }else{
        document.querySelector('.btn_chiama p').innerHTML = "CHIAMA ORA";
        check_click = false;
    }
})

function sendMailPreventivo(){
    const error=document.querySelector('#errore');
    //Controllo i valori dei campi nome,mail,telefono e testo
    var nome = document.modulo.nome.value;
    var mail= document.modulo.mail.value;
    var telefono= document.modulo.telefono.value;
    var msg=document.modulo.messaggio.value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var telefonoformat= /^((\+39)|(0039)|(\(00\+39\)))?([ ]?[3][0-9]{2}[ ]?[-\s\.]?\d{6,7})$/;

    if (nome.length==0 || mail.length==0 || telefono.length==0 || msg.length==0){
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

    if(!document.getElementById("checkbox").checked){
        error.innerHTML="Acconsentire il trattamento dei dati";
        error.style.display="block";
        return false;
    }

    error.style.display="none";
    document.modulo.nome.value="";
    document.modulo.mail.value="";
    document.modulo.telefono.value="";
    document.modulo.messaggio.value="";
    document.getElementById("checkbox").checked=false;



    body="Nome:" + nome +" - Mail:" + mail + " - Telefono:" + telefono + " - Messaggio:" + msg;
    location.href = "mailto:angelo.afeltra99@gmail.com?Subject=Richiesta Preventivo "+ nome + "&Body=" + body;
    return true;

}

var form = document.querySelector('form')
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);