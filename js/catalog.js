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
        name: "Beyerdynamic DT 990 PRO 250 ohm",
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
        name: "FLIGHT C-120 NA 34",
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

var catalog = {
    products: Microphones,
    type: "Microphones"
};

var filteredProducts = [];

/*-----------------------------------------------------------*/

function updateCatalog() {
    localStorage.setItem('catalog', JSON.stringify(catalog));
}

updateCatalog();

/*-----------------------------------------------------------*/

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

function updateCatalogDisplay(products) {
    var container = document.querySelector(".catalog");
    container.innerHTML = "";
    if (catalog.type == "Microphones") {
        for (let product of products) {
            container.innerHTML += `    
            <div class="catalog-item" id="${products.indexOf(product)}">
                <img src="img/catalog/Microphones/${product.name}.png" width="150" height="150">
                <p class="name">${product.name}</p>
    
                <div class="specifications">
                  <p>Вес: ${product.weight} г</p>
                  <p>Тип микрофона: ${product.microType}</p>
                  <p>Соотношение сигнал/шум: ${product.db} дБ</p>
                  <p>Сопротивление: ${product.om} Ом</p>
                </div>
    
                <div class="purchase">
                  <p>${formatPrice(product.price)}</p>
    
                  <button onclick="addToCart('${product.name}')">Купить</button>
                </div>
            </div>
        `;
        }
        container.innerHTML += `
            <div class="control">
                <div class="sort">
                    <button onclick="setDefault('default', catalog.products)">
                        <img src="img/catalog/sort/default.png" width="28px" height="28px">
                    </button>            
                    <button onclick="descendingSort('default', catalog.products)">
                        <img src="img/catalog/sort/descending.png" width="28px" height="28px">
                    </button>            
                    <button onclick="ascendingSort('default', catalog.products)">
                        <img src="img/catalog/sort/ascending.png" width="28px" height="28px">
                    </button>
                </div>      
                
            </div>
        `;
    }

    else if (catalog.type == "Earpodes") {
        for (let product of products) {
            container.innerHTML += `    
                <div class="catalog-item" id="${products.indexOf(product)}">
                    <img src="img/catalog/Earpodes/${product.name}.png" width="150" height="150">
                    <p class="name">${product.name}</p>
        
                    <div class="specifications">
                      <p>Время работы: ${product.time} ч</p>
                      <p>Тип наушников: ${product.earType}</p>
                      <p>Версия bluetooth: ${product.bluetooth}</p>
                      <p>Максимальная воспроизводимая частота: ${product.kGs} кГц</p>
                    </div>
        
                    <div class="purchase">
                      <p>${formatPrice(product.price)}</p>
        
                      <button onclick="addToCart('${product.name}')">Купить</button>
                    </div>
                </div>
            `;
        }

        container.innerHTML += `
            <div class="control">
                <div class="sort">
                    <button onclick="setDefault('default', catalog.products)">
                        <img src="img/catalog/sort/default.png" width="28px" height="28px">
                    </button>
            
                    <button onclick="descendingSort('default', catalog.products)">
                        <img src="img/catalog/sort/descending.png" width="28px" height="28px">
                    </button>
            
                    <button onclick="ascendingSort('default', catalog.products)">
                        <img src="img/catalog/sort/ascending.png" width="28px" height="28px">
                    </button>
                </div>
           
                
            </div>
        `;
    }

    else if (catalog.type == "Guitars") {
        for (let product of products) {
            container.innerHTML += `    
                <div class="catalog-item" id="${products.indexOf(product)}">
                    <img src="img/catalog/Guitars/${product.name}.png" width="150" height="150">
                    <p class="name">${product.name}</p>
        
                    <div class="specifications">
                      <p>Количество ладов: ${product.lad}</p>
                      <p>Тип гитары: ${product.guiType}</p>
                      <p>Количество струн: ${product.strun}</p>
                      <p>Материал: ${product.mater}</p>
                    </div>
        
                    <div class="purchase">
                      <p>${formatPrice(product.price)}</p>
        
                      <button onclick="addToCart('${product.name}')">Купить</button>
                    </div>
                </div>
            `;
        }

        container.innerHTML += `
            <div class="control">
                <div class="sort">
                    <button onclick="setDefault('default', catalog.products)">
                        <img src="img/catalog/sort/default.png" width="28px" height="28px">
                    </button>
            
                    <button onclick="descendingSort('default', catalog.products)">
                        <img src="img/catalog/sort/descending.png" width="28px" height="28px">
                    </button>
            
                    <button onclick="ascendingSort('default', catalog.products)">
                        <img src="img/catalog/sort/ascending.png" width="28px" height="28px">
                    </button>
                </div>
           
                
            </div>
        `;
    }

    else if (catalog.type == "Acoustics") {
        for (let product of products) {
            container.innerHTML += `    
                <div class="catalog-item" id="${products.indexOf(product)}">
                    <img src="img/catalog/Acoustics/${product.name}.png" width="150" height="150">
                    <p class="name">${product.name}</p>
        
                    <div class="specifications">
                      <p>Чувствительность: ${product.fiel} дБ</p>
                      <p>Количество полос: ${product.kolvo}</p>
                      <p>Мощность: ${product.mosh} Вт</p>
                      <p>Материал: ${product.material}</p>
                    </div>
        
                    <div class="purchase">
                      <p>${formatPrice(product.price)}</p>
        
                      <button onclick="addToCart('${product.name}')">Купить</button>
                    </div>
                </div>
            `;
        }

        container.innerHTML += `
            <div class="control">
                <div class="sort">
                    <button onclick="setDefault('default', catalog.products)">
                        <img src="img/catalog/sort/default.png" width="28px" height="28px">
                    </button>
            
                    <button onclick="descendingSort('default', catalog.products)">
                        <img src="img/catalog/sort/descending.png" width="28px" height="28px">
                    </button>
            
                    <button onclick="ascendingSort('default', catalog.products)">
                        <img src="img/catalog/sort/ascending.png" width="28px" height="28px">
                    </button>
                </div>
           
                
            </div>
        `;
    }

    else if (catalog.type == "Zvuki") {
        for (let product of products) {
            container.innerHTML += `    
                <div class="catalog-item" id="${products.indexOf(product)}">
                    <img src="img/catalog/Zvuki/${product.name}.png" width="150" height="150">
                    <p class="name">${product.name}</p>
        
                    <div class="specifications">
                      <p>Соотношение сигнал/шум: ${product.soot} дБ</p>
                      <p>Количество каналов: ${product.kanal}</p>
                      <p>Инстурментальный вход (Hi-z): ${product.vhod}</p>
                      <p>Форм-фактор: ${product.factor}</p>
                    </div>
        
                    <div class="purchase">
                      <p>${formatPrice(product.price)}</p>
        
                      <button onclick="addToCart('${product.name}')">Купить</button>
                    </div>
                </div>
            `;
        }

        container.innerHTML += `
            <div class="control">
                <div class="sort">
                    <button onclick="setDefault('default', catalog.products)">
                        <img src="img/catalog/sort/default.png" width="28px" height="28px">
                    </button>
            
                    <button onclick="descendingSort('default', catalog.products)">
                        <img src="img/catalog/sort/descending.png" width="28px" height="28px">
                    </button>
            
                    <button onclick="ascendingSort('default', catalog.products)">
                        <img src="img/catalog/sort/ascending.png" width="28px" height="28px">
                    </button>
                </div>
           
                
            </div>
        `;
    }



}

