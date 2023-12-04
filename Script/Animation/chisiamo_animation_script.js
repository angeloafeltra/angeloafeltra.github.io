const since=document.querySelector('.sinceText')
const img_section1=document.querySelector('.container_section1 .container_img')
const header_section1=document.querySelector('.container_section1 .container_descrizione h1')
const body_section1=document.querySelector('.container_section1 .container_descrizione p')
const button_section1=document.querySelector('.container_section1 .container_descrizione .btn_section1')
const img2=document.querySelector('.container_img2')
const list_parole_chiavi=document.getElementsByClassName('container_parolaChiave')
const img_section4=document.querySelector('.container_section4 .container_img_team')
const header_section4=document.querySelector('.container_section4 .container_descrizione_team h1')
const body_section4=document.querySelector('.container_section4 .container_descrizione_team p')
const button_section4=document.querySelector('.container_section4 .container_descrizione_team .btn_section4')






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

    setAnimation(since,'move_down_start','move_down_end',0.9,0) //Finisce a 1s
    setAnimation(img_section1,'entrate_left_start','entrate_left_end',0.5,0)
    if(window.innerWidth<600) {
        setAnimation(header_section1, 'move_diagona_left_up_start', 'move_diagona_left_up_end', 0.9, 0)
        setAnimation(body_section1, 'move_diagona_left_up_start', 'move_diagona_left_up_end', 0.5, 500)
        setAnimation(button_section1, 'move_diagona_left_up_start', 'move_diagona_left_up_end', 0.9, 0)
    }else{
        setAnimation(header_section1, 'move_diagona_left_up_start', 'move_diagona_left_up_end', 0.9, 0)
        setAnimation(body_section1, 'move_diagona_left_up_start', 'move_diagona_left_up_end', 0.5, 500)
        setAnimation(button_section1, 'move_diagona_left_up_start', 'move_diagona_left_up_end', 0.9, 1000)
    }
    setAnimation(img2,'dissolvenza_graduale_start','dissolvenza_graduale_end',0.8,0)

    for(let i=0;i<list_parole_chiavi.length;i++){
        setAnimation(list_parole_chiavi[i],'move_up_start','move_up_end',0.8,0)
    }

    setAnimation(img_section4,'entrate_right_start','entrate_right_end',0.5,0)
    if(window.innerWidth<600) {
        setAnimation(header_section4, 'move_diagona_right_up_start', 'move_diagona_right_up_end', 0.9, 0)
        setAnimation(body_section4, 'move_diagona_right_up_start', 'move_diagona_right_up_end', 0.5, 500)
        setAnimation(button_section4, 'move_diagona_right_up_start', 'move_diagona_right_up_end', 0.9, 0)
    }else{
        setAnimation(header_section4, 'move_diagona_right_up_start', 'move_diagona_right_up_end', 0.9, 0)
        setAnimation(body_section4, 'move_diagona_right_up_start', 'move_diagona_right_up_end', 0.5, 500)
        setAnimation(button_section4, 'move_diagona_right_up_start', 'move_diagona_right_up_end', 0.9, 1000)
    }



});













