const circle=document.querySelectorAll('.circle');
circle.forEach(elem=>{
    var dots=elem.getAttribute("data-dots");
    var marked=elem.getAttribute("data-percent");
    var percent=Math.floor(dots*marked/100);
    var points="";
    var rotate=360/dots;

    for(let i=0;i<dots;i++){
        points+=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML=points;

    const pointsMarked=elem.querySelectorAll('.points');
    for(let i=0;i<percent;i++){
        pointsMarked[i].classList.add('marked')
    }
})


let menuli=document.querySelectorAll('header ul li a');
let section=document.querySelectorAll('section');



var navbar=document.querySelector(".navlist");

function openmenu(){
    navbar.style.right = "0";
}

const navLink=document.querySelectorAll('.nav-link')

const linkAction=()=>{
    const navMenu=document.getElementById('navlist')
    navbar.style.right="-400px";
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

function removemenu(){
    navbar.style.right = "-400px";
}