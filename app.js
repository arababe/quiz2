let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Dramatically Different™ Hydrating Jelly Anti-Pollution',
        image: 'c1.png',
        price: 33.00
    },    
    {
        id: 2,
        name: 'Take The Day Off cleansing Oil Power Solution',
        image: 'c2.png',
        price: 41
    },
    {
        id: 3,
        name: 'Even Better Clinical™ Radical Dark Spot Corrector + Interrupter',
        image: 'c3.png',
        price: 70
    },
    {
        id: 4,
        name: '>Clarifying Lotion 2',
        image: 'c4.png',
        price: 40
    },
    {
        id: 5,
        name: 'Exfoliating Scrub',
        image: 'e1.png',
        price: 24
    },
    {
        id: 6,
        name: '7 Day Scrub Cream Rinse-Off',
        image: 'e2.png',
        price: 21
    },
    {
        id: 7,
        name: 'Pep-Start™ Double Purifying Mask',
        image: 'e3.png',
        price: 19
    },
    {
        id: 8,
        name: 'Turnaround Instant Facial',
        image: 'e4.png',
        price: 30
    },
    {
        id: 9,
        name: 'Moisture Surge Overnight Mask',
        image: 'e5.png',
        price: 40
    },
    {
        id: 10,
        name: 'Exfoliating Scrub Instant Hydrating Power',
        image: 'l5.PNG',
        price: 24
    },
    {
        id: 11,
        name: 'Pep-Start™ Pout Restoring Night Mask',
        image: 'l2.PNG',
        price: 21
    },
    {
        id: 12,
        name: 'Moisture Surge™ Eye 96-Hour Hydro-Filler',
        image: 'l3.PNG',
        price: 17
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}