
class TechnicalSkill {

    #container_tech_skill;
    #container_list_skill;
    #list_skill=[
        {nome:'C',valore:80},
        {nome:'C++',valore:30},
        {nome:'Java SE',valore:80},
        {nome:'SQL',valore:80},
        {nome:'MySql',valore:80},
        {nome:'Android Dev',valore:50},
        {nome:'Java EE',valore:80},
        {nome:'Spring',valore:30},
        {nome:'JavaScript',valore:80},
        {nome:'Node JS',valore:30},
        {nome:'HTML',valore:80},
        {nome:'CSS',valore:80},
        {nome:'Bootstrap Studio',valore:50},
        {nome:'Python',valore:80},
        {nome:'Genetic Algorithm',valore:50},
        {nome:'Machine Learning',valore:80},
        {nome:'Pandas',valore:80},
        {nome:'Numpy',valore:80},
        {nome:'Scikit-Learn',valore:80},
        {nome:'ML Flow',valore:30},
        {nome:'Deep Learning',valore:50},
        {nome:'TensorFlow',valore:30},
        {nome:'Mongo DB',valore:50},
        {nome:'R',valore:30},
        {nome:'Docker',valore:30},
        {nome:'Kubernetes',valore:30},
        {nome:'Testing',valore:80},
        {nome:'OpenCV',valore:50},
        {nome:'Computer Vision',valore:50},
        {nome:'Arduino',valore:50},
        {nome:'Autocad 2D',valore:80},
        {nome:'Autocad 3D',valore:80},
    ]

    constructor(rif_container_tech_skill, rif_container_listSkill) {

        this.#container_tech_skill=rif_container_tech_skill;
        this.#container_list_skill=rif_container_listSkill

        for (let skill of this.#list_skill){
            this.#container_list_skill.appendChild(this.generateListElement(skill.nome,skill.valore))
        }

    }


    generateListElement(name,value){

        let li=document.createElement('li');
        let p=document.createElement('p')
        p.textContent=name
        li.appendChild(p);
        let div1=document.createElement('div')
        div1.className='bar'
        li.appendChild(div1)
        let div2=document.createElement('div')
        div2.className='colorBar'
        div2.style.width=`${value}%`

        if(value<=30){
            div2.style.backgroundColor='#FF0000'
        }else if(value>30 && value<=50){
            div2.style.backgroundColor='#FF8515'
        }else{
            div2.style.backgroundColor='#44E71B'
        }

        div1.appendChild(div2)

        return li;
    }



}



window.addEventListener('load',()=>{
    let technical_skill=new TechnicalSkill(
        document.querySelector('.container_skill .container_technicalSkill'),
        document.querySelector('.container_skill .container_technicalSkill ul')
    )
})