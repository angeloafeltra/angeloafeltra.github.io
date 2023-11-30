const list_icona_bussines_space=document.getElementsByClassName('icon_bussines_space')
const list_descrizioneBussiness=document.getElementsByClassName('descrizioneBussiness')

const header_chiSiamo=document.querySelector('#chiSiamo .descrizione_sezione .header_style')
const descrizione_chiSiamo=document.querySelector('#chiSiamo .descrizione_sezione .body_style')
const paroleChiavi_chiSiamo=document.querySelector('#chiSiamo .descrizione_sezione .list_parole_chiavi')
const btn_chiSiamo=document.querySelector('.btn_chisiamo')
const img_chiSiamo=document.querySelector('#chiSiamo .immagine_sezione')

const descrizione_showRoom=document.querySelector('#showroom .descrizione_sezione')
const img_showRoom=document.querySelector('#showroom .immagine_sezione')

const header_prodotti=document.querySelector('#prodotti .descrizione_sezione .header_style')
const descrizione_prodotti=document.querySelector('#prodotti .descrizione_sezione .body_style')
const btn_prodotti=document.querySelector('.btn_prodotti')
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

    setAnimation(descrizione_showRoom,'entrate_right_start','entrate_right_end',0.7,0)
    setAnimation(img_showRoom,'entrate_left_start','entrate_left_end',0.7,0)

    setAnimation(header_prodotti,'zoom_start','zoom_end',0.9,0) //Finisce a 1s
    setAnimation(descrizione_prodotti,'zoom_start','zoom_end',0.5,300) //Finisce a 1.3s
    setAnimation(btn_prodotti,'btn_comparse1_start','btn_comparse1_end',0.5,600) //Finisce a 2.6s
    if(window.innerWidth<600)
        setAnimation(img_prodotti,'show_right_start','show_right_end',0.9,100)
    else
        setAnimation(img_prodotti,'show_right_start','show_right_end',0.9,1400)

});













