var select= document.querySelector('.store__price');
select.addEventListener('change', function(e){
    console.log(select.value);
    var url = location.pathname;
    url = url + '?price_eq=' + select.value;
    location.href = url;
});

var juice= document.querySelector('.store__juice');
juice.addEventListener('change', function(e){
    console.log(juice.value);
    var url = location.pathname;
    url = url + '?type_eq=' + juice.value;
    location.href = url;
});

var infusion= document.querySelector('.store__infusion');
infusion.addEventListener('change', function(e){
    console.log(infusion.value);
    var url = location.pathname;
    url = url + '?type_eq=' + infusion.value;
    location.href = url;
});

var penaut= document.querySelector('.store__penaut');
penaut.addEventListener('change', function(e){
    console.log(penaut.value);
    var url = location.pathname;
    url = url + '?type_eq=' + penaut.value;
    location.href = url;
});

var bar= document.querySelector('.store__bar');
bar.addEventListener('change', function(e){
    console.log(bar.value);
    var url = location.pathname;
    url = url + '?type_eq=' + bar.value;
    location.href = url;
});


// seleccionamos el elemento select
var sort = document.querySelector('.store__sortcontainer');
// agregamos el listener de cambio
sort.addEventListener('change', function(ev){
  // creamos la variable url partiendo del pathname "/tienda" o la ruta en la que estemos
  var url = location.pathname;
  // le agregamos el filtro ?price_lt y el valor
  url = url + '?sort=' + sort.value;
  // navegamos a la nueva ruta con el filtro
  location.href = url;
});