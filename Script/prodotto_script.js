/* || Classi */


/* ... */




/* || Variabili e constanti globali */

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const xmlFilePath = './Prodotti.xml';
    const frase=document.querySelector('.frase')
    const descrizioneHtml=document.querySelector('.container_descrizione p')
    const container=document.querySelector('.container_immagini')
    const img_full=document.querySelector('.container_img_full')
    const btn_close=document.querySelector('.btn_close')
    const btn_avanti=document.querySelector('.btn_avanti')
    const btn_dietro=document.querySelector('.btn_dietro')
    const immagine=document.querySelector('.img_full')
    const img_mobile=document.querySelector('.container_single_img')

    let nomeProdotto;
    let descrizioneProdotto;
    let materialeProdotto;
    let categoriaProdotto;
    let img_prodotto=[]

/* ... */




/* || Funzioni */

    function getProdotto(prodottoName){
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', xmlFilePath, true);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var parser = new DOMParser();
                    var xmlText = xhr.responseText;
                    var xmlDoc = parser.parseFromString(xmlText, 'text/xml');

                    var prodottoElements = xmlDoc.getElementsByTagName('prodotto');
                    for(let i=0;i<prodottoElements.length;i++){
                        let nome=prodottoElements[i].getElementsByTagName('nome')[0].textContent
                        if(nome==prodottoName){
                            let descrizione=prodottoElements[i].getElementsByTagName('descrizione')[0].textContent
                            let materiale=prodottoElements[i].getElementsByTagName('materiale')[0].textContent
                            let categoria=prodottoElements[i].getElementsByTagName('categoria')[0].textContent
                            let immaginiElements=prodottoElements[i].getElementsByTagName('immagini')[0]
                            let list_img=[]
                            for(let j=0;j<immaginiElements.getElementsByTagName('img').length;j++){
                                list_img.push(immaginiElements.getElementsByTagName('img')[j].textContent)
                            }

                            resolve({
                                nome: nome,
                                descrizione: descrizione,
                                categoria: categoria,
                                materiale: materiale,
                                immagini: list_img
                            })
                        }
                    }

                } else {
                    console.log('Errore durante il caricamento del file XML:', xhr.statusText)
                    reject(null);
                }
            };
            xhr.send();
        });
    }

    function createItem(path){
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

/* ... */




/* || EventListener */

window.addEventListener("resize", (event) => {

    if(window.innerWidth<600){
        img_full.style.display="none";
    }
})

window.addEventListener("load", (event) => {


    window.scrollTo(0,0)

    prodotto_name= urlParams.get('prodotto');
    if(prodotto_name==null || prodotto_name=="") window.location.href="prodotti.html";

    frase.innerHTML=prodotto_name;

    getProdotto(prodotto_name).then(function(product) {
        nomeProdotto=product.nome
        descrizioneProdotto=product.descrizione
        materialeProdotto=product.materiale
        categoriaProdotto=product.categoria
        img_prodotto=product.immagini

        descrizioneHtml.innerHTML=descrizioneProdotto
        for (let i=0;i<img_prodotto.length;i++){
            if(img_prodotto[i]!="")
                container.appendChild(createItem(img_prodotto[i]))
        }

        img_mobile.style.backgroundImage="url("+img_prodotto[0]+")"
    })


})

btn_close.addEventListener('click',()=>{
    if(img_full.style.display=="none") {
        document.body.style.overflow = 'hidden';
        img_full.style.display = "block"
    }else{
        document.body.style.overflow = 'auto';
        img_full.style.display = "none"
    }
})

btn_avanti.addEventListener('click', (e)=>{

    let path_img=immagine.style.backgroundImage
    let index=0
    for (let i=0;i<img_prodotto.length;i++){
        console.log(path_img)
        console.log(img_prodotto[i])
        if(path_img.includes(img_prodotto[i]))
            index=i
    }

    console.log(index)
    let next_img;
    if(index==img_prodotto.length-1) {
        next_img = img_prodotto[0]
    }else{
        next_img=img_prodotto[index+1]
    }

    immagine.style.backgroundImage="url("+next_img+")"
});

btn_dietro.addEventListener('click', (e)=>{

    let path_img=immagine.style.backgroundImage
    let index=0
    for (let i=0;i<img_prodotto.length;i++){
        if(path_img.includes(img_prodotto[i]))
            index=i
    }

    let next_img;
    if(index==0) {
        next_img = img_prodotto[img_prodotto.length-1]
    }else{
        next_img=img_prodotto[index-1]
    }

    immagine.style.backgroundImage="url("+next_img+")"
});


let startXslider;
img_mobile.addEventListener('touchstart', (e)=>{
    startXslider=e.touches[0].clientX;
})

img_mobile.addEventListener('touchend', (e)=>{
    const endX=e.changedTouches[0].clientX;
    const deltaX = endX - startXslider;
    if (deltaX <-20) {
        let path_img=img_mobile.style.backgroundImage
        let index=0
        for (let i=0;i<img_prodotto.length;i++){
            console.log(path_img)
            console.log(img_prodotto[i])
            if(path_img.includes(img_prodotto[i]))
                index=i
        }

        console.log(index)
        let next_img;
        if(index==img_prodotto.length-1) {
            next_img = img_prodotto[0]
        }else{
            next_img=img_prodotto[index+1]
        }

        img_mobile.style.backgroundImage="url("+next_img+")"
    }else{
        if (deltaX >20) {
            let path_img=img_mobile.style.backgroundImage
            let index=0
            for (let i=0;i<img_prodotto.length;i++){
                if(path_img.includes(img_prodotto[i]))
                    index=i
            }

            let next_img;
            if(index==0) {
                next_img = img_prodotto[img_prodotto.length-1]
            }else{
                next_img=img_prodotto[index-1]
            }

            img_mobile.style.backgroundImage="url("+next_img+")"
        }
    }
})

/* ... */




