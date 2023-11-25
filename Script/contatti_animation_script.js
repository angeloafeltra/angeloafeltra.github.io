const frase=document.querySelector('.frase')
const header_richiedi_preventivo=document.querySelector('.descrizione_sezione h1')
const body_richiedi_preventivo=document.getElementsByClassName('body')
const info=document.querySelector('.info')
const mappa=document.querySelector('.map_container')
const formPreventivo=document.querySelector('form')

function createIntersectionObserver(classToAdd,visibility) {
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(classToAdd);
                observer.unobserve(entry.target);
            }
        });
    };

    return new IntersectionObserver(handleIntersection,{
        threshold: visibility
    });
}

const observer_swipeUp = createIntersectionObserver('swipe_up_animation_end',0.5)
const observer_comparsaGraduale = createIntersectionObserver('comparsa_graduale_end',0.5)
const observer_swipeRight = createIntersectionObserver('swipe_right_animation_end',0.5)
const observer_entrataRight = createIntersectionObserver('entrate_right_animation_end',0.5)
const observer_entrataLeft = createIntersectionObserver('entrate_left_animation_end',0.5)

window.addEventListener('load', function (){
    console.log("Setto le animazioni")

    frase.classList.add('comparsa_graduale_start');
    observer_comparsaGraduale.observe(frase);


    header_richiedi_preventivo.classList.add('comparsa_graduale_start');
    observer_comparsaGraduale.observe(header_richiedi_preventivo);

    for(i=0;i<body_richiedi_preventivo.length;i++){
        body_richiedi_preventivo[i].classList.add('comparsa_graduale_start');
        observer_comparsaGraduale.observe(body_richiedi_preventivo[i]);
    }

    info.classList.add('entrate_right_animation_start');
    observer_entrataRight.observe(info);

    mappa.classList.add('entrate_left_animation_start');
    observer_entrataLeft.observe(mappa);

    formPreventivo.classList.add('comparsa_graduale_start');
    observer_comparsaGraduale.observe(formPreventivo);

});













