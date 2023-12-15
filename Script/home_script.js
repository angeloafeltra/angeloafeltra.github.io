
/* || Classi */

    class MainImg {

        #container_immagine_principale_element;
        #overlay_element;
        #subcontainer_immagine_principale_element;
        #startY

        constructor(ref_cont_img_principale, ref_overlay, ref_subcontainer) {
            this.#container_immagine_principale_element=ref_cont_img_principale;
            this.#overlay_element=ref_overlay;
            this.#subcontainer_immagine_principale_element=ref_subcontainer;

            this.#overlay_element.addEventListener('wheel', this.animation_ZoomOut.bind(this));
            this.#container_immagine_principale_element.addEventListener('touchstart',this.logInitialTouch.bind(this));
            this.#container_immagine_principale_element.addEventListener('touchmove',this.animation_ZoomOutMobile.bind(this));
            //this.#container_immagine_principale_element.addEventListener('touchend',());
        }


        animation_ZoomOut(event){
            if(event.deltaY>0) {
                let scala_overlay = event.target.style.scale;
                scala_overlay = parseFloat(scala_overlay);

                if (scala_overlay > 5) {
                    this.#overlay_element.style.display = "none";
                    this.#subcontainer_immagine_principale_element.style.opacity = 1;

                    for (let link of document.querySelectorAll('.container_links .link_navbar')) {
                        if (link.style.color !== "rgb(240, 179, 87)") {
                            link.style.color = "#ffffff";
                        }
                    }

                    setTimeout(this.endAnimationZoomOut, 400, this.#container_immagine_principale_element);
                } else {
                    if (event.deltaY < 20) { //Gestione scroll touch o mouse
                        scala_overlay += 0.2;
                    } else {
                        scala_overlay += 0.6;
                    }
                    this.#overlay_element.style.scale = scala_overlay.toString();
                }
            }

        }

        animation_ZoomOutMobile(event){

            if(this.isSwipeToTop(event)) {
                let scala_overlay = event.target.style.scale;
                scala_overlay = parseFloat(scala_overlay);

                if (scala_overlay > 5) {
                    this.#overlay_element.style.display = "none";
                    this.#subcontainer_immagine_principale_element.style.opacity = 1;

                    for (let link of document.querySelectorAll('.container_links .link_navbar')) {
                        if (link.style.color !== "rgb(240, 179, 87)") {
                            link.style.color = "#ffffff";
                        }
                    }

                    setTimeout(this.endAnimationZoomOut, 400, this.#container_immagine_principale_element);
                } else {
                    if(window.innerWidth<600)
                        scala_overlay+=0.4
                    else
                        scala_overlay+=0.2

                    this.#overlay_element.style.scale = scala_overlay.toString();
                }
            }

        }

        endAnimationZoomOut(container){
            container.style.position="static";
            document.body.style.overflow = 'auto';
            document.querySelector("main").style.display="block"
        }

        logInitialTouch(event){
            this.#startY=event.touches[0].clientY
        }

        isSwipeToTop(event){
            const endY=event.changedTouches[0].clientY;
            return endY < this.#startY;
        }

    }

/* ... */



/* || Constanti e variabili globali */

    const mainImg=new MainImg(
        document.querySelector('.container_immagine_principale'),
        document.querySelector('.container_immagine_principale .overlay'),
        document.querySelector('.container_immagine_principale .subcontainer_immagine_principale')
    )

    const sezione_showRoom_container_img=document.querySelector('.sezione_showRoom .container_immagine')
    const sezione_showRoom_container_desc=document.querySelector('.sezione_showRoom .container_descrizione')
    const sezione_ChiSiamo_img=document.querySelector('.sezione_chiSiamo .container_immagine .subcontainer_immagine img')
    const sezione_Prodotti_img=document.querySelector('.sezione_prodotti .container_immagine .subcontainer_immagine img')

    const list_img_chiSiamo=['Immagini/Home/ImgChiSiamo.jpg','Immagini/Home/ImgChiSiamo2.png','Immagini/Home/ImgChiSiamo3.jpeg'];
    const list_img_prodotti=['Immagini/Home/ImgProdotti.jpg','Immagini/Home/ImgProdotti2.jpeg','Immagini/Home/ImgProdotti3.jpeg']

    let indexChiSiamo=0;
    let indexProdotti=0;

/* ... */




/* || Funzioni */

    function setSizeContainerShowRoom(){
        if(window.innerWidth>=600) {
            sezione_showRoom_container_img.style.height = sezione_showRoom_container_desc.offsetHeight + "px";
        }else{
            sezione_showRoom_container_img.style.height = "400px";
        }
    }

/* ... */




/* || ActionEvent */

    window.addEventListener('scroll',()=>{
        setSizeContainerShowRoom()
    });

    window.addEventListener('resize',()=>{
        setSizeContainerShowRoom()
    });

    window.addEventListener('load',()=>{

        window.scrollTo(0,0);
        setSizeContainerShowRoom()

        document.body.style.overflow = 'hidden';
        document.querySelector('.container_navbar').style.backgroundColor="rgba(255,255,255,0)";
        let links=document.getElementsByClassName('link_navbar');
        for (let link of links) {
            if (link.style.color !== "rgb(240, 179, 87)") {
                link.style.color = "#000000";
            }
        }

        setInterval(()=>{

            if(indexChiSiamo==list_img_chiSiamo.length-1)
                indexChiSiamo=0;
            else
                indexChiSiamo+=1;
            sezione_ChiSiamo_img.src=list_img_chiSiamo[indexChiSiamo];

        },3000,sezione_ChiSiamo_img,list_img_chiSiamo,indexChiSiamo)

        setInterval(()=>{

            if(indexProdotti==list_img_prodotti.length-1)
                indexProdotti=0;
            else
                indexProdotti+=1;
            sezione_Prodotti_img.src=list_img_prodotti[indexProdotti];

        },3000,sezione_Prodotti_img,list_img_prodotti,indexProdotti)
    });

/* ... */












