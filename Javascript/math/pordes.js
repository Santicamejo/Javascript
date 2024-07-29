const inputValue = document.getElementById('inputValue');
const inputDiscount = document.getElementById('inputDiscount');
const btn = document.querySelector('#calcular');

btn.addEventListener('click', finalDiscount);

function finalDiscount() {

    const price = Number(inputValue.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount) {
        result.innerText = "Debe llenar los campos!"
        return;
    };
    if(discount > 100){
        result.innerText = "El descuento no debe ser mayor a 100%"
        return;
    }
        const finalPrice = (price * (100 - discount)) / 100;
        result.innerText = "el precio del producto es: "+ price +"$ y con el descuento de: "+ discount +"% queda en: "+ finalPrice +"$"
};