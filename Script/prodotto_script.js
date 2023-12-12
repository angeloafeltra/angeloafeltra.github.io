/* || Classi */

    class Slider{

        #container_immagine;
        #list_immagini;
        #index_current_img;
        #startX;

        constructor(ref_container_img,lista_immagini,start_img) {
            this.#container_immagine=ref_container_img;
            this.#list_immagini=lista_immagini;
            this.#container_immagine.style.backgroundImage="url("+start_img+")";
            this.#index_current_img=this.getIndexCurrentImg();

            this.#container_immagine.addEventListener('touchstart',this.logInitialTouch.bind(this));
            this.#container_immagine.addEventListener('touchend',this.actionSwipeImg.bind(this));
        }

        getIndexCurrentImg(){
            let path_img=this.#container_immagine.style.backgroundImage
            let index=0
            for (let i=0;i<this.#list_immagini.length;i++){
                if(path_img.includes(this.#list_immagini[i]))
                    index=i
            }
            return index;
        }

        immagineSuccessiva(){
            if(this.#index_current_img===this.#list_immagini.length-1) {
                this.#container_immagine.style.backgroundImage="url("+this.#list_immagini[0]+")"
                this.#index_current_img=0
            }else{
                this.#container_immagine.style.backgroundImage="url("+this.#list_immagini[this.#index_current_img+1]+")"
                this.#index_current_img=this.#index_current_img+1;
            }
        }

        immaginePrecedente(){
            if(this.#index_current_img===0) {
                this.#container_immagine.style.backgroundImage="url("+this.#list_immagini[this.#list_immagini.length-1]+")"
                this.#index_current_img=this.#list_immagini.length-1
            }else{
                this.#container_immagine.style.backgroundImage="url("+this.#list_immagini[this.#index_current_img-1]+")"
                this.#index_current_img=this.#index_current_img-1;
            }
        }

        logInitialTouch(event){
            this.#startX=event.touches[0].clientX
        }

        isSwipeToLeft(event){
            const endX=event.changedTouches[0].clientX;
            const deltaX = endX - this.#startX;
            if (deltaX <-20) return true; else return false;
        }

        isSwipeToRight(event){
            const endX=event.changedTouches[0].clientX;
            const deltaX = endX - this.#startX;
            if (deltaX > 20) return true; else return false;
        }

        actionSwipeImg(event){
            if(this.isSwipeToLeft(event))
                this.immagineSuccessiva();
            else if (this.isSwipeToRight(event))
                this.immaginePrecedente();
        }

    }

    class ProdottoBean{

        #nome;
        #descrizione;
        #materiale;
        #categoria;
        #list_img=[];

        constructor(nome, descrizione, materiale, categoria, list_img) {
            this.#nome=nome;
            this.#descrizione=descrizione;
            this.#materiale=materiale;
            this.#categoria=categoria;
            this.#list_img=list_img;
        }

        getNome() {return this.#nome;}
        getDescrizione() {return this.#descrizione;}
        getMateriale() {return this.#materiale;}
        getCategoria() {return this.#categoria;}
        getImmagini() {return this.#list_img;}
    }

/* ... */




/* || Variabili e constanti globali */

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const frase=document.querySelector('.frase')
    const descrizioneProdotto=document.querySelector('.container_descrizione_prodotto .body_descrizione')

    let slider;
    let nome_prodotto;
/* ... */




/* || Funzioni */

    function getXMLFile(){

        return new Promise(function (resolve,reject) {
            console.log("Entra")
            let xhr=new XMLHttpRequest();
            xhr.open('GET','./Prodotti.xml',true);
            xhr.onload=function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    let parser=new DOMParser();
                    let xmlText= xhr.responseText;
                    let xmlDoc=parser.parseFromString(xmlText,'text/xml');
                    resolve(xmlDoc);
                }else{
                    console.log("Errore durante il caricamento del file XML")
                    reject(null);
                }
            }
            xhr.send();
        });
    }

    function getProdottoByName(xmlDoc,nome){

        let prodottoElements = xmlDoc.getElementsByTagName('prodotto');
        for(let prodotto of prodottoElements){
            if(prodotto.getElementsByTagName('nome')[0].textContent===nome){
                let nomeProdotto=prodotto.getElementsByTagName('nome')[0].textContent;
                let descrizioneProdotto=prodotto.getElementsByTagName('descrizione')[0].textContent;
                let materialeProdotto=prodotto.getElementsByTagName('materiale')[0].textContent;
                let categoriaProdotto=prodotto.getElementsByTagName('categoria')[0].textContent;
                let immaginiProdotto=[];
                for (let img of prodotto.getElementsByTagName('img'))
                    immaginiProdotto.push(img.textContent)

                return new ProdottoBean(nomeProdotto,descrizioneProdotto,materialeProdotto,categoriaProdotto,immaginiProdotto)
            }
        }
        return null;
    }

    /*function createItem(path){
        let img=document.createElement('img')
        img.src=path
        img.className='item'
        img.addEventListener('click',(event)=>{
            if(window.innerWidth>600) {
                if (img_full.style.display == "none") {
                    document.body.style.overflow = 'hidden';
                    img_full.style.display = "block"
                    immagine.style.backgroundImage = "url(" + event.target.src + ")"

                } else {
                    document.body.style.overflow = 'none';
                    img_full.style.display = "none"
                }
            }
        })
        return img
    }
    */

/* ... */




/* || EventListener */

window.addEventListener("load", () => {

    window.scrollTo(0,0)

    nome_prodotto= urlParams.get('prodotto');
    if(nome_prodotto==null || nome_prodotto=="") window.location.href="prodotti.html";

    frase.innerHTML=nome_prodotto;

    getXMLFile().then(function(xmlFile) {
        let prodotto=getProdottoByName(xmlFile,nome_prodotto);
        descrizioneProdotto.innerHTML=prodotto.getDescrizione();
        slider=new Slider(document.querySelector('.sezione_immagini .container_immagine_singola'),
            prodotto.getImmagini(),
            prodotto.getImmagini()[0])
    });

})


/* ... */




