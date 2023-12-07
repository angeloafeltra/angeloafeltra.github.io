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


    setAnimation(catalogo,'dissolvenza_graduale_start','dissolvenza_graduale_end',0.5,0)

    setAnimation(container_contattaci,'entrate_left_start','entrate_left_end',0.7,0)
    setAnimation(container_contattaci_header,'move_diagona_right_up_start','move_diagona_right_up_end',0.7,1000)
    setAnimation(container_contattaci_body,'move_diagona_right_up_start','move_diagona_right_up_end',0.7,1500)
    setAnimation(container_contattaci_btn,'btn_comparse1_start','btn_comparse1_end',0.7,2000)

});















