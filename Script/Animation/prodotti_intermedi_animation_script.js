
const catalogo=document.querySelector('.container_catalogo')

const container_contattaci=document.querySelector('.sezione_contattaci')
const container_contattaci_header=document.querySelector('.sezione_contattaci .container_descrizione .header_descrizione')
const container_contattaci_body=document.querySelector('.sezione_contattaci .container_descrizione .body_descrizione')
const container_contattaci_btn=document.querySelector('.sezione_contattaci button')


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

    setTimeout(()=>{
        for(let item of catalogo.querySelectorAll('.container_item')){
            console.log("Item")
            setAnimation(item,'move_down_start','move_down_end',0.5,0)
        }
    } ,100);

    setAnimation(container_contattaci,'entrate_left_start','entrate_left_end',0.7,0)
    setAnimation(container_contattaci_header,'move_diagona_right_up_start','move_diagona_right_up_end',0.7,300)
    setAnimation(container_contattaci_body,'move_diagona_right_up_start','move_diagona_right_up_end',0.7,500)
    setAnimation(container_contattaci_btn,'btn_comparse1_start','btn_comparse1_end',0.7,700)

});














