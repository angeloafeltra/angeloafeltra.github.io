const since=document.querySelector('.sinceText')

const img_laNostraStoria=document.querySelector('.sezione_laNostraStoria .container_immagine')
const header_laNostraStoria=document.querySelector('.sezione_laNostraStoria .container_descrizione .header_descrizione')
const body_laNostraStoria=document.querySelector('.sezione_laNostraStoria .container_descrizione .body_descrizione')
const button_laNostraStoria=document.querySelector('.sezione_laNostraStoria .container_descrizione .btn_type1')

const lista_caratteristiche=document.querySelectorAll('.sezione_perche_scegliere_noi .container_caratteristiche_azienda .container_caratteristica')

const img_ilNostroTeam=document.querySelector('.sezione_ilNostroTeam .container_immagine')
const header_ilNostroTeam=document.querySelector('.sezione_ilNostroTeam .container_descrizione .header_descrizione')
const body_ilNostroTeam=document.querySelector('.sezione_ilNostroTeam .container_descrizione .body_descrizione')
const button_ilNostroTeam=document.querySelector('.sezione_ilNostroTeam .container_descrizione .btn_type1')






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

    setAnimation(since,'move_down_start','move_down_end',0.9,0) //Finisce a 1s
    setAnimation(img_laNostraStoria,'entrate_left_start','entrate_left_end',0.5,0)
    setAnimation(header_laNostraStoria, 'move_diagona_left_up_start', 'move_diagona_left_up_end', 0.5, 0)
    setAnimation(body_laNostraStoria, 'move_diagona_left_up_start', 'move_diagona_left_up_end', 0.5, 300)
    setAnimation(button_laNostraStoria, 'btn_comparse1_start','btn_comparse1_end', 0.5, 600)

    for(let caratteristica of lista_caratteristiche){
        setAnimation(caratteristica,'move_up_start','move_up_end',0.9,0)
    }

    setAnimation(img_ilNostroTeam,'entrate_right_start','entrate_right_end',0.5,0)
    setAnimation(header_ilNostroTeam, 'move_diagona_right_up_start', 'move_diagona_right_up_end', 0.5, 0)
    setAnimation(body_ilNostroTeam, 'move_diagona_right_up_start', 'move_diagona_right_up_end', 0.5, 300)
    setAnimation(button_ilNostroTeam, 'move_diagona_right_up_start', 'move_diagona_right_up_end', 0.5, 600)

});













