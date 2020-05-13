var buttons = document.querySelectorAll('.product__button');
var buttonProductFeature = document.querySelectorAll('.productfeature__button');
var cartButton = document.querySelector('.mainheader__added');
var buttonSendCheckout = document.querySelector('.checkout__button');



var cartList = [];

if (localStorage.getItem('cartList')) {
    cartList = JSON.parse(localStorage.getItem('cartList'));

}

cartButton.innerText = cartList.length;


cartButton.addEventListener('click', renderCart);
//renderCart();

buttons.forEach(function (elem) {
    elem.addEventListener('click', function () {
        var name = elem.getAttribute('data-name');
        var price = elem.getAttribute('data-price');
        var id = elem.getAttribute('data-id');
        var img = elem.getAttribute('data-img');

        cartList.push({
            name: name,
            price: price,
            id: id,
            img: img,
        });
        cartButton.innerText = cartList.length;
        localStorage.setItem('cartList', JSON.stringify(cartList));
    });
});

buttonProductFeature.forEach(function (elem) {
    elem.addEventListener('click', function () {
        var name = elem.getAttribute('data-name');
        var price = elem.getAttribute('data-price');
        var id = elem.getAttribute('data-id');
        var img = elem.getAttribute('data-img');

        cartList.push({
            name: name,
            price: price,
            id: id,
            img: img,
        });
        cartButton.innerText = cartList.length;
        localStorage.setItem('cartList', JSON.stringify(cartList));
    });
});

function renderCart() {
    var cartContainer = document.querySelector('.checkout__container');
    cartList.forEach(function (obj) {
        var newItem = document.createElement('div');
        newItem.innerHTML = `  
    <div class="checkout__product">
        <div class="checkout__info">
            <div class="checkout__imgname">
                <div class="checkout__productimage">
                    <img class="checkout__image" src="`+ obj.img + `" alt="jugo">
                </div>
                <div class="checkout__productname">
                    <p><strong>`+ obj.name + `</strong></p>
                </div>
            </div>
            <div class="checkout__productprice">
                <p><strong>$ `+ obj.price + `</strong></p>
            </div>
        </div>
    </div>
    `;
        cartContainer.appendChild(newItem);
    });
}
renderCart();

buttonSendCheckout.addEventListener('click', function(e){
    var url = 'http://localhost:3000/form';
    location.href = url;
});