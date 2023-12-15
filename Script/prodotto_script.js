/* || Classi */

    class Slider{

        #container_immagine;
        #img;
        #list_immagini;
        #index_current_img;
        #startX;

        constructor(ref_container_img,ref_img,lista_immagini,start_img) {
            this.#container_immagine=ref_container_img;
            this.#container_immagine.style.display="block";
            this.#img=ref_img;
            this.#list_immagini=lista_immagini;
            this.setImg(start_img);
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
                this.setImg(this.#list_immagini[0])
                this.#index_current_img=0
            }else{
                this.setImg(this.#list_immagini[this.#index_current_img+1])
                this.#index_current_img=this.#index_current_img+1;
            }
        }

        immaginePrecedente(){
            if(this.#index_current_img===0) {
                this.setImg(this.#list_immagini[this.#list_immagini.length-1])
                this.#index_current_img=this.#list_immagini.length-1
            }else{
                this.setImg(this.#list_immagini[this.#index_current_img-1])
                this.#index_current_img=this.#index_current_img-1;
            }
        }

        setImg(imgUrl){
            this.#container_immagine.style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url("+imgUrl+")"
            this.#img.src=imgUrl;
        }

        logInitialTouch(event){
            this.#startX=event.touches[0].clientX
        }

        isSwipeToLeft(event){
            const endX=event.changedTouches[0].clientX;
            const deltaX = endX - this.#startX;
            return deltaX <-20;
        }

        isSwipeToRight(event){
            const endX=event.changedTouches[0].clientX;
            const deltaX = endX - this.#startX;
            return deltaX > 20;
        }

        actionSwipeImg(event){
            if(this.isSwipeToLeft(event))
                this.immagineSuccessiva();
            else if (this.isSwipeToRight(event))
                this.immaginePrecedente();
        }

    }

    class SliderDesktop{

        #container_slider_element;
        #container_immagine;
        #list_immagini;

        #btn_avanti_element;
        #btn_indietro_element;
        #btn_chiudi_element;

        constructor(rif_container_slider, rif_container_immagine, rif_btn_avanti, rif_btn_indietro, rif_btn_chiudi, list_img) {
            this.#container_slider_element=rif_container_slider;
            this.#container_immagine=rif_container_immagine;
            this.#btn_avanti_element=rif_btn_avanti;
            this.#btn_indietro_element=rif_btn_indietro;
            this.#btn_chiudi_element=rif_btn_chiudi;
            this.#list_immagini=list_img;

            this.#btn_avanti_element.addEventListener('click',this.immagineSuccessiva.bind(this));
            this.#btn_indietro_element.addEventListener('click',this.immaginePrecedente.bind(this));
            this.#btn_chiudi_element.addEventListener('click',this.hideSlider.bind(this));
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
            let index_current_img=this.getIndexCurrentImg();
            if(index_current_img===this.#list_immagini.length-1) {
                this.#container_immagine.style.backgroundImage="url("+this.#list_immagini[0]+")"
            }else{
                this.#container_immagine.style.backgroundImage="url("+this.#list_immagini[index_current_img+1]+")"
            }
        }

        immaginePrecedente(){
            let index_current_img=this.getIndexCurrentImg();
            if(index_current_img===0) {
                this.#container_immagine.style.backgroundImage="url("+this.#list_immagini[this.#list_immagini.length-1]+")"
            }else{
                this.#container_immagine.style.backgroundImage="url("+this.#list_immagini[index_current_img-1]+")"
            }
        }

        showSlider(img_path){
            document.body.style.overflowY = "hidden";
            this.#container_slider_element.style.display="block";
            this.#container_immagine.style.backgroundImage="url("+img_path+")";
        }

        hideSlider(){
            document.body.style.overflowY = "auto";
            this.#container_slider_element.style.display="none";
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

    class Mosaico{

        #mosaico_element;
        #list_item;

        constructor(ref_mosaico) {
            this.#mosaico_element=ref_mosaico;
            this.#list_item=[]
        }

        addItem(img_path){
            let item=new ItemMosaico(img_path);
            this.#list_item.push(item);
            this.#mosaico_element.appendChild(item.getImgElement());
        }

    }

    class ItemMosaico{
        #imgElement;

        constructor(img_path) {
            this.#imgElement=document.createElement('img')
            this.#imgElement.src=img_path
            this.#imgElement.className='item'

            this.#imgElement.addEventListener('click',this.showFullScreenImg.bind(this));
        }

        getImgElement() {
            return this.#imgElement;}

        showFullScreenImg(){
            sliderDesktop.showSlider(this.#imgElement.src)
        }
    }

/* ... */




/* || Variabili e constanti globali */

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const frase=document.querySelector('.frase')
    const descrizioneProdotto=document.querySelector('.container_descrizione_prodotto .body_descrizione')

    let slider;
    let sliderDesktop;
    let mosaico;
    let nome_prodotto;
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

/* ... */




/* || EventListener */

window.addEventListener("load", () => {

    window.scrollTo(0,0)

    nome_prodotto= urlParams.get('prodotto');
    if(nome_prodotto===null || nome_prodotto==="") window.location.href="prodotti.html";

    frase.innerHTML=nome_prodotto;

    getXMLFile().then(function(xmlFile) {
        let prodotto=getProdottoByName(xmlFile,nome_prodotto);
        descrizioneProdotto.innerHTML=prodotto.getDescrizione();
        if(prodotto.getImmagini().length >0) {
            console.log("Nome: ", prodotto.getNome(), " Img:", prodotto.getImmagini())
            slider = new Slider(document.querySelector('.sezione_immagini .slider'),
                document.querySelector('.sezione_immagini .slider .immagine'),
                prodotto.getImmagini(),
                prodotto.getImmagini()[0])
            mosaico = new Mosaico(document.querySelector('.sezione_immagini .mosaico_immagini'));
            for (let immagine of prodotto.getImmagini()) {
                mosaico.addItem(immagine)
            }
            sliderDesktop = new SliderDesktop(document.querySelector('.container_slider_fullscreen'),
                document.querySelector('.container_slider_fullscreen .container_immagine'),
                document.querySelector('.container_slider_fullscreen .btn_avanti'),
                document.querySelector('.container_slider_fullscreen .btn_dietro'),
                document.querySelector('.container_slider_fullscreen .btn_close'),
                prodotto.getImmagini()
            );
        }
    });

})


/* ... */




