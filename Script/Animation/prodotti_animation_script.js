
const sloganHeader=document.querySelector('.container_slogan h1')
const sloganSubHeader=document.querySelector('.container_slogan p')

const parola_Chiave1=document.getElementsByClassName('container_immagine_parolaChiave')[0]
const btn_touch1=document.getElementsByClassName('container_touch_icon')[0]
const parola_Chiave2=document.getElementsByClassName('container_immagine_parolaChiave')[1]
const btn_touch2=document.getElementsByClassName('container_touch_icon')[1]
const parola_Chiave3=document.getElementsByClassName('container_immagine_parolaChiave')[2]
const btn_touch3=document.getElementsByClassName('container_touch_icon')[2]


const sostenibilita= document.querySelector('.sezione_sostenibilità')
const prodotti_header=document.querySelector('.container_descrizione_prodotto h1')
const prodotti_body=document.querySelector('.container_descrizione_prodotto p')
const prodotti_img=document.querySelector('.container_tavola_elementi')
const catalogo=document.querySelector('.container_catalogo')
const container_contattaci=document.querySelector('.container_contattaci')
const container_contattaci_header=document.querySelector('.container_descrizione_contattaci h1')
const container_contattaci_body=document.querySelector('.container_descrizione_contattaci p')
const container_contattaci_btn=document.querySelector('.container_contattaci button')





function createIntersectionObserver(classToAdd,visibility,delay) {
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.classList.add(classToAdd);
                }, delay)
            }
        });
    };

    return new IntersectionObserver(handleIntersection,{
        threshold: visibility
    });
}

function setAnimation(element,animation_start,animation_end,visibility,delay){
    element.classList.add(animation_start)
    let observer=createIntersectionObserver(animation_end,visibility, delay)
    observer.observe(element)
}


window.addEventListener('load', function (){

    btn_touch1.style.opacity=0
    btn_touch2.style.opacity=0
    btn_touch3.style.opacity=0

    setAnimation(sloganHeader,'move_up_start','move_up_end',1,0)
    setAnimation(sloganSubHeader,'move_down_start','move_down_end',1,500)

    setAnimation(parola_Chiave1, 'comparsa_verticale_start', 'comparsa_verticale_end', 1, 500)
    setAnimation(parola_Chiave2, 'comparsa_verticale_start', 'comparsa_verticale_end', 1, 1300)
    setAnimation(parola_Chiave3, 'comparsa_verticale_start', 'comparsa_verticale_end', 1, 1900)


    setAnimation(sostenibilita,'dissolvenza_graduale_start','dissolvenza_graduale_end',0.8,0)

    setAnimation(prodotti_header,'move_diagona_right_up_start','move_diagona_right_up_end',0.8,0)
    setAnimation(prodotti_body,'move_diagona_right_up_start','move_diagona_right_up_end',0.5,0)
    setAnimation(prodotti_img,'show_right_start','show_right_end',0.5,1000)

    setAnimation(catalogo,'dissolvenza_graduale_start','dissolvenza_graduale_end',0.5,0)

    setAnimation(container_contattaci,'entrate_left_start','entrate_left_end',0.7,0)
    setAnimation(container_contattaci_header,'move_diagona_right_up_start','move_diagona_right_up_end',0.7,1000)
    setAnimation(container_contattaci_body,'move_diagona_right_up_start','move_diagona_right_up_end',0.7,1500)
    setAnimation(container_contattaci_btn,'btn_comparse1_start','btn_comparse1_end',0.7,2000)

});

window.addEventListener('scroll', function (){

    if(window.innerWidth<1024){
        if(parola_Chiave1.offsetHeight==parola_Chiave1.parentNode.offsetHeight)
            btn_touch1.style.opacity=1
        if(parola_Chiave2.offsetHeight==parola_Chiave2.parentNode.offsetHeight)
            btn_touch2.style.opacity=1
        if(parola_Chiave3.offsetHeight==parola_Chiave3.parentNode.offsetHeight)
            btn_touch3.style.opacity=1
    }

});













