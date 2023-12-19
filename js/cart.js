/*-----------------------------------------------------------*/

var Microphones = [
    {
        type: "Microphones",
        name: "СОЮЗ 017 TUBE",
        price: 359990,
        weight: 250,   //вес
        microType: "Коденсаторный",
        db: 120,   //Соотношение сигнал/шум, дБ
        om: 270   //Сопротивление Ом
    },

    {
        type: "Microphones",
        name: "Neumann U 87 AI Silver",
        price: 395000 ,
        weight: 390,
        microType: "Коденсаторный",
        db: 110,
        om: 290
    },

    {
        type: "Microphones",
        name: "Antelope Audio Edge Solo",
        price: 40670,
        weight: 200,
        microType: "Коденсаторный",
        db: 75,
        om: 220
    },

    {
        type: "Microphones",
        name: "JBL PBM100 Black",
        price: 4990,
        weight: 150,
        microType: "Динамический",
        db: 45,
        om: 100
    },

    {
        type: "Microphones",
        name: "Shure 55SH Series II",
        price: 22900,
        weight: 180,
        microType: "Динамический",
        db: 78,
        om: 150
    },

    {
        type: "Microphones",
        name: "Shure Beta 58A",
        price: 18900 ,
        weight: 200,
        microType: "Динамический",
        db: 60,
        om: 130
    }
];

var Earpodes = [
    {
        type: 'Earpodes',
        name: "Noble Audio FoKus Mystique Blue Black",
        price: 31990,
        time: 7,      //время работы
        earType: "Беспроводные",
        bluetooth: 5.0,   //Версия блютуз
        kGs: 20       //Максимальная воспроизводимая частота, кГц
    },

    {
        type: 'Earpodes',
        name: "Marshall Minor III Black",
        price: 13290,
        time: 6,
        earType: "Беспроводные",
        bluetooth: 4.8,
        kGs: 12          
    },

    {
        type: 'Earpodes',
        name: "Beyerdynamic DT 990 PRO / 250 ohm",
        price: 22990,
        time: 6,
        earType: "Беспроводные",
        bluetooth: 5.0,
        kGs: 19
    },

    {
        type: 'Earpodes',
        name: "Beyerdynamic DT 770 PRO 250 ohm",
        price: 23900,
        time: 7,
        earType: "Беспроводные",
        bluetooth: 5.2,
        kGs: 22
    },

    {
        type: 'Earpodes',
        name: "Marshall Major IV Black",
        price: 19,
        time: 9,
        earType: "Беспроводные",
        bluetooth: 5.2,
        kGs: 24
    }
];

var Guitars = [
    {
        type: 'Guitars',
        name: "YAMAHA F310",
        price: 23990,
        guiType: "Акустическая",
        lad: 18,   //количество ладрв
        strun: 6,  //количество струн
        mater: "Ель",  //материал
    },

    {
        type: 'Guitars',
        name: "IBANEZ TCY10E-BK",
        price: 46990,
        guiType: "Акустическая",
        lad: 20,  
        strun: 6,
        mater: "Красное дерево"
    },

    {
        type: 'Guitars',
        name: "FLIGHT C-120 NA 3/4",
        price:15990,
        guiType: "Классическая",
        lad: 16,
        strun: 6,
        mater: "Сапело"
    }
];

var Acoustics = [
    {
        type: 'Acoustics',
        name: "Amphion Argon1 Walnut",
        price: 119990,
        kolvo: "Двухполосная", //количество полос
        fiel: 86,   //Чувствительность, дБ 
        mosh: 150,  //Мощность, Вт
        material: "Дерево",  //материал
    },

    {
        type: 'Acoustics',
        name: "FiiO SP3 Black",
        price: 42090 ,
        kolvo: "Двухполосная",
        fiel: 45,  
        mosh: 39,
        material: "Железо, алюминий"
    },

    {
        type: 'Acoustics',
        name: "Edifier R1080BT Black",
        price: 10310,
        kolvo: "Двухполосная",
        fiel: 34,
        mosh: 24,
        material: "МДФ"
    }
];

var Zvuki = [
    {
        type: 'Zvuki',
        name: "Focusrite Scarlett Solo 4th Gen",
        price: 21800,
        factor: "Портативный", //Форм-фактор
        vhod: 6.3,   //Инструментальный вход (Hi-Z) 
        kanal: 2,  //Количество каналов
        soot: 127,  //Соотношение сигнал/шум, дБ
    },

    {
        type: 'Zvuki',
        name: "MOTU M2",
        price: 27900 ,
        factor: "Портативный",
        vhod: 6.3,  
        kanal: 2,
        soot: 150
    },

    {
        type: 'Zvuki',
        name: "Antelope Audio Zen Go Synergy Core USB",
        price: 53900,
        factor: "Cтационарный",
        vhod: 6.5,
        kanal: 4,
        soot: 190
    }
];

