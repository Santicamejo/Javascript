const inputValue = document.getElementById('itemPrice');
const inputDiscount = document.getElementById('cupon');
const btn = document.getElementById('botton');

btn.addEventListener('click', cuponDiscount);



function cuponDiscount() {

    const price = Number(inputValue.value);
    const userDiscount = Number(inputDiscount.value);
    const activeDiscounts = ['SA123', 'SA456', 'SA789'];

    if(userDiscount === activeDiscounts) {
        alert("cuponValido")
    }else{
        alert("Cupon no valido")
    }
}


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
}