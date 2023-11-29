/* || Constanti e Variabili Globali */

    const containerMap=document.querySelector('.map_container')
    const containerPreventivo=document.querySelector('.form_container')
    const container_immagini=document.querySelector('.container_immagini')
    const container_descrizione_prodotto=document.querySelector('.container_descrizione_prodotto')
    //Inserire qui nuovi prodotti, nuove immagini e modificare prodotti e immagini gia esistenti
    const categoriaProdotti=[
        {
            main_category:'Porte',
            sub_category: [
                {
                    nome: 'Porte Interne',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                },
                {
                    nome: 'Porte Blindate',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                }
            ]
        },
        {
            main_category:'Zanzariere',
            sub_category: [
                {
                    nome: 'Zanzariere Bettio',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                }
            ]
        },
        {
            main_category:'Tapparelle',
            sub_category: [
                {
                    nome: 'Tapparelle',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                }
            ]
        },
        {
            main_category:'Cassonetti',
            sub_category: [
                {
                    nome: 'Cassonetti',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                }
            ]
        },
        {
            main_category:'Persiane',
            sub_category: [
                {
                    nome: 'Persiane',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                }
            ]
        },
        {
            main_category:'Finestre',
            sub_category: [
                {
                    nome: 'Taglio-termico',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                },
                {
                    nome: 'Alluminio-Legno',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                    ]
                },
                {
                    nome: 'Legno Alluminio',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                },
                {
                    nome: 'PVC',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                },
                {
                    nome: 'Porta-Finestre',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                }
            ]
        },
        {
            main_category:'Balaustre',
            sub_category: [
                {
                    nome: 'Vetro/Acciaio',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                }
            ]
        },
        {
            main_category:'Tende',
            sub_category: [
                {
                    nome: 'Da Sole',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                },
                {
                    nome: 'Oscuranti',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                }
            ]
        },
        {
            main_category:'Scorrevoli',
            sub_category: [
                {
                    nome: 'Alluminio',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                },
                {
                    nome: 'Legno-Alluminio',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                }
            ]
        },
        {
            main_category:'Battenti',
            sub_category: [
                {
                    nome: 'Alluminio',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                },
                {
                    nome: 'Legno-Alluminio',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                },
                {
                    nome: 'PVC',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                        'Immagini/Prodotti/Porte/porta1.jpeg',
                        'Immagini/Prodotti/Porte/porta2.jpeg',
                        'Immagini/Prodotti/Porte/porta3.jpeg',
                        'Immagini/Prodotti/Porte/porta4.jpeg',
                        'Immagini/Prodotti/Porte/porta5.jpeg',
                    ]
                }
            ]
        },
        {
            main_category:'Saliscendi',
            sub_category: [
                {
                    nome: 'Saliscendi',
                    descrizione: 'Porta interna moderna a battente in legno massiccio con finitura laccata ' +
                        'Il design elegante si adatta perfettamente a ambienti contemporanei, aggiungendo un tocco di stile senza compromettere la funzionalità ' +
                        'Dotata di maniglie in acciaio inossidabile di alta qualità, questa porta è facile da installare e offre una solida costruzione che garantisce durata nel tempo. ' +
                        'Le dimensioni standard la rendono adatta a una varietà di spazi, mentre il colore neutro si abbina facilmente a qualsiasi arredamento.',
                    list_img: [
                    ]
                }
            ]
        }
    ]

    let list_sub_category=[]
    let index_sub_category=0
    let index_current_img=0;



/* ... */




