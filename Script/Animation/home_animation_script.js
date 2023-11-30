const list_icona_bussines_space=document.getElementsByClassName('icon_bussines_space')
const list_descrizioneBussiness=document.getElementsByClassName('descrizioneBussiness')
const over_txt=document.querySelector('.over-text')
const descrizione_chiSiamo=document.querySelector('#chiSiamo .descrizione_sezione')
const img_chiSiamo=document.querySelector('#chiSiamo .immagine_sezione')
const descrizione_showRoom=document.querySelector('#showroom .descrizione_sezione')
const img_showRoom=document.querySelector('#showroom .immagine_sezione')
const descrizione_prodotti=document.querySelector('#prodotti .descrizione_sezione')
const img_prodotti=document.querySelector('#prodotti .immagine_sezione')

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

    over_txt.classList.add('comparsa_graduale_start');
    observer_comparsaGraduale.observe(over_txt)

    for (i = 0; i < list_icona_bussines_space.length; i++) {
        list_icona_bussines_space[i].classList.add('swipe_up_animation_start');
        observer_swipeUp.observe(list_icona_bussines_space[i]);
    }
    for (i = 0; i < list_descrizioneBussiness.length; i++) {
        list_descrizioneBussiness[i].classList.add('swipe_up_animation_start');
        observer_swipeUp.observe(list_descrizioneBussiness[i]);
    }

    descrizione_chiSiamo.classList.add('comparsa_graduale_start');
    observer_comparsaGraduale.observe(descrizione_chiSiamo)

    img_chiSiamo.classList.add('swipe_right_animation_start')
    observer_swipeRight.observe(img_chiSiamo)

    descrizione_showRoom.classList.add('entrate_right_animation_start')
    observer_entrataRight.observe(descrizione_showRoom)
    img_showRoom.classList.add('entrate_left_animation_start')
    observer_entrataLeft.observe(img_showRoom)

    descrizione_prodotti.classList.add('comparsa_graduale_start')
    observer_comparsaGraduale.observe(descrizione_prodotti)
    img_prodotti.classList.add('swipe_up_animation_start')

    observer_swipeUp.observe(img_prodotti);

});













