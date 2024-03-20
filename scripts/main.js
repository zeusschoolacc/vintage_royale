class PRODUCT {
    constructor (name, image, price) {
        this.name = name;
        this.image = image;
        this.price = price;
    }
}

const container = document.querySelector(".products");

const productNames = ["Black Forest"];
const productImages = ["laptopbg.jpg"];
const productPrices = [8000.0];
const PRODUCTS = [];

for(let i = 0; i < productNames.length + 2; i++) {
    const newProduct = new PRODUCT(productNames[0], productImages[0], productPrices[0]);
    PRODUCTS.push(newProduct);
}

function displayProducts(PRODUCTS) {
    for(let i = 0; i < PRODUCTS.length; i++) {
        const productBox = document.createElement("div");
        const prod_name = document.createElement("h1");
        const prod_image = document.createElement("img");
        const prod_price = document.createElement("h3");

        productBox.className = "productBox";
        prod_name.className = "productName";
        prod_image.className = "productImage";
        prod_price.className = "productPrice";

        prod_name.textContent = PRODUCTS[i].name;
        prod_image.src = `../assets/images/products/${PRODUCTS[i].image}`;
        prod_price.textContent = `Php ${PRODUCTS[i].price}.00`;

        productBox.appendChild(prod_image);
        productBox.appendChild(prod_name);
        productBox.appendChild(prod_price);
        container.appendChild(productBox);
    }
}

displayProducts(PRODUCTS);