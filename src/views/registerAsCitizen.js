
import { closeBtn } from "../app.js";
import {
    html
} from "../lib.js";
import { styleAllOptions } from "../until.js";


export function registerMenuView(ctx) {
    ctx.render(registerMenuTemplate());
    const guideList = document.querySelector('.sectionWithSteps')
    guideList.innerHTML = htmll
    let pTags = guideList.querySelectorAll('p');
    pTags.forEach(x => x.style.display = 'none')
    let h3Tag = guideList.querySelectorAll('button')
    .forEach(x => x.addEventListener('click',showMore))

    const backArrow = document.getElementById('info').querySelector('i').addEventListener('click',() => {
        ctx.page.redirect('/mainView')
    })
    styleAllOptions('stepsRows','info')
    

}

function showMore(x){
    let btn = x.currentTarget;
    let section = btn.parentElement;
    let p = section.querySelector('p');
    if(p.style.display ==  'block'){
        p.style.display = 'none';
        btn.textContent = 'More';
    }else{
        p.style.display = 'block';
        btn.textContent = 'Less';

    }
    
}



let htmll = '';
export const setupTemplateforCitizen = (data) => {
    htmll = '';

    data.forEach(element => {
        const guide = element.data();
        const li = `
        <li class="stepsRows">
            <div></div>
            <h3>${guide.title}</h3>
            <p>${guide.description}</p>
            <button class="button stepsRowBtn">Read More</button>
        </li>
        `;
        htmll += li;
    });
   
    
}

const registerMenuTemplate = () => html `
    <section id="registerAsCitizen">

        <nav><img class="logoInNav" src="./images/SurvivalGuide-logo.png">
        <section>
            <h3>Survival</h3>
            <h3>Guide</h3>
        </section>
        </nav>
        
        <section id="info">
            <i class="gg-arrow-left backArrow"></i>
            
            <h5>Register as a citizen</h5>
            <div id="progress-bar"></div>
            <div id="arrow"></div>
            <div id="number">100%</div>
            <ul class="sectionWithSteps">
                
            </ul>
        </section>
    </section>
`


/* 



let registerUl;

let sectionTemplate = (section) => html `
<section>
    <div></div>
    <h2>${section.title}</h2>
    <p>${section.description}</p>
    <button>Read More</button>
</section>
`   
export function setupTemplate(data){
    let html = '';
    data.forEach(element => {
        const section = element.data();
       const li = sectionTemplate(section)
        html += li
    });
    registerUl.innerHTML = html;
}
 */