
const sloganHeader=document.querySelector('.container_intro .container_slogan .header_slogan')
const sloganSubHeader=document.querySelector('.container_intro .container_slogan .subheader_slogan')

const caratteristiche=document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .container_immagine img');
const list_container_caratteristiche=document.querySelector('.container_intro .container_caratteristiche');

const mappa=document.querySelector('.sezione_richiedi_appuntamento .container_mappa')
const formAppuntamento=document.querySelector('.sezione_richiedi_appuntamento .container_form')

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

    let lista_icone=list_container_caratteristiche.querySelectorAll('.icona_touch')
    for(let icona of lista_icone)
        icona.style.opacity=0;

    let lista_container_immagini=list_container_caratteristiche.querySelectorAll('.container_immagine');
    let lista_immagini=list_container_caratteristiche.querySelectorAll('.container_immagine img');
    setInterval(()=>{
        for(let i=0;i<lista_immagini.length;i++){
            if((lista_container_immagini[i].offsetHeight===lista_immagini[i].offsetHeight) && lista_icone[i].style.opacity==0){
                lista_icone[i].style.opacity=1
            }

        }
    },400,lista_icone,lista_immagini,lista_container_immagini);


    setAnimation(sloganHeader,'move_up_start','move_up_end',1,0)
    setAnimation(sloganSubHeader,'move_down_start','move_down_end',1,300)

    let delay=0;
    for(let caratteristica of caratteristiche){
        setAnimation(caratteristica, 'comparsa_verticale_start','comparsa_verticale_end', 0.5, delay);
        if(window.innerWidth>600)
            delay+=400;
    }

    setAnimation(mappa,'entrate_right_start','entrate_right_end',0.5,0)
    setAnimation(formAppuntamento,'entrate_left_start','entrate_left_end',0.5,0)



});














