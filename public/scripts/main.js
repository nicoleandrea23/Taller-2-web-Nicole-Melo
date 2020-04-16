/* var mainheader_nav = document.querySelector('.mainheader__nav');
var hambtn = document.querySelector('.mainheader__hamburguerbtn');

function handleHamClick(){
    mainheader_nav.classList.toggle('mainheader__nav--mobile');
}

hambtn.addEventListener('click', handleHamClick);
function handleWindowResize (event) {
    if(window.innerWidth > 700){
        mainheader_nav.classList.remove('mainheader__nav--mobile');
    }
}
window.addEventListener('resize', handleWindowResize); */

window.addEventListener('load', function(){
    var imgnaranja = document.querySelector('.mainnutrition__imgvisiblenaranja');
    var colorsection = document.querySelector('.mainnutrition__quantity');
    var textcolor = document.querySelectorAll('.mainnutrition__info');
    var imgkiwi = document.querySelector('.mainnutrition__imgvisiblekiwi');
    var imgmora = document.querySelector('.mainnutrition__imgvisiblemora');
    var btnnaranja = document.querySelector('.selnaranja');
    var btnkiwi = document.querySelector('.selkiwi');
    var btnmora = document.querySelector('.selmora');

    btnnaranja.addEventListener('click', handleclicnaranja);

    function handleclicnaranja(){
        imgnaranja.style.display = 'block';
        imgmora.style.display = 'none';
        imgkiwi.style.display = 'none';
        colorsection.classList.remove('mainnutrition__quantity--mora');
        colorsection.classList.add('mainnutrition__quantity--naranja');
        textcolor.forEach(function(innerElem){
            innerElem.classList.add('mainnutrition__info--naranja');
        });
        //textcolor.classList.add('mainnutrition__info--naranja');
        //textcolor.classList.remove('mainnutrition__info--mora');

    }

    btnkiwi.addEventListener('click', handleclickiwi);

    function handleclickiwi(){
        imgnaranja.style.display = 'none';
        imgmora.style.display = 'none';
        imgkiwi.style.display = 'block';
        colorsection.classList.remove('mainnutrition__quantity--naranja');
        colorsection.classList.remove('mainnutrition__quantity--mora');
        textcolor.forEach(function(innerElem){
            innerElem.classList.remove('mainnutrition__info--mora');
            innerElem.classList.remove('mainnutrition__info--naranja');
        });
        //textcolor.classList.remove('mainnutrition__info--naranja');
        //textcolor.classList.remove('mainnutrition__info--mora');

    }

    btnmora.addEventListener('click', handleclicmora);

    function handleclicmora(){
        imgnaranja.style.display = 'none';
        imgmora.style.display = 'block';
        imgkiwi.style.display = 'none';
        colorsection.classList.remove('mainnutrition__quantity--naranja');
        colorsection.classList.add('mainnutrition__quantity--mora');

        textcolor.forEach(function(innerElem){
            innerElem.classList.add('mainnutrition__info--mora');
        });

        textcolor.forEach(function(innerElem){
            innerElem.classList.remove('mainnutrition__info--naranja');
        });
        
    }
  

    


})
