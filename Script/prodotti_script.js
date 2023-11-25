const containerMap=document.querySelector('.map_container')
const containerPreventivo=document.querySelector('.form_container')

const containerImgProdotto=document.querySelector('.container_main_img')
const mainImg=document.querySelector('#main_img')
const subImg1=document.querySelector('#sub_img1')
const subImg2=document.querySelector('#sub_img2')
const subImg3=document.querySelector('#sub_img3')
const subImg4=document.querySelector('#sub_img4')

function setSizeContainerShowRoom(){
    if(window.innerWidth>=600) {
        containerMap.style.height = containerPreventivo.offsetHeight + "px";
    }else{
        containerMap.style.height = "400px";
    }
}

subImg1.addEventListener('click', (e)=>{
    main_img=mainImg.src;
    sub_img=subImg1.src;
    mainImg.src=sub_img
    subImg1.src=main_img;
    //console.log("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+sub_img+") no-repeat center center;")
    //containerImgProdotto.style.background= "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+sub_Img+") no-repeat center center;";
})

subImg2.addEventListener('click', (e)=>{
    main_img=mainImg.src;
    sub_img=subImg2.src;
    mainImg.src=sub_img
    subImg2.src=main_img;
    //console.log("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+sub_img+") no-repeat center center;")
    //containerImgProdotto.style.background= "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+sub_Img+") no-repeat center center;";
})

subImg3.addEventListener('click', (e)=>{
    main_img=mainImg.src;
    sub_img=subImg3.src;
    mainImg.src=sub_img
    subImg3.src=main_img;
    //console.log("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+sub_img+") no-repeat center center;")
    //containerImgProdotto.style.background= "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+sub_Img+") no-repeat center center;";
})

subImg4.addEventListener('click', (e)=>{
    main_img=mainImg.src;
    sub_img=subImg4.src;
    mainImg.src=sub_img
    subImg4.src=main_img;
    //console.log("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+sub_img+") no-repeat center center;")
    //containerImgProdotto.style.background= "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+sub_Img+") no-repeat center center;";
})