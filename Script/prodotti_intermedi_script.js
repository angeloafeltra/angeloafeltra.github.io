/* || Classi */


/* ... */




/* || Variabili e constanti globali */
    const container_catalogo=document.querySelector('.container_catalogo')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const xmlFilePath = './Prodotti.xml';
    const frase=document.querySelector('.frase')

    let categoria
    let prodotto
/* ... */




/* || Funzioni */

    function getProdotti(categoryName){
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', xmlFilePath, true);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var parser = new DOMParser();
                    var xmlText = xhr.responseText;
                    var xmlDoc = parser.parseFromString(xmlText, 'text/xml');

                    var prodottoElements = xmlDoc.getElementsByTagName('prodotto');
                    let subProduct=[]
                    for(let i=0;i<prodottoElements.length;i++){
                        let categoria=prodottoElements[i].getElementsByTagName('categoria')[0].textContent
                        if(categoria==categoryName){
                            let nomeProdotto=prodottoElements[i].getElementsByTagName('nome')[0].textContent
                            let img=prodottoElements[i].getElementsByTagName('immagini')[0].getElementsByTagName('img')[0].textContent
                            subProduct.push({
                                nome:nomeProdotto,
                                img:img
                            })
                        }
                    }

                    resolve(subProduct)

                } else {
                    console.log('Errore durante il caricamento del file XML:', xhr.statusText)
                    reject(null);
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
        window.location.href = "prodotto.html?prodotto="+element_name.textContent;


    }

/* ... */




/* || EventListener */





window.addEventListener("load", (event) => {
    window.scrollTo(0,0)

    categoria= urlParams.get('categoria');
    if(categoria==null | categoria==""){
        window.location.href="prodotti.html";
    }
    frase.innerHTML=categoria;

    getProdotti(categoria).then(function(categories) {
        for(let i=0;i<categories.length;i++){
            container_catalogo.appendChild(createItem(categories[i].nome,categories[i].img))
            }
        })
})

/* ... */




