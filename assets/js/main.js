/*===== EXPANDER MENU  =====*/ 
const showMenu = (toggleId, navbarId, bodyId)=>{
  const toggle = document.getElementById(toggleId),
  navbar = document.getElementById(navbarId),
  bodypadding = document.getElementById(bodyId)

  if(toggle && navbar){
    toggle.addEventListener('click', ()=>{
      navbar.classList.toggle('expander')

      bodypadding.classList.toggle('body-pd')
    })
  }
}
showMenu('nav-toggle','navbar','body-pd')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')
function colorLink(){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))


/*===== COLLAPSE MENU  =====*/ 
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for(i=0;i<linkCollapse.length;i++){
  linkCollapse[i].addEventListener('click', function(){
    const collapseMenu = this.nextElementSibling
    collapseMenu.classList.toggle('showCollapse')

    const rotate = collapseMenu.previousElementSibling
    rotate.classList.toggle('rotate')
  })
}
let project = setInterval(projectdone,20)
let coffee = setInterval(happcoffee , 20);
let bugs = setInterval(happbugs , 20);
let cool = setInterval(happcool , 20);


let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

function projectdone(){
  count1++;
document.querySelector('.number1').innerHTML=count1;
if(count1==80){
  clearInterval(project);
}
}
function happcoffee(){
  count2++;
  document.querySelector('.number2').innerHTML=count2;  
  if(count2==100){
    clearInterval(coffee);
  }
}
function happbugs(){
  count3++;
  document.querySelector('.number3').innerHTML=count3;  
  if(count3==200){
    clearInterval(bugs);
  }
}
function happcool(){
  count4++;
  document.querySelector('.number4').innerHTML=count4;  
  if(count4==150){
    clearInterval(cool);
  }
}
  


