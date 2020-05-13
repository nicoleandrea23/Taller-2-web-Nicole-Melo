var buttons= document.querySelectorAll('.product__button');
var buttonProductFeature= document.querySelectorAll('.productfeature__button');
var cartButton= document.querySelector('.mainheader__added');


var cartList= [];

if(localStorage.getItem('cartList')){
    cartList= JSON.parse(localStorage.getItem('cartList'));

}

cartButton.innerText =cartList.length;

buttons.forEach(function(elem){
    elem.addEventListener('click', function(){
        var name= elem.getAttribute('data-name');
        var price= elem.getAttribute('data-price');
        var id= elem.getAttribute('data-id');
        var img= elem.getAttribute('data-img');

        cartList.push({
            name: name,
            price: price,
            id: id,
            img: img,
        });
        cartButton.innerText =cartList.length;
        localStorage.setItem('cartList', JSON.stringify(cartList));
});
});

buttonProductFeature.forEach(function(elem){
    elem.addEventListener('click', function(){
        var name= elem.getAttribute('data-name');
        var price= elem.getAttribute('data-price');
        var id= elem.getAttribute('data-id');
        var img= elem.getAttribute('data-img');

        cartList.push({
            name: name,
            price: price,
            id: id,
            img: img,
        });
        cartButton.innerText =cartList.length;
        localStorage.setItem('cartList', JSON.stringify(cartList));
});
});