class PRODUCT {
    constructor (name, image, price) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.priceNumber = Number(price.replace(/,/g, ''));
    }
}

const container = document.querySelector(".products");
const sortByPrice = document.getElementById("priceFilter");
const sortByLatest = document.getElementById("latestFilter");

const productNames = ["Lavender Rose Coffee Set", "Old Country Rose Tea & Coffee Set", "Tahiti Tea Set", "Old English Rose Duo", "Old Country Rose Dinner Plate", "Masquerade Set", "Val D'Or Set", "Masquerade Tea-for-Two set", "Sweet Romance Set"];
const productImages = ["lavenderRoseCS", "OCRCS", "TahitiTS", "OldEnglishDuo", "OCRDinnerPlate", "MasqueradeSet", "ValDorSet", "MasqueradeTwo", "SweetRomanceSet"];
const productPrices = ["11,000", "21,000", "15,000", "2,000", "1,500", "15,000", "7,000", "7,500", "11,000"];
const PRODUCTS = [];

for(let i = 0; i < productNames.length; i++) {
    const newProduct = new PRODUCT(productNames[i], productImages[i], productPrices[i]);
    PRODUCTS.push(newProduct);
}

function addDOMtoProduct(PRODUCTS) {
    for(let i = 0; i < PRODUCTS.length; i++) {
        const productBox = document.createElement("div");
        const prodDesc = document.createElement("div");
        const prod_name = document.createElement("h1");
        const prod_image = document.createElement("img");
        const prod_price = document.createElement("h3");

        productBox.className = "productBox";
        prodDesc.className = "productDesc";
        prod_name.className = "productName";
        prod_image.className = "productImage";
        prod_price.className = "productPrice";

        prod_name.textContent = PRODUCTS[i].name;
        prod_image.src = `../assets/images/products/${PRODUCTS[i].image}.jpg`;
        prod_price.textContent = `Php ${PRODUCTS[i].price}.00`;

        productBox.appendChild(prod_image);
        prodDesc.appendChild(prod_name);
        prodDesc.appendChild(prod_price);
        productBox.appendChild(prodDesc);

        PRODUCTS[i].productBox = productBox;
    }
}

function displayProducts(PRODUCTS) {
    for(let i = 0; i < PRODUCTS.length; i++) {
        container.appendChild(PRODUCTS[i].productBox);
    }
}

function displayByPrice(PRODUCTS) {
    const tempArr = PRODUCTS.slice();

    for(let i = 0; i < tempArr.length; i++) {
        let cheapest = i;
        for(let j = i + 1; j < tempArr.length; j++) {
            if(tempArr[cheapest].priceNumber > tempArr[j].priceNumber) {
                cheapest = j;
            }
        }
        if(cheapest != i) {
            let temp = tempArr[i];
            tempArr[i] = tempArr[cheapest];
            tempArr[cheapest] = temp;
        }
    }

    displayProducts(tempArr);
}

sortByLatest.addEventListener("click", () => {
    if(sortByLatest.classList.contains("filterPressed")) {
        sortByLatest.classList.remove("filterPressed");
        displayProducts(PRODUCTS);
        return;
    }
    for(let i = PRODUCTS.length - 1; i >= 0; i--) {
        container.appendChild(PRODUCTS[i].productBox);
        sortByLatest.classList.add("filterPressed");
        sortByPrice.classList.remove("filterPressed");
    }
});

sortByPrice.addEventListener("click", () => {
    if(sortByPrice.classList.contains("filterPressed")) {
        sortByPrice.classList.remove("filterPressed");
        displayProducts(PRODUCTS);
        return;
    }
        displayByPrice(PRODUCTS);
        sortByPrice.classList.add("filterPressed");
        sortByLatest.classList.remove("filterPressed");
});


if(container) {
    addDOMtoProduct(PRODUCTS)
    displayProducts(PRODUCTS);
}