/* || Funzioni */

    function setSizeContainer(){
        if(window.innerWidth>=600) {
            containerMap.style.height = containerPreventivo.offsetHeight + "px";
        }else{
            containerMap.style.height = "400px";
        }
    }

    function setSubCategory(element) {
        let categoria = element.childNodes[1].innerHTML

        for (var i = 0; i < categoriaProdotti.length; i++) {
            if (categoriaProdotti[i].main_category === categoria) {
                list_sub_category = categoriaProdotti[i].sub_category
                index_sub_category = 0
            }
        }
    }

    function generateItemCatalogo(categoriaProdotto){
        let item_catalogo=document.createElement('div')
        item_catalogo.className='item'

        let icon_container=document.createElement('div')
        let icon=document.createElement('img')
        icon.src="./Immagini/SVG/item.svg"
        icon.alt="item_symbol"
        icon.style.width="100%"
        icon.style.height="100%"
        icon_container.appendChild(icon);

        let categoria=document.createElement('h2')
        categoria.innerHTML=categoriaProdotto

        item_catalogo.appendChild(icon_container)
        item_catalogo.appendChild(categoria);

        item_catalogo.addEventListener('click', function(event) { //Assegno un eventListener all'item
            setSubCategory(event.currentTarget)
            showProdotto(0);
        });

        return item_catalogo;
    }

    //Funzione per la gestione del catalogo dinamicamente
    function generateDynamicCatalogue(){
        let catalogo=document.querySelector('.container_categorie')
        for(var i=0;i<categoriaProdotti.length;i++){
            item_catalogo=generateItemCatalogo(categoriaProdotti[i].main_category) //Genero l'item
            catalogo.appendChild(item_catalogo); //Aggiungo l'item al catalgo
        }

        if(catalogo.childNodes.length>0)
            catalogo.childNodes[1].click(); //Simulo il click sul primo item del catalogo
    }

    //Funzione che mostra il primo sotto-prodotto del prodotto scelto
    function showProdotto(index) {

        let prodotto = list_sub_category[index].nome
        let descrizione = list_sub_category[index].descrizione
        let list_img_prodotto = list_sub_category[index].list_img
        index_current_img=0;

        document.querySelector('.container_descrizione_prodotto h1').innerHTML = prodotto
        document.querySelector('.container_descrizione_prodotto p').innerHTML = descrizione

        while (document.querySelector('.circle_container_prodotti').firstChild) {
            document.querySelector('.circle_container_prodotti').removeChild(document.querySelector('.circle_container_prodotti').firstChild);
        }

        if (list_sub_category.length > 1) {

            for (let i = 0; i < list_sub_category.length; i++) {
                let circle = document.createElement('div')
                circle.className = 'circle'
                if (i == index) circle.style.backgroundColor = '#D9D9D9';
                document.querySelector('.circle_container_prodotti').appendChild(circle)
            }
        }


        if(list_img_prodotto.length!=0){
            document.querySelector('.immagine_prodotto').src= list_img_prodotto[0];
            document.querySelector('.container_immagini').style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+list_img_prodotto[0]+")";

            while (document.querySelector('.circle_container_img').firstChild) {
                document.querySelector('.circle_container_img').removeChild(document.querySelector('.circle_container_img').firstChild);
            }
            for (let i=0;i<list_img_prodotto.length;i++){
                let circle=document.createElement('div')
                circle.className='circle'
                if(i==0) circle.style.backgroundColor='#D9D9D9';
                document.querySelector('.circle_container_img').appendChild(circle)
            }

            document.querySelector('.container_immagini').style.display='block';
        }else{
            document.querySelector('.container_immagini').style.display='none';
        }

        document.querySelector('.container_prodotto').style.display='flex';

    }

    function changeImg(index){
        document.querySelector('.immagine_prodotto').src=list_sub_category[index_sub_category].list_img[index]
        document.querySelector('.container_immagini').style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+list_sub_category[index_sub_category].list_img[index]+")"
        document.querySelector('.circle_container_img').childNodes[index].style.backgroundColor="#D9D9D9"
    }

/* ... */



/* || ActionEvent */

    window.onload = function() {
        generateDynamicCatalogue();
        setSizeContainer();
    };

    container_immagini.addEventListener('touchstart', (e)=>{
        startXslider=e.touches[0].clientX;
    })

    container_immagini.addEventListener('touchend', (e)=>{
        const endX=e.changedTouches[0].clientX;
        const deltaX = endX - startXslider;
        if (deltaX <-20) {
            document.querySelector('.circle_container_img').childNodes[index_current_img].style.backgroundColor="white"
            if(index_current_img==list_sub_category[index_sub_category].list_img.length-1)  index_current_img=0; else index_current_img=index_current_img+1;
            changeImg(index_current_img)
        }else{
            if (deltaX >20) {
                document.querySelector('.circle_container_img').childNodes[index_current_img].style.backgroundColor="white"
                if(index_current_img==0)  index_current_img=list_sub_category[index_sub_category].list_img.length-1; else index_current_img=index_current_img-1;
                changeImg(index_current_img)
            }
        }
    })

    container_descrizione_prodotto.addEventListener('touchstart', (e)=>{
        startXslider=e.touches[0].clientX;
    })

    container_descrizione_prodotto.addEventListener('touchend', (e)=>{
        const endX=e.changedTouches[0].clientX;
        const deltaX = endX - startXslider;
        if (deltaX <-20) {
            if(list_sub_category.length>1) {
                document.querySelector('.circle_container_prodotti').childNodes[index_sub_category].style.backgroundColor = "white"
            }
            if(index_sub_category==list_sub_category.length-1)  index_sub_category=0; else index_sub_category=index_sub_category+1;
            showProdotto(index_sub_category)
        }else{
            if (deltaX >20) {
                if(list_sub_category.length>1) {
                    document.querySelector('.circle_container_prodotti').childNodes[index_sub_category].style.backgroundColor = "white"
                }
                if(index_sub_category==0)  index_sub_category=list_sub_category.length-1; else index_sub_category=index_sub_category-1;
                showProdotto(index_sub_category)
            }
        }
    })

/* ... */













