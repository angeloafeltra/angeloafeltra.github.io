/* || Classi */

    class CaratteristicheProdotti {

        #list_caratteristiche;
        #isMobile;

        constructor(list_caratteristiche) {
            this.#list_caratteristiche=list_caratteristiche;
            this.#isMobile = window.innerWidth < 600;
        }

        enableMobileStyle(){
            if(!this.#isMobile)
                for(let caratteristica of this.#list_caratteristiche)
                    caratteristica.hiddenDescrizione()
        }

        disableMobileStyle(){
            if(this.#isMobile)
                for(let caratteristica of this.#list_caratteristiche)
                    caratteristica.showDescrizione()
        }


    }

    class Caratteristica {

        #container=null
        #immagine=null
        #descrizione=null
        #btn_touch=null

        constructor(rif_container,rif_img,rif_decrizione,rif_touch) {
            this.#container=rif_container
            this.#immagine=rif_img
            this.#descrizione=rif_decrizione
            this.#btn_touch=rif_touch

            this.#container.addEventListener('click',this.actionShowHiddenDescription.bind(this))
            this.#container.addEventListener('mouseover', this.showDescrizione.bind(this))
            this.#container.addEventListener('mouseout', this.hiddenDescrizione.bind(this))
        }


        showDescrizione(){
            if(this.#immagine.offsetHeight===this.#container.offsetHeight) {
                this.#immagine.style.opacity = 0.3;
                this.#descrizione.style.display = "flex";
                this.#btn_touch.style.opacity = 0.3;
            }
        }

        hiddenDescrizione(){
            if(this.#immagine.offsetHeight===this.#container.offsetHeight) {
                this.#immagine.style.opacity = 1;
                this.#descrizione.style.display = "none";
                this.#btn_touch.style.opacity = 1;
            }
        }


        actionShowHiddenDescription(){
            if(window.innerWidth<1024) {
                if (this.#descrizione.style.display === "flex") {
                    this.hiddenDescrizione();
                } else if(this.#descrizione.style.display === "none") {
                    this.showDescrizione()
                }
            }
        }

    }

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

    class CategoriaBean {
        #nome;
        #immagine_categoria;

        constructor(nome, immagine) {
            this.#nome=nome;
            this.#immagine_categoria=immagine;
        }

        getNome() { return this.#nome; }
        getImmagine() { return this.#immagine_categoria;}

    }

/* ... */




/* || Variabili e constanti globali */
    const caratteristica1=new Caratteristica(document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica')[0],
        document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .container_immagine')[0],
        document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .container_descrizione')[0],
        document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .icona_touch')[0]);

    const caratteristica2=new Caratteristica(document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica')[1],
        document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .container_immagine')[1],
        document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .container_descrizione')[1],
        document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .icona_touch')[1]);

    const caratteristica3=new Caratteristica(document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica')[2],
        document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .container_immagine')[2],
        document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .container_descrizione')[2],
        document.querySelectorAll('.container_intro .container_caratteristiche .container_caratteristica .icona_touch')[2]);

    const caratteristicheProdotti=new CaratteristicheProdotti([caratteristica1,caratteristica2,caratteristica3]);

    const catalgo=new Catalogo(document.querySelector('.container_catalogo'))


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

    function getCategorie(xmlDoc){
        let categoryElements=xmlDoc.getElementsByTagName('categoria');
        let list_categorie=[];
        let tmp=[];
        for (let categoria of categoryElements){
            if(tmp.indexOf(categoria.textContent)===-1){
                tmp.push(categoria.textContent);
                let padre=categoria.parentNode;
                let immagini_elements=padre.getElementsByTagName('img');
                list_categorie.push(new CategoriaBean(categoria.textContent, immagini_elements[0].textContent))
            }
        }
        return list_categorie;
    }

    function getNumProdottiByCategory(xmlDoc,categoria){

        let categoryElements = xmlDoc.getElementsByTagName('categoria');
        let count=0
        for (let category of categoryElements){
            if(category.textContent===categoria){
                count=count+1
            }
        }
        return count
    }



/* ... */



/* || EventListener */

window.addEventListener('resize',()=>{
    if(window.innerWidth<1024){
        caratteristicheProdotti.enableMobileStyle()
    }else{
        caratteristicheProdotti.disableMobileStyle()
    }
});

window.addEventListener("load", (event) => {

    window.scrollTo(0,0)
    getXMLFile().then(function(xmlFile){
        for(let categoria of getCategorie(xmlFile)){
            let num_sottocategorie=getNumProdottiByCategory(xmlFile,categoria.getNome())
            catalgo.addProdotto(categoria.getNome(),categoria.getImmagine(),num_sottocategorie)
        }
    });

});


/* ... */