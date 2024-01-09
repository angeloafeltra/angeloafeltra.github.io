
class Navbar{

    #logo;
    #container_navBar_element;
    #hamburger;

    constructor(rif_logo, rif_container_navBar_element, rif_hamburger) {

        this.#logo=rif_logo;
        this.#container_navBar_element=rif_container_navBar_element;
        this.#hamburger=rif_hamburger;

        this.#hamburger.addEventListener('click',this.hideShowLaterlMenu.bind(this));
    }

    hideShowLaterlMenu(){
        let widthSize=this.#container_navBar_element.offsetWidth
        if (widthSize<100){
            this.#container_navBar_element.style.width='100%';
        }else{
            this.#container_navBar_element.style.width='0%';
        }
    }


}


window.addEventListener('load',()=>{
    let navBar=new Navbar(
        document.querySelector('.navbar .logo'),
        document.querySelector('.navbar .container_navbar_element'),
        document.querySelector('.navbar .hamburger')
    )
});
