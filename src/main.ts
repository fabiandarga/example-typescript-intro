const VAT = 0.19; // 19% Mehrwertsteuer

// Wandelt eine Zahl in ein Deutschen Preis um: z.B. 5.5 -> 5,5€
function formatPrice(price: number) : string {
    return (price + '€').replace('.', ',')
}

// Addiert die Umsatzsteuer
function addVat(price: number) : number {
    return price * (1 + VAT);
}

function main() {
    const product = {
        name: 'Earphones x4',
        price: 39.99
    };

    const price = addVat(product.price);
    const formattedPrice = formatPrice(price);

    console.log(`Product: ${product.name} price: ${formattedPrice}`);
}

main();