
const header_richiedi_preventivo=document.querySelector('.sezione_info_preventivo .container_descrizione .header_descrizione')
const list_body_richiedi_preventivo=document.querySelectorAll('.sezione_info_preventivo .container_descrizione .body_descrizione')

const info=document.querySelector('.sezione_info_preventivo .container_info')

const mappa=document.querySelector('.sezione_richiedi_preventivo .container_mappa')
const formPreventivo=document.querySelector('.sezione_richiedi_preventivo .container_form')

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

    setAnimation(header_richiedi_preventivo, 'move_diagona_right_up_start', 'move_diagona_right_up_end', 0.5, 0)
    for(let body of list_body_richiedi_preventivo){
        setAnimation(body, 'move_diagona_right_up_start', 'move_diagona_right_up_end', 0.5, 0)
    }
    setAnimation(info,'entrate_right_start','entrate_right_end',0.5,0)

    setAnimation(formPreventivo,'entrate_right_start','entrate_right_end',0.5,0)
    setAnimation(mappa,'entrate_left_start','entrate_left_end',0.5,0)

});













