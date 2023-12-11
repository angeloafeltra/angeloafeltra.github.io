/* || Classi */

    class Catalogo{

        #container_catalogo_element;
        #listaProdotti;

        constructor(ref_catalogo) {
            this.#container_catalogo_element=ref_catalogo;
            this.#listaProdotti=[];
        }

        addProdotto(nome,img_path,n){
            let prodotto=new ProdottoElement(nome,img_path,n)
            this.#listaProdotti.push(prodotto);
            this.#container_catalogo_element.appendChild(prodotto.getContainerElement())
        }

    }

    class ProdottoElement {

        #container_element;
        #immagine_element;
        #overlay_element;
        #nome_element;
        #href_prodotto;

        constructor(nome, img_path,n) {

            this.#container_element=document.createElement('div');
            this.#container_element.className='container_item';

            this.#immagine_element=document.createElement('div');
            this.#immagine_element.className='container_immagine';
            this.#immagine_element.style.backgroundImage="url("+img_path+")";

            this.#overlay_element=document.createElement('div');
            this.#overlay_element.className='overlay'

            this.#nome_element=document.createElement('h1');
            this.#nome_element.innerHTML=nome;

            this.#container_element.appendChild(this.#immagine_element)
            this.#container_element.appendChild(this.#overlay_element)
            this.#container_element.appendChild(this.#nome_element)

            if (n>1){
                this.#href_prodotto = "prodotti_intermedia.html?categoria="+nome;
            }else{
                this.#href_prodotto = "prodotto.html?prodotto="+nome;
            }


            this.#container_element.addEventListener('click',this.actionShowProduct.bind(this));
        }

        getContainerElement() {return this.#container_element;}
        getImmagineElement() {return this.#immagine_element;}
        getOverlay() {return this.#overlay_element;}
        getNome() {return this.#nome_element;}
        actionShowProduct(){
            window.location.href = this.#href_prodotto;
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
    const catalgo=new Catalogo(document.querySelector('.container_catalogo'))
    const frase=document.querySelector('.frase')

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let categoria
/* ... */




/* || Funzioni */

    function getXMLFile(){

        return new Promise(function (resolve,reject) {
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

    function getProdottiByCategoria(xmlDoc,categoryName){


        let prodottoElements = xmlDoc.getElementsByTagName('prodotto');
        let prodotti=[]
        for(let prodotto of prodottoElements){
            if(prodotto.getElementsByTagName('categoria')[0].textContent===categoryName){
                let nomeProdotto=prodotto.getElementsByTagName('nome')[0].textContent;
                let descrizioneProdotto=prodotto.getElementsByTagName('descrizione')[0].textContent;
                let materialeProdotto=prodotto.getElementsByTagName('materiale')[0].textContent;
                let categoriaProdotto=prodotto.getElementsByTagName('categoria')[0].textContent;
                let immaginiProdotto=[];
                for (let img of prodotto.getElementsByTagName('img'))
                    immaginiProdotto.push(img.textContent)

                prodotti.push(new ProdottoBean(nomeProdotto,descrizioneProdotto,materialeProdotto,categoriaProdotto,immaginiProdotto))
            }
        }
        return prodotti;
    }


/* ... */




/* || EventListener */





window.addEventListener("load", () => {
    window.scrollTo(0,0)

    categoria= urlParams.get('categoria');
    if(categoria===null || categoria===""){
        window.location.href="prodotti.html";
    }
    frase.innerHTML=categoria;

    getXMLFile().then(function(xmlFile){
        for(let prodotto of getProdottiByCategoria(xmlFile,categoria)){
            catalgo.addProdotto(prodotto.getNome(),prodotto.getImmagini()[0],0);
        }
    });
})

/* ... */




