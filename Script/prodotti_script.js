/* || Classi */

    class ParolaChiave {

        #container=null
        #immagine=null
        #descrizione=null
        #btn_touch=null
        #active=null

        #mobileMode=false


        constructor(rif_container,rif_img,rif_decrizione,rif_touch) {
            this.#container=rif_container
            this.#immagine=rif_img
            this.#descrizione=rif_decrizione
            this.#btn_touch=rif_touch
            this.#active=false

            this.#container.addEventListener('click',this.eventListener.bind(this))
            this.#container.addEventListener('mouseover', this.showDescrizione.bind(this))
            this.#container.addEventListener('mouseout', this.hiddenDescrizione.bind(this))
        }

        setMobileMode(value){
            this.#mobileMode= value
        }

        showDescrizione(){
            if(!this.#mobileMode) {
                if(this.#immagine.offsetHeight==this.#container.offsetHeight) {
                    this.#immagine.style.opacity = 0.3;
                    this.#descrizione.style.display = "flex";
                    this.#btn_touch.style.opacity = 0.3;
                }
            }
        }

        hiddenDescrizione(){
            if(!this.#mobileMode) {
                if(this.#immagine.innerHeight==this.#container.innerHeight) {
                    this.#immagine.style.opacity = 1;
                    this.#descrizione.style.display = "none";
                    this.#btn_touch.style.opacity = 1;
                }
            }
        }

        isActive(){
            if(this.#active) return true; else return false;
        }

        eventListener(){
            if(this.#mobileMode) {
                if (this.isActive() == true) {
                    this.#immagine.style.opacity = 1;
                    this.#descrizione.style.display = "none";
                    this.#btn_touch.style.opacity = 1;
                    this.#active = false;
                } else {
                    this.#immagine.style.opacity = 0.3;
                    this.#descrizione.style.display = "flex";
                    this.#btn_touch.style.opacity = 0.3;
                    this.#active = true;
                }
            }
        }

    }

/* ... */




/* || Variabili e constanti globali */

    const categoriaProdotti=[
        {
            main_category:'Porte',
            category_img:'Immagini/Prodotti/Porte/porta1.jpeg',
        },
        {
            main_category:'Zanzariere',
            category_img: 'Immagini/Prodotti/Porte/porta2.jpeg',
        },
        {
            main_category:'Tapparelle',
            category_img: 'Immagini/Prodotti/Porte/porta3.jpeg',
        },
        {
            main_category:'Cassonetti',
            category_img: 'Immagini/Prodotti/Porte/porta4.jpeg',
        },
        {
            main_category:'Persiane',
            category_img: 'Immagini/Prodotti/Porte/porta5.jpeg',
        },
        {
            main_category:'Finestre',
            category_img: 'Immagini/Prodotti/Porte/porta2.jpeg',
        },
        {
            main_category:'Balaustre',
            category_img: 'Immagini/Prodotti/Porte/porta1.jpeg',
        },
        {
            main_category:'Tende',
            category_img: 'Immagini/Prodotti/Porte/porta4.jpeg',
        },
        {
            main_category:'Scorrevoli',
            category_img: 'Immagini/Prodotti/Porte/porta5.jpeg',
        },
        {
            main_category:'Battenti',
            category_img: 'Immagini/Prodotti/Porte/porta1.jpeg'
        },
        {
            main_category:'Saliscendi',
            category_img: 'Immagini/Prodotti/Porte/porta1.jpeg'
        }
    ]

    const container_catalogo=document.querySelector('.container_catalogo')
    let parolaChiave1=null
    let parolaChiave2=null
    let parolaChiave3=null

/* ... */




/* || Funzioni */

    function createItem(name,img_path){
        let container=document.createElement('div');
        container.className='container_item';

        let container_img=document.createElement('div');
        container.appendChild(container_img)
        container_img.className='container_img_item';
        container_img.style.backgroundImage="url("+img_path+")";
        /*
        container_img.style.backgroundPosition="center center"
        container_img.style.backgroundRepeat="no-repeat";
        container_img.style.backgroundSize='cover';*/

        let overlay=document.createElement('div')
        container.appendChild(overlay)
        overlay.className='overlay'
        let item_name=document.createElement('h1')
        container.appendChild(item_name)
        item_name.innerHTML=name
        return container
    }

/* ... */




/* || EventListener */


window.addEventListener('resize',()=>{
    if(window.innerWidth<1024){
        parolaChiave1.setMobileMode(true)
        parolaChiave2.setMobileMode(true)
        parolaChiave3.setMobileMode(true)
    }else{
        parolaChiave1.setMobileMode(false)
        parolaChiave2.setMobileMode(false)
        parolaChiave3.setMobileMode(false)
    }
});



window.addEventListener("load", (event) => {
    window.scrollTo(0,0)
    parolaChiave1=new ParolaChiave(document.getElementsByClassName('container_parolaChiave')[0],
        document.getElementsByClassName('container_immagine_parolaChiave')[0],
        document.getElementsByClassName('container_descrizione_parolaChiave')[0],
        document.getElementsByClassName('container_touch_icon')[0])

    parolaChiave2=new ParolaChiave(document.getElementsByClassName('container_parolaChiave')[1],
        document.getElementsByClassName('container_immagine_parolaChiave')[1],
        document.getElementsByClassName('container_descrizione_parolaChiave')[1],
        document.getElementsByClassName('container_touch_icon')[1])
    parolaChiave3=new ParolaChiave(document.getElementsByClassName('container_parolaChiave')[2],
        document.getElementsByClassName('container_immagine_parolaChiave')[2],
        document.getElementsByClassName('container_descrizione_parolaChiave')[2],
        document.getElementsByClassName('container_touch_icon')[2])

    if(window.innerWidth<1024){
        parolaChiave1.setMobileMode(true)
        parolaChiave2.setMobileMode(true)
        parolaChiave3.setMobileMode(true)
    }else{
        parolaChiave1.setMobileMode(false)
        parolaChiave2.setMobileMode(false)
        parolaChiave3.setMobileMode(false)
    }

    for(let i=0;i<categoriaProdotti.length;i++){
        container_catalogo.appendChild(createItem(categoriaProdotti[i].main_category,
            categoriaProdotti[i].category_img))
    }

});

/* ... */