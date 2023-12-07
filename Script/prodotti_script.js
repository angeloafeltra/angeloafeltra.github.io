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
                if(this.#immagine.offsetHeight==this.#container.offsetHeight) {
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
    const container_catalogo=document.querySelector('.container_catalogo')
    const xmlFilePath = './Prodotti.xml';

    let parolaChiave1=null
    let parolaChiave2=null
    let parolaChiave3=null
    let categorie=null


/* ... */




/* || Funzioni */

    function getNumberSubCategory(category){
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', xmlFilePath, true);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var parser = new DOMParser();
                    var xmlText = xhr.responseText;
                    var xmlDoc = parser.parseFromString(xmlText, 'text/xml');

                    var categoryElements = xmlDoc.getElementsByTagName('categoria');
                    let count=0
                    for (let i=0;i<categoryElements.length;i++){
                        let value=categoryElements[i].textContent
                        if(value==category){
                            count=count+1
                        }
                    }
                    resolve(count)
                } else {
                    reject('Errore durante il caricamento del file XML:', xhr.statusText);
                }
            };
            xhr.send();
        });
    }


    function getImgCategory(categoryName) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', xmlFilePath, true);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var parser = new DOMParser();
                    var xmlText = xhr.responseText;
                    var xmlDoc = parser.parseFromString(xmlText, 'text/xml');

                    var prodottoElements = xmlDoc.getElementsByTagName('prodotto');
                    let categoria;
                    let list_img;
                    for (let i=0;i<prodottoElements.length;i++){
                        categoria=prodottoElements[i].getElementsByTagName('categoria')[0].textContent
                        if(categoria==categoryName){
                            list_img=prodottoElements[i].getElementsByTagName('immagini')[0]
                            resolve(list_img.getElementsByTagName('img')[0].textContent)
                        }
                    }
                } else {
                    reject('Errore durante il caricamento del file XML:', xhr.statusText);
                }
            };
            xhr.send();
        });
    }

    function getCategory() {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', xmlFilePath, true);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var parser = new DOMParser();
                    var xmlText = xhr.responseText;
                    var xmlDoc = parser.parseFromString(xmlText, 'text/xml');

                    var categoryElements = xmlDoc.getElementsByTagName('categoria');
                    var categories = [];

                    for (var i = 0; i < categoryElements.length; i++) {
                        var category = categoryElements[i].textContent;
                        if (categories.indexOf(category) === -1) {
                            categories.push(category);
                        }
                    }
                    resolve(categories)
                } else {
                    reject('Errore durante il caricamento del file XML:', xhr.statusText);
                }
            };
            xhr.send();
        });
    }

    function createItem(name,img_path){
        let container=document.createElement('div');
        container.className='container_item';

        let container_img=document.createElement('div');
        container.appendChild(container_img)
        container_img.className='container_img_item';
        container_img.style.backgroundImage="url("+img_path+")";

        let overlay=document.createElement('div')
        container.appendChild(overlay)
        overlay.className='overlay'
        let item_name=document.createElement('h1')
        container.appendChild(item_name)
        item_name.innerHTML=name

        container.addEventListener('click',showProduct)
        return container
    }

    function showProduct(event){

        let element=event.currentTarget
        let element_name=element.childNodes[2]
        let categoria=element_name.innerHTML

        getNumberSubCategory(categoria).then(function(n){
            if (n>1){
                window.location.href = "prodotti_intermedia.html?categoria="+categoria;
            }else{
                window.location.href = "prodotto.html?prodotto="+categoria;
            }
        })
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

    getCategory().then(function(categories) {
        for(let i=0;i<categories.length;i++){
            getImgCategory(categories[i]).then(function (img){
                container_catalogo.appendChild(createItem(categories[i],img))
            })
        }
    })



});

/* ... */