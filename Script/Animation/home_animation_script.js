
const list_icona_bussines=document.querySelectorAll('.sezione_bussines_block .bussines_block .container_icona')
const list_descrizioneBussiness=document.querySelectorAll('.sezione_bussines_block .bussines_block .container_descrizione')

const header_chiSiamo=document.querySelector('.sezione_chiSiamo .container_descrizione .header_descrizione')
const descrizione_chiSiamo=document.querySelector('.sezione_chiSiamo .container_descrizione .body_descrizione')
const paroleChiavi_chiSiamo=document.querySelector('.sezione_chiSiamo .container_descrizione .container_paroleChiavi')
const btn_chiSiamo=document.querySelector('.sezione_chiSiamo .container_descrizione .btn_type1')
const img_chiSiamo=document.querySelector('.sezione_chiSiamo .container_immagine')

const descrizione_showRoom=document.querySelector('.sezione_showRoom .container_descrizione')
const img_showRoom=document.querySelector('.sezione_showRoom .container_immagine')

const header_prodotti=document.querySelector('.sezione_prodotti .container_descrizione .header_descrizione')
const descrizione_prodotti=document.querySelector('.sezione_prodotti .container_descrizione .body_descrizione')
const btn_prodotti=document.querySelector('.sezione_prodotti .container_descrizione .btn_type1')
const img_prodotti=document.querySelector('.sezione_prodotti .container_immagine')




function createIntersectionObserver(classToAdd,visibility,delay) {
    const handleIntersection = (entries) => {
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

    for (let icona of list_icona_bussines) {
        setAnimation(icona,
            'move_up_start',
            'move_up_end',
            0.5,
            0)
    }

    for (let descrizione of list_descrizioneBussiness) {
        setAnimation(descrizione,
            'move_up_start',
            'move_up_end',
            0.5,
            0)
    }

    setAnimation(header_chiSiamo,'move_diagona_right_up_start','move_diagona_right_up_end',0.5,0) //Finisce a 0.5s
    setAnimation(descrizione_chiSiamo,'move_diagona_right_up_start','move_diagona_right_up_end',0.5,300) //Finisce a 0.8s
    setAnimation(paroleChiavi_chiSiamo,'move_diagona_right_up_start','move_diagona_right_up_end',0.5,600) //Finisce a 1.1s
    setAnimation(btn_chiSiamo,'btn_comparse1_start','btn_comparse1_end',0.5,900) //Finisce a 1.6s
    setAnimation(img_chiSiamo,'show_right_start','show_right_end',0.5,1200)

    setAnimation(descrizione_showRoom,'entrate_right_start','entrate_right_end',0.5,0)
    setAnimation(img_showRoom,'entrate_left_start','entrate_left_end',0.5,0)

    setAnimation(header_prodotti,'zoom_start','zoom_end',0.9,0) //Finisce a 1s
    setAnimation(descrizione_prodotti,'zoom_start','zoom_end',0.5,300) //Finisce a 1.3s
    setAnimation(btn_prodotti,'btn_comparse1_start','btn_comparse1_end',0.5,500) //Finisce a 2.6s
    setAnimation(img_prodotti,'show_right_start','show_right_end',0.9,100)

});













