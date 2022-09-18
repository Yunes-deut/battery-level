let porcentage=document.querySelector('.porcentage')
let levelEl=document.querySelector('.porcent')

navigator.getBattery().then(function(bat){
    porcentage.style.width=bat.level*100 +'%';
    levelEl.innerHTML=bat.level*100 + "%";
})