var catalog = JSON.parse(localStorage.getItem('catalog'));

cart = {
    selectedProducts: [],
    totalAmount: 0,
    totalQuantity: 0,
}

function updateCartDisplay() {
    var container = document.querySelector(".cart-items-container");
    container.innerHTML = "";

    for (let product of cart.selectedProducts) {
        container.innerHTML += `    
            <div class="cart-item" id="${cart.selectedProducts.indexOf(product)}">
                <img src="img/catalog/${product.type == "Microphones" ? 'Microphones' : (product.type == "Earpodes" ? 'Earpodes' : (product.type == "Guitars" ? 'Guitars' : (product.type == "Acoustics" ? 'Acoustics' : 'Zvuki')))}/${product.name}.png" width="150" height="150">
                <p class="name">${product.name}</p>
    
                <div class="quantity-container">
                  <button class="minus" onclick="decreaseQuantity('${product.name}')">
                    <img src="img/cart/minus.png" width="28px" height="28px">
                  </button>
    
                  <p class="quantity">${product.quantity}</p>
    
                  <button class="plus" onclick="increaseQuantity('${product.name}')">
                    <img src="img/cart/plus.png" width="25px" height="25px">
                  </button>
                </div>
    
                <div class="delete">
                  <button onclick="deleteInCart('${product.name}')">
                    <img src="img/cart/delete.png" width="30px" height="30px">
                  </button>
                  
                </div>
    
                <div class="price">
                  <p>${formatPrice(product.price * product.quantity)}</p>
                </div>
   
              </div>
            `;
    }

    container = document.querySelector(".total-amount");
    container.innerHTML = `Всего: ${formatPrice(cart.totalAmount)}`;

    container = document.querySelector(".total-quantity");
    container.innerHTML = `Товаров: ${cart.totalQuantity}`;
}

function addToCart(name) {
    var index = findIndexInCart(name);

    if (index == -1) {
        index = findIndexInCatalog(name);
        cart.selectedProducts.unshift(catalog.products[index]);
        cart.selectedProducts[0].quantity = 1;

        cart.totalAmount += cart.selectedProducts[0].price;
        cart.totalQuantity++;
    }

    else {
        increaseQuantity(name);
    }

    updateCartDisplay();
}

function increaseQuantity(name) {
    var index = findIndexInCart(name);

    cart.selectedProducts[index].quantity += 1;
    cart.totalAmount += cart.selectedProducts[index].price;
    cart.totalQuantity++;

    updateCartDisplay();
}

function decreaseQuantity(name) {
    var index = findIndexInCart(name);

    if (cart.selectedProducts[index].quantity > 1) {
        cart.selectedProducts[index].quantity -= 1;

        cart.totalAmount -= cart.selectedProducts[index].price;
        cart.totalQuantity--;
    }

    else {
        deleteInCart(name);
    }

    updateCartDisplay();
}

function deleteInCart(name) {
    id = findIndexInCart(name);

    cart.totalAmount -= cart.selectedProducts[id].price * cart.selectedProducts[id].quantity;
    cart.totalQuantity -= cart.selectedProducts[id].quantity;
    cart.selectedProducts.splice(id, 1);

    updateCartDisplay();
}

function clearCart() {
    cart = {
        selectedProducts: [],
        totalAmount: 0,
        totalQuantity: 0
    }

    updateCartDisplay();
}

/*-----------------------------------------------------------*/

function findIndexInCatalog(name) {
    for (let i = 0; i < catalog.products.length; i++) {
        if (catalog.products[i].name == name) {
            return i;
        }
    }

    return -1;
}

function findIndexInCart(name) {
    for (let i = 0; i < cart.selectedProducts.length; i++) {
        if (cart.selectedProducts[i].name == name) {
            return i;
        }
    }

    return -1;
}

function formatPrice(price) {
    if (price == 0) {
        return "0 ₽"
    }

    else {
        let pass = 0;
        let result = "";

        while (price > 0) {
            if (pass == 3) {
                result += " ";
                pass = 0;
            }

            result += price % 10;
            price = Math.floor(price / 10);

            pass++;
        }

        result = result.split('').reverse().join('');

        result += " ₽";

        return result;
    }
}