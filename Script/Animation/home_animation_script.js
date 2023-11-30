const list_icona_bussines_space=document.getElementsByClassName('icon_bussines_space')
const list_descrizioneBussiness=document.getElementsByClassName('descrizioneBussiness')

const header_chiSiamo=document.querySelector('#chiSiamo .descrizione_sezione .header_style')
const descrizione_chiSiamo=document.querySelector('#chiSiamo .descrizione_sezione .body_style')
const paroleChiavi_chiSiamo=document.querySelector('#chiSiamo .descrizione_sezione .list_parole_chiavi')
const btn_chiSiamo=document.querySelector('.btn_chisiamo')


const img_chiSiamo=document.querySelector('#chiSiamo .immagine_sezione')
const descrizione_showRoom=document.querySelector('#showroom .descrizione_sezione')
const img_showRoom=document.querySelector('#showroom .immagine_sezione')
const descrizione_prodotti=document.querySelector('#prodotti .descrizione_sezione')
const img_prodotti=document.querySelector('#prodotti .immagine_sezione')

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

    for (i = 0; i < list_icona_bussines_space.length; i++) {
        setAnimation(list_icona_bussines_space[i],
            'move_up_start',
            'move_up_end',
            0.9,
            0)
    }
    for (i = 0; i < list_descrizioneBussiness.length; i++) {
        setAnimation(list_descrizioneBussiness[i],
            'move_up_start',
            'move_up_end',
            0.9,
            0)
    }

    setAnimation(header_chiSiamo,'move_diagona_right_up_start','move_diagona_right_up_end',0.9,0) //Finisce a 1s
    setAnimation(descrizione_chiSiamo,'move_diagona_right_up_start','move_diagona_right_up_end',0.5,300) //Finisce a 1.3s
    setAnimation(paroleChiavi_chiSiamo,'move_diagona_right_up_start','move_diagona_right_up_end',0.5,600) //Finisce a 1.6s
    setAnimation(btn_chiSiamo,'btn_comparse1_start','btn_comparse1_end',0.5,1200) //Finisce a 2.6s
    if(window.innerWidth<600)
        setAnimation(img_chiSiamo,'show_right_start','show_right_end',0.9,100)
    else
        setAnimation(img_chiSiamo,'show_right_start','show_right_end',0.9,2000)

    /*
   for (i = 0; i < list_icona_bussines_space.length; i++) {
       list_icona_bussines_space[i].classList.add('move_up_start');
       list_icona_bussines_space[i].classList.add('dissolvenza_graduale_start');
       observer_moveUp.observe(list_icona_bussines_space[i]);
       observer_dissolvenza.observe(list_icona_bussines_space[i]);
   }
   for (i = 0; i < list_descrizioneBussiness.length; i++) {
       list_descrizioneBussiness[i].classList.add('move_up_start');
       list_descrizioneBussiness[i].classList.add('dissolvenza_graduale_start');
       observer_moveUp.observe(list_descrizioneBussiness[i]);
       observer_dissolvenza.observe(list_descrizioneBussiness[i]);
   }

   //descrizione_chiSiamo.classList.add('move_right_start');
   //observer_moveRight.observe(descrizione_chiSiamo)
   descrizione_chiSiamo.classList.add('move_up_start');
   observer_moveUp.observe(descrizione_chiSiamo)

   img_chiSiamo.classList.add('zoom_start')
   img_chiSiamo.classList.add('dissolvenza_graduale_start')
   observer_zoom.observe(img_chiSiamo)
   observer_dissolvenza.observe(img_chiSiamo);








   descrizione_showRoom.classList.add('entrate_right_animation_start')
   observer_entrataRight.observe(descrizione_showRoom)
   img_showRoom.classList.add('entrate_left_animation_start')
   observer_entrataLeft.observe(img_showRoom)

   descrizione_prodotti.classList.add('comparsa_graduale_start')
   observer_comparsaGraduale.observe(descrizione_prodotti)
   img_prodotti.classList.add('swipe_up_animation_start')

   observer_swipeUp.observe(img_prodotti);
   */

});













