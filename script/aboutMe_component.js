
class AboutMe_Component{

    #container_img
    #container
    #container_header
    #descrizione
    #container_social
    #button

    constructor(ref_container_img, ref_container, ref_container_header, ref_descrizione, ref_container_social, ref_button) {
        this.#container_img=ref_container_img;
        this.#container=ref_container;
        this.#container_header=ref_container_header;
        this.#descrizione=ref_descrizione;
        this.#container_social=ref_container_social;
        this.#button=ref_button;
    }

    setSizeContainerImg(){
        let img=this.#container_img.querySelector('img');

        let heigthContainer=this.#container_header.offsetHeight + 10
            + this.#descrizione.offsetHeight + 60;
        let sizeBorderContainerImg=this.#container_img.offsetWidth/2;
        let sizeBorderImg=img.offsetWidth/2;

        console.log('Border Container: ',sizeBorderContainerImg)
        console.log('Border Img: ',sizeBorderImg)

        this.#container_img.style.height=`${heigthContainer}px`;
        this.#container_img.style.borderRadius=`${sizeBorderContainerImg}px ${sizeBorderContainerImg}px 0px ${sizeBorderContainerImg}px`;
        img.style.borderRadius=`${sizeBorderImg}px ${sizeBorderImg}px 0px ${sizeBorderImg}px`;

    }


}

let aboutMe_Component;

window.addEventListener('load',()=>{
    aboutMe_Component=new AboutMe_Component(
        document.querySelector('.container_aboutMe .container_img'),
        document.querySelector('.container_aboutMe .container'),
        document.querySelector('.container_aboutMe .container .container_header'),
        document.querySelector('.container_aboutMe .container .description'),
        document.querySelector('.container_aboutMe .container .container_social'),
        document.querySelector('.container_aboutMe .container button')
    )

    aboutMe_Component.setSizeContainerImg();
});

window.addEventListener('resize',()=>{
    aboutMe_Component.setSizeContainerImg()
})
