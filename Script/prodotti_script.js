const containerMap=document.querySelector('.map_container')
const containerPreventivo=document.querySelector('.form_container')
const container_immagini=document.querySelector('.container_immagini')
var prodotto=""
var descrizione=""
var list_img_prodotto=[]
var index_current_img=0;

function setSizeContainerShowRoom(){
    if(window.innerWidth>=600) {
        containerMap.style.height = containerPreventivo.offsetHeight + "px";
    }else{
        containerMap.style.height = "400px";
    }
}


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
                    'Immagini/Prodotti/Porte/porta1.jpeg',
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
                    'Immagini/Prodotti/Porte/porta5.jpeg',
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
                    'Immagini/Prodotti/Porte/porta1.jpeg',
                    'Immagini/Prodotti/Porte/porta2.jpeg',
                    'Immagini/Prodotti/Porte/porta3.jpeg',
                    'Immagini/Prodotti/Porte/porta4.jpeg',
                    'Immagini/Prodotti/Porte/porta5.jpeg',
                ]
            }
        ]
    }
]


window.onload = function() {

    //Genero la categoria
    var container=document.querySelector('.container_categorie')
    for(var i=0;i<categoriaProdotti.length;i++){
        var div=document.createElement('div')
        div.className='item'
        var div_img=document.createElement('div')
        div.appendChild(div_img)
        var img=document.createElement('img')
        img.src="./Immagini/SVG/item.svg"
        img.alt="item_symbol"
        img.style.width="100%"
        img.style.height="100%"
        var title=document.createElement('h2')
        title.innerHTML=categoriaProdotti[i].main_category
        div_img.appendChild(img);
        div.appendChild(title);
        container.appendChild(div);
        div.addEventListener('click', function(event) {
            showProdotto(event.currentTarget);
        });
    }

    container.childNodes[1].click();
};

function showProdotto(element){

    console.log(element)

    var categoriaElement=element.childNodes[1];
    var categoria=categoriaElement.innerHTML


    for(var i=0;i<categoriaProdotti.length;i++){
        if(categoriaProdotti[i].main_category===categoria){
            prodotto=categoriaProdotti[i].sub_category[0].nome
            descrizione=categoriaProdotti[i].sub_category[0].descrizione
            if(categoriaProdotti[i].sub_category[0].list_img.length!=0)
                list_img_prodotto=categoriaProdotti[i].sub_category[0].list_img
        }
    }

    document.querySelector('.container_descrizione_prodotto h1').innerHTML=prodotto
    document.querySelector('.container_descrizione_prodotto p').innerHTML=descrizione
    document.querySelector('.container_prodotto').style.display='flex'

    if(list_img_prodotto.length!=0){
        document.querySelector('.immagine_prodotto').src= list_img_prodotto[0];
        document.querySelector('.container_immagini').style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+list_img_prodotto[0]+")";
        document.querySelector('.container_immagini').style.display='block';
    }

}

container_immagini.addEventListener('touchstart', (e)=>{
    startXslider=e.touches[0].clientX;
})

container_immagini.addEventListener('touchend', (e)=>{
    const endX=e.changedTouches[0].clientX;
    const deltaX = endX - startXslider;
    if (deltaX <-20) {
        if(index_current_img==list_img_prodotto.length-1)  index_current_img=0; else index_current_img=index_current_img+1;
        document.querySelector('.immagine_prodotto').src=list_img_prodotto[index_current_img];
        document.querySelector('.container_immagini').style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+list_img_prodotto[index_current_img]+")"
    }else{
        if (deltaX >20) {
            if(index_current_img==0)  index_current_img=list_img_prodotto.length-1; else index_current_img=index_current_img-1;
            document.querySelector('.immagine_prodotto').src=list_img_prodotto[index_current_img];
            document.querySelector('.container_immagini').style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+list_img_prodotto[index_current_img]+")"
        }
    }
})