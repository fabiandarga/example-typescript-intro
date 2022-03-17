const VAT = 0.19; // 19% Mehrwertsteuer

// Wandelt eine Zahl in ein Deutschen Preis um: z.B. 5.5 -> 5,5€
function formatPrice(price) {
    return (price + '€').replace('.', ',')
}

// Addiert die Umsatzsteuer
function addVat(price) {
    return price * (1 + VAT);
}

function main() {
    const product = {
        name: 'Earphones x4',
        price: 39.99
    };

    let price = formatPrice(product.price);
    price = addVat(price);

    console.log(`Product: ${product.name} price: ${product.price}`);
}

main();