updateCatalogDisplay(Microphones);

/*-----------------------------------------------------------*/

function setDefault(mode, products) {
    if (mode == 'default') {        updateCatalogDisplay(products);    }

    else {        updateFilteredCatalogDisplay(products);    }
}
function descendingSort(mode, products) {
    var descendingProducts = products.slice();

    for (let i = 0; i < descendingProducts.length - 1; i++) {
        for (let j = 0; j < descendingProducts.length - 1 - i; j++) {
            if (descendingProducts[j].price < descendingProducts[j + 1].price) {
                const temp = descendingProducts[j];
                descendingProducts[j] = descendingProducts[j + 1];
                descendingProducts[j + 1] = temp;
            }
        }
    }
    if (mode == 'default') {        updateCatalogDisplay(descendingProducts);    }
    else {        updateFilteredCatalogDisplay(descendingProducts);    }
}
function ascendingSort(mode, products) {
    var ascendingProducts = products.slice();
    for (let i = 0; i < ascendingProducts.length - 1; i++) {
        for (let j = 0; j < ascendingProducts.length - 1 - i; j++) {
            if (ascendingProducts[j].price > ascendingProducts[j + 1].price) {
                const temp = ascendingProducts[j];
                ascendingProducts[j] = ascendingProducts[j + 1];
                ascendingProducts[j + 1] = temp;
            }
        }
    }
    if (mode == 'default') {        updateCatalogDisplay(ascendingProducts);    }
    else {        updateFilteredCatalogDisplay(ascendingProducts);    }
}

/*-----------------------------------------------------------*/




/*-----------------------------------------------------------*/

function setMicrophones() {
    catalog.products = [];

    for (let i = 0; i < Microphones.length; i++) {
        catalog.products[i] = Microphones[i];
    }

    catalog.type = "Microphones";

    updateCatalog();
    updateCatalogDisplay(catalog.products);
}

function setEarpodes() {
    catalog.products = [];

    for (let i = 0; i < Earpodes.length; i++) {
        catalog.products[i] = Earpodes[i];
    }

    catalog.type = "Earpodes";

    updateCatalog();
    updateCatalogDisplay(catalog.products);
}

function setGuitars() {
    catalog.products = [];

    for (let i = 0; i < Guitars.length; i++) {
        catalog.products[i] = Guitars[i];
    }

    catalog.type = "Guitars";

    updateCatalog();
    updateCatalogDisplay(catalog.products);
}

function setAcoustics() {
    catalog.products = [];

    for (let i = 0; i < Acoustics.length; i++) {
        catalog.products[i] = Acoustics[i];
    }

    catalog.type = "Acoustics";

    updateCatalog();
    updateCatalogDisplay(catalog.products);
}

function setZvuki() {
    catalog.products = [];

    for (let i = 0; i < Zvuki.length; i++) {
        catalog.products[i] = Zvuki[i];
    }

    catalog.type = "Zvuki";

    updateCatalog();
    updateCatalogDisplay(catalog.products);
}
/*-----------------------------------------------------------*/